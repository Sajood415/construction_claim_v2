import React, { useState } from 'react'
import Web3 from 'web3';
import { contractAddress, ABI } from '../../config';

const AddCommentDelayClaim = () => {
    const [claimNo, setClaimNo] = useState("");
    const [showData, setShowData] = useState(false);
    const [result, setResult] = useState({});
    const [comment, setComment] = useState("");
    const [commentAdded, setCommentAdded] = useState("")
    const [showAddCommentButton, setShowAddCommentButton] = useState(false);

    function handleClaimNo(e) {
        e.preventDefault();
        setClaimNo(e.target.value);
    }

    function handleCommentAdded(e) {
        setCommentAdded(e.target.value)
    }

    const searchClaim = async (e) => {
        e.preventDefault();
        var web3 = window.web3;
        web3 = new Web3(web3.currentProvider);
        const instance = new web3.eth.Contract(ABI, contractAddress);
        const userAccount = await web3.eth.getAccounts();
        const account = userAccount[0];
        const claimData = await instance.methods._costRelatedClaimprojectList(claimNo).call({ from: account });
        const commentsData = await instance.methods._reComments(claimNo).call({ from: account });
        console.log(commentsData)
        console.log(claimData)
        if (claimData._causeOfClaim == "") {
            setShowData(false);
            alert("No Data Found");
        } else {
            setShowData(true)
            setResult(claimData)
            setComment(commentsData)
        }
        if (commentsData == "" || commentsData == undefined) {
            setShowAddCommentButton(true);
        }
        setClaimNo("");
    }

    const addComment = async (e) => {
        e.preventDefault();
        console.log(commentAdded);
        var web3 = window.web3;
        web3 = new Web3(web3.currentProvider);
        const instance = new web3.eth.Contract(ABI, contractAddress);
        const userAccount = await web3.eth.getAccounts();
        const account = userAccount[0];
        const commentAddedRes = await instance.methods.addComments(commentAdded).send({ from: account });
        if (commentAddedRes.status == true) {
            setShowAddCommentButton(false);
            window.location.reload();
        }
        const commentsData = await instance.methods._reComments(claimNo).call({ from: account });
        setComment(commentsData)
        console.log("After being added", commentsData)
    }

    return (
        <div className='findProject'>
            <div className="formContainer">
                <div className="searchForm">
                    <h4>Search Claim</h4>
                    <div className="input-container">
                        <label>Claim no: </label>
                        <input className="claimNo" type="number" name="claim no" required value={claimNo} onChange={handleClaimNo} />
                    </div>
                    <div className="button-container">
                        <input type="submit" value="Search" onClick={searchClaim} />
                    </div>
                </div>
                {showData && (
                    <div className="serachFormFinalData" style={{ marginTop: '360px' }}>
                        <h4>Data</h4>
                        <div>Claim no:   {result._claimNo}</div>
                        <div>Date:   {result._date}</div>
                        <div>Project Name:   {result._projectName}</div>
                        <div>Cause of Claim:   {result._causeOfClaim}</div>
                        <div>Contract Type:   {result._contractType}</div>
                        <div>Clause Id:   {result._clauseId}</div>
                        <div>Clause Title:   {result._clauseTitle}</div>
                        <div>Claim Description:   {result._claimDesc}</div>
                        <div>Total Project Cost:   {result._totalProjectCost}</div>
                        <div>Claim Amount:   {result._claimAmount}</div>
                        {showAddCommentButton && (
                            <div>Comment by Consultant:
                                <>
                                    <input type="text" value={commentAdded} onChange={handleCommentAdded} />
                                    <div className="button-container">
                                        <input type="submit" value="Add" onClick={addComment} />
                                    </div>
                                </>
                            </div>)}
                        {!showAddCommentButton && (
                            <div>Comment by Consultant:  {comment}</div>)}
                    </div>
                )}
            </div>
        </div>)
}

export default AddCommentDelayClaim