import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Web3 from 'web3';
import { contractAddress, ABI } from '../config';

import AddProject from "./Contractor/AddProject";
import FindDelayRelatedClaim from "./Contractor/FindDelayRelatedClaim";
import FindCostRelatedClaim from "./Contractor/FindCostRelatedClaim";


const Contractor = () => {
  const [isContractor, setContractor] = useState(false);
  const [showAddForm, setShowAddForm] = useState(true);
  const [showDelayRelatedClaim, setshowDelayRelatedClaim] = useState(false);
  const [showCostRelatedClaim, setshowCostRelatedClaim] = useState(false);

  const location = useLocation();
  const accountAddress = location.state.accountAddress

  useEffect(() => {
    checkContractorRole();
  })

  function showAddFormField() {
    setShowAddForm(true);
    setshowDelayRelatedClaim(false);
    setshowCostRelatedClaim(false);
  }

  function showDelayRelatedClaimField() {
    setshowDelayRelatedClaim(true);
    setshowCostRelatedClaim(false);
    setShowAddForm(false);
  }

  function showCostRelatedClaimField() {
    setshowCostRelatedClaim(true);
    setshowDelayRelatedClaim(false);
    setShowAddForm(false);
  }

  const checkContractorRole = async () => {
    var web3 = window.web3;
    web3 = new Web3(web3.currentProvider);
    const instance = new web3.eth.Contract(ABI, contractAddress);
    const contractorHash = web3.utils.soliditySha3('CONTRACTOR');
    console.log(contractorHash)
    const isContractor = await instance.methods.hasRole(contractorHash, accountAddress).call();
    console.log("Contractor: ", isContractor)
    setContractor(isContractor);
  }

  return (
    <>
      <div className="App-header">
        {isContractor && (
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
              <div className={['sideBarButtonWrap', showAddForm ? 'activeButton' : ''].join(' ')} tabIndex="1" onClick={showAddFormField}>Add Project</div>
              <div className={['sideBarButtonWrap', showDelayRelatedClaim ? 'activeButton' : ''].join(' ')} tabIndex="2" onClick={showDelayRelatedClaimField}>Find Delay Related Claim</div>
              <div className={['sideBarButtonWrap', showCostRelatedClaim ? 'activeButton' : ''].join(' ')} tabIndex="3" onClick={showCostRelatedClaimField}>Find Cost Related Claim</div>
            </div>
          </>
        )}
        {isContractor && showAddForm && (<AddProject />)}
        {isContractor && showDelayRelatedClaim && (<FindDelayRelatedClaim />)}
        {isContractor && showCostRelatedClaim && (<FindCostRelatedClaim />)}
        {!isContractor && (
          <div>You are not Contractor</div>
        )}
      </div>
    </>
  )
}

export default Contractor