import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Web3 from 'web3';
import { contractAddress, ABI } from '../config';

import { Loader } from '../Loader';



import AddProject from "./Contractor/AddProject";
import FindDelayRelatedClaim from "./Contractor/FindDelayRelatedClaim";
import FindCostRelatedClaim from "./Contractor/FindCostRelatedClaim";


const Contractor = () => {
  const [loading, setLoading] = useState(true);
  const [showAddForm, setShowAddForm] = useState(false);
  const [showSideBar, setShowSideBar] = useState(false);
  const [showDelayRelatedClaim, setshowDelayRelatedClaim] = useState(false);
  const [showCostRelatedClaim, setshowCostRelatedClaim] = useState(false);

  useEffect(() => {
    checkContractorRole();
  }, []);

  const location = useLocation();
  const accountAddress = location.state.accountAddress

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
    const userAccount = await web3.eth.getAccounts();
    const account = userAccount[0];
    const projectInitiatedNo = await instance.methods._reCommentNumber().call({ from: account });
    const data = await instance.methods.checkProjectData(projectInitiatedNo).call({ from: account })
    console.log("data entered from admin", data)
    const isContractor = await instance.methods.hasRoleContractor(projectInitiatedNo).call({ from: account })
    if (isContractor == account) {
      setShowSideBar(true)
      setShowAddForm(true)
      if (!data) {
        setShowSideBar(true)
        setShowAddForm(true)
      }
    } else {
      setShowSideBar(true)
      setShowAddForm(false)
      setshowCostRelatedClaim(false)
      setshowDelayRelatedClaim(false)
    }
    setLoading(false)
  }

  return (
    <>
      {loading && <Loader />}
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
              <div className={['sideBarButtonWrap', showAddForm ? 'activeButton' : ''].join(' ')} tabIndex="1" onClick={showAddFormField}>Add Claim</div>
              <div className={['sideBarButtonWrap', showDelayRelatedClaim ? 'activeButton' : ''].join(' ')} tabIndex="2" onClick={showDelayRelatedClaimField}>Find Delay Related Claim</div>
              <div className={['sideBarButtonWrap', showCostRelatedClaim ? 'activeButton' : ''].join(' ')} tabIndex="3" onClick={showCostRelatedClaimField}>Find Cost Related Claim</div>
            </div>
          </>
        )}
        {showAddForm && (<AddProject />)}
        {showDelayRelatedClaim && (<FindDelayRelatedClaim />)}
        {showCostRelatedClaim && (<FindCostRelatedClaim />)}
      </div>
    </>
  )
}

export default Contractor