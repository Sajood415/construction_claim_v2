import React, { useState } from 'react'
import Web3 from 'web3';
import { contractAddress, ABI } from '../../config';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const AddClientRemarksDelay = () => {
  const [claimNo, setClaimNo] = useState("");
  const [showData, setShowData] = useState(false);
  const [projectData, setProjectData] = useState({});
  const [result, setResult] = useState({});
  const [comment, setComment] = useState({});
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
    const projectData = await instance.methods._projects(claimNo).call({ from: account })
    const claimData = await instance.methods._delayRelatedClaimprojectList(claimNo).call({ from: account });
    const commentsData = await instance.methods._reComments(claimNo).call({ from: account });
    const remarksByclient = await instance.methods._clientCommentsDelay(claimNo).call({ from: account });
    console.log(projectData) // admin data
    console.log(claimData) // contractor
    console.log(commentsData) // consultant

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

  const date = (date) => {
    const unixTime = date * 1000
    const format = {
      weekday: 'long',
      day: 'numeric',
      month: "2-digit",
      year: "numeric"
    }
    return (new Date(unixTime).toLocaleString('en-US', format))
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
            <div>Claim No:   {projectData._claimNo}</div>
            <div>Project Name:   {projectData._projectName}</div>
            <div>Date:   {date(result._date)}</div>
            <div>Cause of Claim:   {result._causeOfClaim}</div>
            <div>Contract Type:   {result._contractType}</div>
            <div>Clause Id:   {result._clauseId}</div>
            <div>Clause Title:   {result._clauseTitle}</div>
            <div>Claim Description:   {result._claimDesc}</div>
            <div>Total Poject Duration:   {result._totalProjectDuration}</div>
            <div>Project Starting Date:   {date(result._projectStartingDate)}</div>
            <div>Project Completion Date:   {date(result._projectCompletetionDate)}</div>
            <div>Delay in days:   {result._delayInDays}</div>
            <div>Revised Project Completion Date:   {date(result._revisedProjectCompletionDate)}</div>
            <div>Comment by Consultant: {comment._comment}</div>
            {!showAddRemarksButton && (
              <>
                <div>Granted Extension: {clientRemarks._grantedExtension}</div>
                <div>Completion Date After Grant: {date(clientRemarks._completetionDateAfterGrant)}</div>
                <div>Awarded Money: {clientRemarks._awardedMoney}</div>
              </>
            )}
            {showAddRemarksButton && (
              <>
                <div>Granted Extension:
                  <input type="text" value={grantedExtension} onChange={handleGrantedExtension} />
                </div>
                <div>Completion Date After Grant:
                  <DatePicker selected={completionDate} onChange={date => {
                    var full_date = date.getTime()
                    setCompletionDate(full_date)
                  }} showYearDropdown />                </div>
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