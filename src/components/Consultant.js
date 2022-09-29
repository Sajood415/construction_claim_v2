import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Web3 from 'web3';
import { contractAddress, ABI } from '../config';

import AddCommentCostClaim from "./Consultant/AddCommentCostClaim";
import AddCommentDelayClaim from "./Consultant/AddCommentDelayClaim";

const Consultant = () => {
  const [showSideBar, setShowSideBar] = useState(false);
  const [showAddCommentDelay, setShowAddCommentDelay] = useState(false);
  const [showAddCommentCost, setShowAddCommentCost] = useState(false);

  useEffect(() => {
    checkConsultantRole();
  }, [showAddCommentDelay, showAddCommentCost])

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
    var web3 = window.web3;
    web3 = new Web3(web3.currentProvider);
    const instance = new web3.eth.Contract(ABI, contractAddress);
    const userAccount = await web3.eth.getAccounts();
    const account = userAccount[0];
    const projectInitiatedNo = await instance.methods._reCommentNumber().call({ from: account });
    const data = await instance.methods.checkProjectData(projectInitiatedNo).call({ from: account })
    console.log("data entered from admin", data)
    const isConsultant = await instance.methods.hasRoleConsultant(projectInitiatedNo).call({ from: account })
    console.log(isConsultant, account)
    if (isConsultant == account) {
      if (showAddCommentCost) {
        setShowAddCommentDelay(false)
        setShowSideBar(true)
        setShowAddCommentCost(true)
      } else {
        setShowAddCommentDelay(true)
        setShowSideBar(true)
        setShowAddCommentCost(false)
      }
    }
  }

  return (
    <>
      <div className="App-header">
        {showSideBar && (
          <>
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