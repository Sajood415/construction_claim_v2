import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Web3 from 'web3';
import { contractAddress, ABI } from '../config';

import AddClientRemarksCost from "./Client/AddClientRemarksCost";
import AddClientRemarksDelay from "./Client/AddClientRemarksDelay";

const Client = () => {
  const [isClient, setClient] = useState(false);
  const [showAddRemarksDelay, setShowAddRemarksDelay] = useState(true);
  const [showAddRemarksCost, setShowAddRemarksCost] = useState(false);

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
    const clientHash = web3.utils.soliditySha3('CLIENT');
    console.log(clientHash)
    const isClient = await instance.methods.hasRole(clientHash, accountAddress).call();
    setClient(isClient);
  }

  return (
    <>
      <div className="App-header">
        {isClient && (
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
        {isClient && showAddRemarksDelay && (<AddClientRemarksDelay />)}
        {isClient && showAddRemarksCost && (<AddClientRemarksCost />)}
        {!isClient && (
          <div>You are not Client</div>
        )}
      </div>
    </>
  )
}

export default Client