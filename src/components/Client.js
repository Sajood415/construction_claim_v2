import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Web3 from 'web3';
import { contractAddress, ABI } from '../config';

import AddClientRemarksCost from "./Client/AddClientRemarksCost";
import AddClientRemarksDelay from "./Client/AddClientRemarksDelay";

const Client = () => {
  const [showSideBar, setShowSideBar] = useState(false);
  const [showAddRemarksDelay, setShowAddRemarksDelay] = useState(false);
  const [showAddRemarksCost, setShowAddRemarksCost] = useState(false);

  useEffect(() => {

  }, []);

  function handleShowAddRemarksDelay() {
    setShowAddRemarksDelay(true);
    setShowAddRemarksCost(false);
  }

  function handleShowAddRemarksCost() {
    setShowAddRemarksCost(true);
    setShowAddRemarksDelay(false);
  }

  const location = useLocation();
  const accountAddress = location.state.accountAddress

  useEffect(() => {
    checkClientRole();
  })

  const checkClientRole = async () => {
    var web3 = window.web3;
    web3 = new Web3(web3.currentProvider);
    const instance = new web3.eth.Contract(ABI, contractAddress);
    const userAccount = await web3.eth.getAccounts();
    const account = userAccount[0];
    const projectInitiatedNo = await instance.methods._clientCommentNumber().call({ from: account });
    const data = await instance.methods.checkProjectData(projectInitiatedNo).call({ from: account })
    console.log("data entered from admin", data)
    const isClient = await instance.methods.hasRoleClient(projectInitiatedNo).call({ from: account })
    if (isClient == account) {
      if (showAddRemarksCost) {
        setShowAddRemarksDelay(false)
        setShowSideBar(true)
        setShowAddRemarksCost(true)
      } else {
        setShowAddRemarksDelay(true)
        setShowSideBar(true)
        setShowAddRemarksCost(false)
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
              <div className={['sideBarButtonWrap', showAddRemarksDelay ? 'activeButton' : ''].join(' ')} tabIndex="1" onClick={handleShowAddRemarksDelay}>Add Remarks Delay Claim</div>
              <div className={['sideBarButtonWrap', showAddRemarksCost ? 'activeButton' : ''].join(' ')} tabIndex="1" onClick={handleShowAddRemarksCost}>Add Remarks Cost Claim</div>
            </div>
          </>
        )}
        {showAddRemarksDelay && (<AddClientRemarksDelay />)}
        {showAddRemarksCost && (<AddClientRemarksCost />)}
      </div>
    </>
  )
}

export default Client