import React, { useState, useEffect } from 'react'
import Web3 from 'web3';
import { contractAddress, ABI } from '../../config';

const AddProject = () => {
    const [claimNo, setClaimNo] = useState(0);
    const [projectName, setProjectName] = useState("");
    const [contractorAddress, setContractorAddress] = useState("");
    const [consultantAddress, setConsultantAddress] = useState("");
    const [clientAddress, setClientAddress] = useState("");

    useEffect(() => {
        getCurrentProjectData();
    }, [claimNo]);

    function handleProjectName(e) {
        setProjectName(e.target.value);
    }

    function handleContarctorAddress(e) {
        setContractorAddress(e.target.value);
    }

    function handleConsultantAddress(e) {
        setConsultantAddress(e.target.value);
    }

    function handleClientAddress(e) {
        setClientAddress(e.target.value);
    }

    const getCurrentProjectData = async () => {
        var web3 = window.web3;
        web3 = new Web3(web3.currentProvider);
        const instance = new web3.eth.Contract(ABI, contractAddress);
        console.log(instance)
        const userAccount = await web3.eth.getAccounts();
        const account = userAccount[0];
        const claimOnGoing = await instance.methods._projectNumber().call({ from: account })
        console.log(claimOnGoing)
        setClaimNo(claimOnGoing);
    }

    const addProject = async (e) => {
        e.preventDefault();
        var web3 = window.web3;
        web3 = new Web3(web3.currentProvider);
        const instance = new web3.eth.Contract(ABI, contractAddress);
        console.log(instance)
        const userAccount = await web3.eth.getAccounts();
        const account = userAccount[0];
        const addprojectRes = await instance.methods.addProject(claimNo, projectName, contractorAddress, consultantAddress, clientAddress).send({ from: account })
        if (addprojectRes.status === true) {
            alert("Project has been added");
        } else {
            alert("Error. Check console");
        }
    }

    return (
        <>
            <div className="formContainer">
                <div className="form">
                    <form className='addProject'>
                        <div className="input-container">
                            <label>Claim No </label>
                            <input type="number" name="claimNo" required value={claimNo} />
                        </div>
                        <div className="input-container">
                            <label>Project Name </label>
                            <input type="text" name="projectName" required value={projectName} onChange={handleProjectName} />
                        </div>
                        <div className="input-container">
                            <label>Contractor Address </label>
                            <input type="text" name="contractorAddress" required value={contractorAddress} onChange={handleContarctorAddress} />
                        </div>
                        <div className="input-container">
                            <label>Consultant Address </label>
                            <input type="text" name="consultantAddress" required value={consultantAddress} onChange={handleConsultantAddress} />
                        </div>
                        <div className="input-container">
                            <label>Client Address </label>
                            <input type="text" name="clientAddress" required value={clientAddress} onChange={handleClientAddress} />
                        </div>
                        <div className="button-container">
                            <input type="submit" value="Add" onClick={addProject} />
                        </div>
                    </form>
                </div>
            </div>
        </>)
}

export default AddProject