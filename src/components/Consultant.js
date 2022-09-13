import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Web3 from 'web3';
import { contractAddress, ABI } from '../config';

import AddCommentCostClaim from "./Consultant/AddCommentCostClaim";
import AddCommentDelayClaim from "./Consultant/AddCommentDelayClaim";

const Consultant = () => {
  const [isConsultant, setConsultant] = useState(false);
  const [showAddCommentDelay, setShowAddCommentDelay] = useState(true);
  const [showAddCommentCost, setShowAddCommentCost] = useState(false);

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

  useEffect(() => {
    checkConsultantRole();
  })

  const checkConsultantRole = async () => {
    var web3 = window.web3;
    web3 = new Web3(web3.currentProvider);
    const instance = new web3.eth.Contract(ABI, contractAddress);
    const consultantHash = web3.utils.soliditySha3('CONSULTANT');
    console.log(consultantHash)
    const isConsultant = await instance.methods.hasRole(consultantHash, accountAddress).call();
    setConsultant(isConsultant);
  }

  return (
    <>
      <div className="App-header">
        {isConsultant && (
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
        {isConsultant && showAddCommentDelay && (<AddCommentDelayClaim />)}
        {isConsultant && showAddCommentCost && (<AddCommentCostClaim />)}
        {!isConsultant && (
          <div>You are not Consultant</div>
        )}
      </div>
    </>
  )
}

export default Consultant