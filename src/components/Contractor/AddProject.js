import React, { useState, useEffect } from 'react'
import Web3 from 'web3';
import { contractAddress, ABI } from '../../config';

const AddProject = () => {
    const [showDelayRelatedClaim, setShowDelayRelatedClaim] = useState(true);
    const [showCostRelatedClaim, setShowCostRelatedClaim] = useState(false);

    useEffect(() => {
        getProjectNumber();
    }, [showDelayRelatedClaim, showCostRelatedClaim]);

    const getProjectNumber = async () => {
        var web3 = window.web3;
        web3 = new Web3(web3.currentProvider);
        const instance = new web3.eth.Contract(ABI, contractAddress);
        console.log(instance)
        const userAccount = await web3.eth.getAccounts();
        const account = userAccount[0];
        const claimNum = await instance.methods._projectNumber().call({ from: account })
        setClaimNo(claimNum)
    }

    const getInitialState = () => {
        const value = "Select";
        return value;
    };

    // Cost Related Claim
    const [projectName, setProjectName] = useState("");
    const [dateCost, setDateCost] = useState(null);
    const [causeOfClaimCost, setCauseOfClaimCost] = useState("");
    const [contractTypeCost, setContractTypeCost] = useState(getInitialState);
    const [clauseIdCost, setClauseIdCost] = useState(getInitialState);
    const [clauseTitleCost, setClauseTitleCost] = useState(getInitialState);
    const [claimDescCost, setClaimDescCost] = useState("");
    const [projectCost, setProjectCost] = useState("");
    const [claimAmount, setClaimAmount] = useState("");

    function handleProjectName(e) {
        setProjectName(e.target.value);
    }

    function handleDateCost(e) {
        const date = new Date(e.target.value).getTime() / 1000
        setDateCost(date);
    }

    function handleCauseOfClaimCost(e) {
        setCauseOfClaimCost(e.target.value);
    }

    function handleContractTypeCost(e) {
        setContractTypeCost(e.target.value);
    }

    function handleClauseIdCost(e) {
        setClauseIdCost(e.target.value);
    }

    function handleClauseTitleCost(e) {
        setClauseTitleCost(e.target.value);
    }

    function handleClaimDescCost(e) {
        setClaimDescCost(e.target.value);
    }

    function handleProjectCost(e) {
        setProjectCost(e.target.value);
    }

    function handleClaimAmount(e) {
        setClaimAmount(e.target.value);
    }


    // Delay Related Claim
    const [claimNo, setClaimNo] = useState("");
    const [date, setDate] = useState(null);
    const [causeOfClaim, setCauseOfClaim] = useState("");
    const [contracType, setContractType] = useState(getInitialState);
    const [clauseId, setClauseId] = useState(getInitialState);
    const [clauseTitle, setClauseTitle] = useState(getInitialState);
    const [claimDesc, setClaimDesc] = useState("");
    const [totalProjectDuration, setTotalProjectDuration] = useState("");
    const [projectStartingDate, setprojectStartingDate] = useState(null);
    const [projectCompletionDate, setProjectCompletionDate] = useState(null);
    const [delayInDays, setDelayInDays] = useState("");
    const [revisedProjectCompletionDate, setRevisedProjectCompletionDate] = useState(null);


    const handleDate = (e) => {
        const date = new Date(e.target.value).getTime() / 1000
        setDate(date);
    };

    const handleCauseOfClaim = (e) => {
        setCauseOfClaim(e.target.value);
    };

    const handleContractType = (e) => {
        setContractType(e.target.value);
    };

    const handleClauseId = (e) => {
        setClauseId(e.target.value);
    };

    const handleClauseTitle = (e) => {
        setClauseTitle(e.target.value);
    };

    const handleClaimDesc = (e) => {
        setClaimDesc(e.target.value);
    };

    const handleTotalProjectDuration = (e) => {
        setTotalProjectDuration(e.target.value);
    };

    const handleProjectStartingDate = (e) => {
        const date = new Date(e.target.value).getTime() / 1000
        setprojectStartingDate(date);
    };

    const handleProjectCompletionDate = (e) => {
        const date = new Date(e.target.value).getTime() / 1000
        setProjectCompletionDate(date);
    };

    const handleDelayInDays = (e) => {
        setDelayInDays(e.target.value);
    };

    const handleRevisedProjectCompletionDate = (e) => {
        const date = new Date(e.target.value).getTime() / 1000
        setRevisedProjectCompletionDate(date);
    };


    function selectDelayRelated() {
        setShowDelayRelatedClaim(true);
        setShowCostRelatedClaim(false);
    }

    function selectCostRelated() {
        setShowCostRelatedClaim(true);
        setShowDelayRelatedClaim(false);
    }

    const submitCostData = async (e) => {
        e.preventDefault();
        console.log(claimNo, projectName, dateCost, causeOfClaimCost, contractTypeCost, clauseIdCost, clauseTitleCost, claimDescCost, projectCost, claimAmount);
        var web3 = window.web3;
        web3 = new Web3(web3.currentProvider);
        const instance = new web3.eth.Contract(ABI, contractAddress);
        const userAccount = await web3.eth.getAccounts();
        const account = userAccount[0];
        const addCostClaim = await instance.methods.addCostRelatedClaim(claimNo, projectName, dateCost, causeOfClaimCost, contractTypeCost, clauseIdCost, clauseTitleCost, claimDescCost, projectCost, claimAmount).send({
            from: account
        });
        if (addCostClaim.status === true) {
            alert("Claim has been added");
        } else {
            alert("Error. Check console");
        }
        setProjectName("");
        setDateCost(null);
        setCauseOfClaimCost(getInitialState);
        setContractTypeCost(getInitialState);
        setClauseIdCost(getInitialState);
        setClauseTitleCost(getInitialState);
        setClaimDescCost("");
        setProjectCost("");
        setClaimAmount("");
    }

    const submitDelayData = async (e) => {
        e.preventDefault();
        console.log(claimNo, date, causeOfClaim, contracType, clauseId, clauseTitle, claimDesc, totalProjectDuration, projectStartingDate, projectCompletionDate, delayInDays, revisedProjectCompletionDate);
        var web3 = window.web3;
        web3 = new Web3(web3.currentProvider);
        const instance = new web3.eth.Contract(ABI, contractAddress);
        const userAccount = await web3.eth.getAccounts();
        const account = userAccount[0];
        const addDelayClaim = await instance.methods.addDelayRelatedClaim(claimNo, date, causeOfClaim, contracType, clauseId, clauseTitle, claimDesc, totalProjectDuration, projectStartingDate, projectCompletionDate, delayInDays, revisedProjectCompletionDate).send({
            from: account
        });
        if (addDelayClaim.status === true) {
            alert("Claim has been added");
        } else {
            alert("Error. Check console");
        }
        setClaimNo("");
        setCauseOfClaim("");
        setContractType(getInitialState);
        setClauseId(getInitialState);
        setClauseTitle(getInitialState);
        setClaimDesc("");
        setTotalProjectDuration("");
        setprojectStartingDate(null);
        setProjectCompletionDate(null);
        setDelayInDays("");
        setRevisedProjectCompletionDate(null);
    }

    return (
        <>
            <div className='buttonWrapper'>
                <div className={['sideBarButtonWrap', showDelayRelatedClaim ? 'activeButton' : ''].join(' ')} onClick={selectDelayRelated}>Delay Related Claim</div>
                <div className={['sideBarButtonWrap', showCostRelatedClaim ? 'activeButton' : ''].join(' ')} onClick={selectCostRelated}>Cost Related Claim</div>
            </div>
            {showDelayRelatedClaim && (<div className="formContainer">
                <div className="form">
                    <form className='addProject'>
                        <div className="input-container">
                            <label>Claim no </label>
                            <input type="number" name="claimNo" required value={claimNo} />
                        </div>
                        {/* <div className="input-container">
                            <label>Project Name </label>
                            <input type="text" name="address" required />
                        </div> */}
                        <div className="input-container">
                            <label>Date </label>
                            <input type="date" name="date" required value={date} format="DD/MM/YYYY"
                                onChange={handleDate} />
                        </div>
                        <div className="input-container">
                            <label>Cause of Claim </label>
                            <input type="text" name="causeOfClaim" required value={causeOfClaim} onChange={handleCauseOfClaim} />
                        </div>
                        <div className="input-container">
                            <label>Contract Type </label>
                            <select onChange={handleContractType} value={contracType}>
                                <option>Select</option>
                                <option>Option 2</option>
                                <option>Option 3</option>
                            </select>
                        </div>
                        <div className="input-container">
                            <label>Clause Id </label>
                            <select onChange={handleClauseId} value={clauseId}>
                                <option>Select</option>
                                <option>Option 2</option>
                                <option>Option 3</option>
                            </select>
                        </div>
                        <div className="input-container">
                            <label>Clause Title </label>
                            <select onChange={handleClauseTitle} value={clauseTitle}>
                                <option>Select</option>
                                <option>Option 2</option>
                                <option>Option 3</option>
                            </select>
                        </div>
                        <div className="input-container">
                            <label>Claim Description </label>
                            <textarea onChange={handleClaimDesc} value={claimDesc}></textarea>
                        </div>
                        <div className="input-container">
                            <label>Total Project Duration </label>
                            <input type="text" name="projectDuration" required value={totalProjectDuration} onChange={handleTotalProjectDuration} />
                        </div>
                        <div className="input-container">
                            <label>Project Starting Date </label>
                            <input type="date" name="projectStaringDate" required onChange={handleProjectStartingDate} value={projectStartingDate} />
                        </div>
                        <div className="input-container">
                            <label>Project Completion Date </label>
                            <input type="date" name="projectCompetionDate" required onChange={handleProjectCompletionDate} value={projectCompletionDate} />
                        </div>
                        <div className="input-container">
                            <label>Delay in Days </label>
                            <input type="text" name="delayInDays" required onChange={handleDelayInDays} value={delayInDays} />
                        </div>
                        <div className="input-container">
                            <label>Revised Project Completion Date </label>
                            <input type="date" name="address" required onChange={handleRevisedProjectCompletionDate} value={revisedProjectCompletionDate} />
                        </div>
                        <div className="button-container">
                            <input type="submit" value="Add" onClick={submitDelayData} />
                        </div>
                    </form>
                </div>
            </div>)}
            {showCostRelatedClaim && (<div className="formContainer">
                <div className="form">
                    <form className='addProject'>
                        <div className="input-container">
                            <label>Claim no </label>
                            <input type="number" name="claim" required value={claimNo} />
                        </div>
                        <div className="input-container">
                            <label>Project Name </label>
                            <input type="text" name="projectName" required value={projectName} onChange={handleProjectName} />
                        </div>
                        <div className="input-container">
                            <label>Date </label>
                            <input type="date" name="date" value={dateCost} onChange={handleDateCost} />
                        </div>
                        <div className="input-container">
                            <label>Cause of Claim </label>
                            <input type="text" name="cause" required value={causeOfClaimCost} onChange={handleCauseOfClaimCost} />
                        </div>
                        <div className="input-container">
                            <label>Contract Type </label>
                            <select value={contractTypeCost} onChange={handleContractTypeCost}>
                                <option>Select</option>
                                <option>Option 2</option>
                                <option>Option 3</option>
                            </select>
                        </div>
                        <div className="input-container">
                            <label>Clause Id </label>
                            <select value={clauseIdCost} onChange={handleClauseIdCost}>
                                <option>Select</option>
                                <option>Option 2</option>
                                <option>Option 3</option>
                            </select>
                        </div>
                        <div className="input-container">
                            <label>Clause Title </label>
                            <select value={clauseTitleCost} onChange={handleClauseTitleCost}>
                                <option>Select</option>
                                <option>Option 2</option>
                                <option>Option 3</option>
                            </select>
                        </div>
                        <div className="input-container">
                            <label>Claim Description </label>
                            <textarea value={claimDescCost} onChange={handleClaimDescCost}></textarea>
                        </div>
                        <div className="input-container">
                            <label>Total Project Cost </label>
                            <input type="text" name="totalCost" value={projectCost} onChange={handleProjectCost} required />
                        </div>
                        <div className="input-container">
                            <label>Claim Amount </label>
                            <input type="text" name="claimAmount" value={claimAmount} onChange={handleClaimAmount} required />
                        </div>
                        <div className="button-container">
                            <input type="submit" value="Add" onClick={submitCostData} />
                        </div>
                    </form>
                </div>
            </div>)}
        </>)
}

export default AddProject