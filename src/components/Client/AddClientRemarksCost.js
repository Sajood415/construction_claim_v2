import React, { useState } from 'react'
import Web3 from 'web3';
import { contractAddress, ABI } from '../../config';

const AddClientRemarksCost = () => {
  const [claimNo, setClaimNo] = useState("");
  const [showData, setShowData] = useState(false);
  const [result, setResult] = useState({});
  const [comment, setComment] = useState({});
  const [projectData, setProjectData] = useState({});
  const [clientRemarks, setClientRemarks] = useState({})
  const [showAddRemarksButton, setShowAddRemarksButton] = useState(false)
  const [awardedMoney, setAwardedMoney] = useState("");

  function handleAwardedMoney(e) {
    setAwardedMoney(e.target.value)
  }

  function handleClaimNo(e) {
    e.preventDefault();
    setClaimNo(e.target.value);
  }

  const searchClaim = async (e) => {
    e.preventDefault();
    var web3 = window.web3;
    web3 = new Web3(web3.currentProvider);
    const instance = new web3.eth.Contract(ABI, contractAddress);
    const userAccount = await web3.eth.getAccounts();
    const account = userAccount[0];
    const projectData = await instance.methods._projects(claimNo).call({ from: account })
    const claimData = await instance.methods._costRelatedClaimprojectList(claimNo).call({ from: account });
    const commentsData = await instance.methods._reComments(claimNo).call({ from: account });
    const remarksByclient = await instance.methods._clientCommentsCost(claimNo).call({ from: account });
    console.log(commentsData)
    console.log(claimData)
    console.log(remarksByclient)
    if (claimData._sett == false && commentsData._sett == false) {
      setShowData(false);
      alert("No Data Found");
    } else {
      setShowData(true)
      setResult(claimData)
      setComment(commentsData)
      setClientRemarks(remarksByclient)
      setProjectData(projectData)
    }
    if (remarksByclient._sett == false) {
      setShowAddRemarksButton(true);
    }
    setClaimNo("");
  }

  const submitRemarks = async (e) => {
    e.preventDefault();
    console.log(awardedMoney)
    var web3 = window.web3;
    web3 = new Web3(web3.currentProvider);
    const instance = new web3.eth.Contract(ABI, contractAddress);
    const userAccount = await web3.eth.getAccounts();
    const account = userAccount[0];
    const addClientRemarks = await instance.methods.addclientCommentsCost(awardedMoney).send({ from: account }); // change
    if (addClientRemarks.status) {
      alert("Remarks has been added");
      window.location.reload();
    } else {
      alert("Error has occured");
    }
  }

  return (
    <div className='findProject'>
      <div className="formContainer">
        <div className="searchForm">
          <h4>Search Cost Claim</h4>
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
            <div>Comment by Consultant: {comment._comment}</div>
            {!showAddRemarksButton && (
              <>
                <div>Awarded Money: {clientRemarks}</div>
              </>
            )}
            {showAddRemarksButton && (
              <>
                <div>Awarded Money:
                  <input type="text" value={awardedMoney} onChange={handleAwardedMoney} />
                </div>
                <div className="button-container">
                  <input type="submit" value="Add" onClick={submitRemarks} />
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </div>)
}

export default AddClientRemarksCost