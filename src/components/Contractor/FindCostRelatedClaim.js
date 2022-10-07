import React, { useState, useEffect } from 'react'
import Web3 from 'web3';
import { contractAddress, ABI } from '../../config';
import { Loader } from '../../Loader';




const FindCostRelatedClaim = () => {
  const [loading, setLoading] = useState(false);
  const [claimNo, setClaimNo] = useState(0);
  const [showData, setShowData] = useState(false);
  const [result, setResult] = useState({});
  const [commentsData, setCommentsData] = useState({});
  const [projectResult, setProjectResult] = useState({});
  const [remarksByclient, setRemarksByClient] = useState({});

  const [projectNames, setProjectNames] = useState([]);
  var [selectedProjectName, setSelectedProjectName] = useState(0);


  useEffect(() => {
    getprojectNames();
  }, []);

  const changeSelectOptionHandler = (event) => {
    setSelectedProjectName(event.target.value);
  };



  function handleClaimNo(e) {
    e.preventDefault();
    setClaimNo(e.target.value);
  }

  const getprojectNames = async (e) => {
    setLoading(true)
    var web3 = window.web3;
    web3 = new Web3(web3.currentProvider);
    const instance = new web3.eth.Contract(ABI, contractAddress);
    const userAccount = await web3.eth.getAccounts();
    const account = userAccount[0];
    const projectNamesList = await instance.methods.getProjectNames().call({ from: account });
    setProjectNames(projectNamesList);
    setLoading(false);
  }

  const searchClaim = async (e) => {
    e.preventDefault();
    setLoading(true)
    var web3 = window.web3;
    web3 = new Web3(web3.currentProvider);
    const instance = new web3.eth.Contract(ABI, contractAddress);
    const userAccount = await web3.eth.getAccounts();
    const account = userAccount[0];

    // const projectDataNumber = await instance.methods._projectNumberTrack().call({ from: account }) // for custom search by 

    console.log("selected ki value", selectedProjectName)
    console.log("selected claim", claimNo)

    selectedProjectName++
    console.log("selected ki value after", selectedProjectName)

    const projectData = await instance.methods._projects(selectedProjectName).call({ from: account }) // aik pecha ka pass kro
    const claimData = await instance.methods._costRelatedClaimprojectList(selectedProjectName, claimNo).call({ from: account });
    const commentsData = await instance.methods._reComments(selectedProjectName, claimNo).call({ from: account });
    const remarksByclient = await instance.methods._clientCommentsCost(selectedProjectName, claimNo).call({ from: account });

    console.log(projectData)
    console.log("imp", claimData)
    console.log(commentsData)
    console.log(remarksByclient)

    if (claimData._causeOfClaim === "") {
      setShowData(false);
      alert("No Data Found");
    } else {
      setShowData(true)
      setResult(claimData)
      setProjectResult(projectData)
      setCommentsData(commentsData)
      setRemarksByClient(remarksByclient);
    }
    setLoading(false)
  }

  const date = (date) => {
    var d = new Date(parseInt(date, 10));
    var ds = d.toString('MM/dd/yy HH:mm:ss').substring(0, 15);
    return ds
  }


  return (
    <>
      {loading && <Loader />}
      <div className='findProject'>
        <div className="formContainer">
          <div className="searchForm">
            <h4>Search Cost Claim</h4>
            <div className="input-container">
              <label>Project No: </label>
              <select onChange={changeSelectOptionHandler} value={selectedProjectName}>
                {projectNames.map((item, index) => (
                  <option key={index} value={index}>{item}</option>
                ))
                }
              </select>
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
              <div>Claim No: {projectResult._claimNo}</div>
              <div>Project Name: {projectResult._projectName}</div>
              <div>Date:   {date(result._date)}</div>
              <div>Cause of Claim:   {result._causeOfClaim}</div>
              <div>Contract Type:   {result._contractType}</div>
              <div>Clause Id & Title:   {result._clauseIdAndTitle}</div>
              <div>Claim Description:   {result._claimDesc}</div>
              <div>Total Poject Cost:   {result._totalProjectCost}</div>
              <div>Claim Amount:   {result._claimAmount}</div>
              <div>Image: <a href={result._imgUrl} target="_blank">View Image</a></div>
              <div>Comment:   {commentsData._comment}</div>
              <div>Awarded Money: {remarksByclient._clientRemarks}</div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default FindCostRelatedClaim