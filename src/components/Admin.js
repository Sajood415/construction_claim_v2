import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Web3 from 'web3';
import { contractAddress, ABI } from '../config';

import ContractorField from "./Admin/ContractorField";
import ClientField from "./Admin/ClientField";
import ConsultantField from "./Admin/ConsultantField";


const Admin = () => {
  const [isAdmin, setAdmin] = useState(false);
  const [showContractorData, setShowContractorData] = useState(true);
  const [showConsultantData, setShowConsultantData] = useState(false);
  const [showClientData, setShowClientData] = useState(false);

  const location = useLocation();
  const accountAddress = location.state.accountAddress

  useEffect(() => {
    checkAdminRole();
  })

  const checkAdminRole = async () => {
    var web3 = window.web3;
    web3 = new Web3(web3.currentProvider);
    const instance = new web3.eth.Contract(ABI, contractAddress);
    const adminHash = web3.utils.soliditySha3('ADMIN');
    console.log(adminHash)
    const isAdmin = await instance.methods.hasRole(adminHash, accountAddress).call();
    setAdmin(isAdmin);
  }

  function showContractorField() {
    setShowContractorData(true);
    setShowClientData(false);
    setShowConsultantData(false);


  }
  function showClientField() {
    setShowClientData(true);
    setShowContractorData(false);
    setShowConsultantData(false);
  }

  function showConsultantField() {
    setShowConsultantData(true);
    setShowClientData(false);
    setShowContractorData(false);
  }

  return (
    <>
      <div className="App-header">
        {isAdmin && (
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
              <div className={['sideBarButtonWrap', showContractorData ? 'activeButton' : ''].join(' ')} tabIndex="1" onClick={showContractorField}>Add/Remove Contractor</div>
              <div className={['sideBarButtonWrap', showClientData ? 'activeButton' : ''].join(' ')} tabIndex="2" onClick={showClientField}>Add/Remove Client</div>
              <div className={['sideBarButtonWrap', showConsultantData ? 'activeButton' : ''].join(' ')} tabIndex="3" onClick={showConsultantField}>Add/Remove Consultant</div>
            </div>
          </>
        )}
        {isAdmin && showContractorData && (<ContractorField />)}
        {isAdmin && showClientData && (<ClientField />)}
        {isAdmin && showConsultantData && (<ConsultantField />)}
        {!isAdmin && (
          <div>You are not Admin</div>
        )}
      </div>
    </>
  )
}

export default Admin