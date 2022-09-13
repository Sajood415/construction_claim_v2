import React from 'react'
import Web3 from 'web3';
import { contractAddress, ABI } from '../../config';

const ClientField = () => {
  let addAddressInput = React.createRef();
  let removeAddressInput = React.createRef();

  function handleAddClick(e) {
    e.preventDefault();
    addClient(addAddressInput.current.value)
  }

  function handleRemoveClick(e) {
    e.preventDefault();
    removeClient(removeAddressInput.current.value)
  }

  const addClient = async () => {
    var web3 = window.web3;
    web3 = new Web3(web3.currentProvider);
    const instance = new web3.eth.Contract(ABI, contractAddress);
    const userAccount = await web3.eth.getAccounts();
    const account = userAccount[0];
    const addClientData = await instance.methods.addClient(addAddressInput.current.value).send({from: account});
    if(addClientData.status ===  true) {
      alert("Client has been added");
    } else {
      alert("Error. Check console");
    }
}

  const removeClient = async () => {
    var web3 = window.web3;
    web3 = new Web3(web3.currentProvider);
    const instance = new web3.eth.Contract(ABI, contractAddress);
    const userAccount = await web3.eth.getAccounts();
    const account = userAccount[0];
    const removeClientData = await instance.methods.removeClient(removeAddressInput.current.value).send({from: account});
    if(removeClientData.status ===  true) {
      alert("Client has been removed");
    } else {
      alert("Error. Check console");
    }
}

return (
  <div className="formContainer">
    <div className="form">
      <form>
        <div className="input-container">
          <label>Add Client Wallet Address </label>
          <input type="text" name="address" ref={addAddressInput} required />
        </div>
        <div className="button-container" onClick={handleAddClick}>
          <input type="submit" value="Add" />
        </div>
      </form>
    </div>
    <div className="formRemove">
      <form>
        <div className="input-container">
          <label>Remove Client Wallet Address </label>
          <input type="text" name="address" ref={removeAddressInput} required />
        </div>
        <div className="button-container" onClick={handleRemoveClick}>
          <input type="submit" value="Remove" />
        </div>
      </form>
    </div>
  </div>
)
}

export default ClientField;