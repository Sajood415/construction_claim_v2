import React, { useState } from 'react'
import Web3 from 'web3';
import { contractAddress, ABI } from '../../config';

const AddClientRemarksDelay = () => {
  const [claimNo, setClaimNo] = useState("");
  const [showData, setShowData] = useState(false);
  const [result, setResult] = useState({});
  const [comment, setComment] = useState("");
  const [clientRemarks, setClientRemarks] = useState({})
  const [showAddRemarksButton, setShowAddRemarksButton] = useState(false)
  const [grantedExtension, setGrantedExtension] = useState("");
  const [completionDate, setCompletionDate] = useState(null);
  const [awardedMoney, setAwardedMoney] = useState("");

  function handleGrantedExtension(e) {
    setGrantedExtension(e.target.value)
  }

  function handleCompletionDate(e) {
    const date = new Date(e.target.value).getTime() / 1000
    setCompletionDate(date)
  }

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
    const claimData = await instance.methods._delayRelatedClaimprojectList(claimNo).call({ from: account });
    const commentsData = await instance.methods._reComments(claimNo).call({ from: account });
    const remarksByclient = await instance.methods._clientCommentsDelay(claimNo).call({ from: account });
    console.log(commentsData)
    console.log(claimData)
    console.log(remarksByclient)
    if (claimData._causeOfClaim == "") {
      setShowData(false);
      alert("No Data Found");
    } else {
      setShowData(true)
      setResult(claimData)
      setComment(commentsData)
      setClientRemarks(remarksByclient)
    }
    if (remarksByclient._grantedExtension == "") {
      setShowAddRemarksButton(true);
    } 
    setClaimNo("");
  }

  const submitRemarks = async (e) => {
    e.preventDefault();
    console.log(grantedExtension, completionDate, awardedMoney)
    var web3 = window.web3;
    web3 = new Web3(web3.currentProvider);
    const instance = new web3.eth.Contract(ABI, contractAddress);
    const userAccount = await web3.eth.getAccounts();
    const account = userAccount[0];
    const addClientRemarks = await instance.methods.addclientCommentsDelay(grantedExtension, completionDate, awardedMoney).send({ from: account });
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
          <h4>Search Delay Claim</h4>
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
            <div>Cause of Claim:   {result._causeOfClaim}</div>
            <div>Contract Type:   {result._contractType}</div>
            <div>Clause Id:   {result._clauseId}</div>
            <div>Clause Title:   {result._clauseTitle}</div>
            <div>Claim Description:   {result._claimDesc}</div>
            <div>Total Poject Duration:   {result._totalProjectDuration}</div>
            <div>Project Starting Date:   {result._projectStartingDate}</div>
            <div>Project Completion Date:   {result._projectCompletetionDate}</div>
            <div>Delay in days:   {result._delayInDays}</div>
            <div>Revised Project Completion Date:   {result._revisedProjectCompletionDate}</div>
            <div>Comment by Consultant: {comment}</div>
            {!showAddRemarksButton && (
              <>
                <div>Granted Extension: {clientRemarks._grantedExtension}</div>
                <div>Completion Date After Grant: {clientRemarks._completetionDateAfterGrant}</div>
                <div>Awarded Money: {clientRemarks._awardedMoney}</div>
              </>
            )}
            {showAddRemarksButton && (
              <>
                <div>Granted Extension:
                  <input type="text" value={grantedExtension} onChange={handleGrantedExtension} />
                </div>
                <div>Completion Date After Grant:
                  <input type="date" value={completionDate} onChange={handleCompletionDate} />
                </div>
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

export default AddClientRemarksDelay