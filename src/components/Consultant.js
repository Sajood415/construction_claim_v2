import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Web3 from 'web3';
import { contractAddress, ABI } from '../config';

import { Loader } from '../Loader';

import AddCommentCostClaim from "./Consultant/AddCommentCostClaim";
import AddCommentDelayClaim from "./Consultant/AddCommentDelayClaim";

const Consultant = () => {
  const [loading, setLoading] = useState(true);
  const [showSideBar, setShowSideBar] = useState(false);
  const [showAddCommentDelay, setShowAddCommentDelay] = useState(false);
  const [showAddCommentCost, setShowAddCommentCost] = useState(false);

  useEffect(() => {
    checkConsultantRole();
  }, [])

  function handleShowAddCommentDelay() {
    setShowAddCommentDelay(true);
    setShowAddCommentCost(false);
  }

  function handleShowAddCommentCost() {
    setShowAddCommentCost(true);
    setShowAddCommentDelay(false);
  }

  const location = useLocation();
  const accountAddress = location.state.accountAddress

  const checkConsultantRole = async () => {
    setLoading(true)
    var web3 = window.web3;
    web3 = new Web3(web3.currentProvider);
    const instance = new web3.eth.Contract(ABI, contractAddress);
    const userAccount = await web3.eth.getAccounts();
    const account = userAccount[0];
    // const projectInitiatedNo = await instance.methods._reCommentNumber().call({ from: account });
    // const data = await instance.methods.checkProjectData(projectInitiatedNo).call({ from: account })
    // console.log("data entered from admin", data)
    // const isConsultant = await instance.methods.hasRoleConsultant(projectInitiatedNo).call({ from: account })
    // console.log(isConsultant, account)
    const claimNumberGoing = await instance.methods._projectNumberTrack().call({ from: account })// to get 0th project
    const projectData = await instance.methods._projects(claimNumberGoing).call({ from: account })
    console.log(claimNumberGoing)
    console.log(projectData)
    console.log(projectData._contractorAddress)
    console.log(account)
    
    if (projectData._consultantAddress == account) {
      setShowAddCommentDelay(false)
      setShowSideBar(true)
      setShowAddCommentCost(false)
    } else {
      setShowAddCommentDelay(false)
      setShowSideBar(false)
      setShowAddCommentCost(false)
    }
    setLoading(false);
  }

  return (
    <>
      <div className="App-header">
        {showSideBar && (
          <>
                {loading && <Loader />}
            <header>
              <nav className="navbar">
                <div className="accountAdd">
                  <span>Account number:  </span>
                  {accountAddress}
                </div>
              </nav>
            </header>
            <div className="sideBar">
              <div className={['sideBarButtonWrap', showAddCommentDelay ? 'activeButton' : ''].join(' ')} tabIndex="1" onClick={handleShowAddCommentDelay}>Add Comment Delay Claim</div>
              <div className={['sideBarButtonWrap', showAddCommentCost ? 'activeButton' : ''].join(' ')} tabIndex="1" onClick={handleShowAddCommentCost}>Add Comment Cost Claim</div>
            </div>
          </>
        )}
        {showAddCommentDelay && (<AddCommentDelayClaim />)}
        {showAddCommentCost && (<AddCommentCostClaim />)}
      </div>
    </>
  )
}

export default Consultant