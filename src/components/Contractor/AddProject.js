import React, { useState, useEffect } from 'react'
import Web3 from 'web3';
import { contractAddress, ABI } from '../../config';
import DatePicker from "react-datepicker";
import axios from 'axios'

import { Loader } from '../../Loader';

import "react-datepicker/dist/react-datepicker.css";


const AddProject = () => {
    const [loading, setLoading] = useState(true);
    const [showData, setShowData] = useState(false);
    const [showDelayRelatedClaim, setShowDelayRelatedClaim] = useState(false);
    const [showCostRelatedClaim, setShowCostRelatedClaim] = useState(false);

    const [projectData, setProjectData] = useState({});
    const [claimNo, setClaimNo] = useState(0); // same for both

    useEffect(() => {
        getClaimNumber();
    }, [showDelayRelatedClaim, showCostRelatedClaim]);

    const getClaimNumber = async () => {
        var web3 = window.web3;
        setLoading(true)
        web3 = new Web3(web3.currentProvider);
        const instance = new web3.eth.Contract(ABI, contractAddress);
        console.log(instance)
        const userAccount = await web3.eth.getAccounts();
        const account = userAccount[0];

        const claimNumberGoing = await instance.methods._claimNumberGoing().call({ from: account }) // orignal claim going

        const projectNumberGoing = await instance.methods._projectNumberTrack().call({ from: account })// to get project data duplicate value

        const adminDatabool = await instance.methods.checkProjectData(projectNumberGoing).call({ from: account })
        const adminData = await instance.methods._projects(projectNumberGoing).call({ from: account })
        if (adminDatabool) {
            setClaimNo(claimNumberGoing)
            setProjectData(adminData)
            setShowData(true);
        } else {
            setShowData(false)
        }
        setLoading(false)
    }

    const getInitialState = () => {
        const value = "Select";
        return value;
    };

    // Cost Related Claim
    const [dateCost, setDateCost] = useState(null);
    const [causeOfClaimCost, setCauseOfClaimCost] = useState("");
    const [contractTypeCost, setContractTypeCost] = useState(getInitialState);
    const [clauseIdAndTitleCost, setClauseIdAndTitleCost] = useState(getInitialState);
    const [claimDescCost, setClaimDescCost] = useState("");
    const [projectCost, setProjectCost] = useState("");
    const [claimAmount, setClaimAmount] = useState("");
    const [imageCost, setImageCost] = useState("");
    const [imageSelectedCost, setImageSelectedCost] = useState({});

    function handleCauseOfClaimCost(e) {
        setCauseOfClaimCost(e.target.value);
    }

    function handleClauseIdAndTitleCost(e) {
        setClauseIdAndTitleCost(e.target.value);
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
    const [date, setDate] = useState(null);
    const [causeOfClaim, setCauseOfClaim] = useState("");
    const [contracType, setContractType] = useState(getInitialState);
    const [clauseIdAndTitle, setClauseIdAndTitle] = useState(getInitialState);
    const [claimDesc, setClaimDesc] = useState("");
    const [totalProjectDuration, setTotalProjectDuration] = useState("");
    const [projectStartingDate, setprojectStartingDate] = useState(null);
    const [projectCompletionDate, setProjectCompletionDate] = useState(null);
    const [delayInDays, setDelayInDays] = useState("");
    const [revisedProjectCompletionDate, setRevisedProjectCompletionDate] = useState(null);
    const [imageDelay, setImageDelay] = useState("");
    const [imageSelectedDelay, setImageSelectedDelay] = useState({});



    const handleCauseOfClaim = (e) => {
        setCauseOfClaim(e.target.value);
    };

    const handleClauseIdAndTitle = (e) => {
        setClauseIdAndTitle(e.target.value);
    };

    const handleClaimDesc = (e) => {
        setClaimDesc(e.target.value);
    };

    const handleTotalProjectDuration = (e) => {
        setTotalProjectDuration(e.target.value);
    };

    const handleDelayInDays = (e) => {
        setDelayInDays(e.target.value);
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
        setLoading(true)
        console.log(claimNo, dateCost, causeOfClaimCost, selectedOptionCost, clauseIdAndTitleCost, claimDescCost, projectCost, claimAmount, imageCost);
        var web3 = window.web3;
        web3 = new Web3(web3.currentProvider);
        const instance = new web3.eth.Contract(ABI, contractAddress);
        const userAccount = await web3.eth.getAccounts();
        const account = userAccount[0];
        const addCostClaim = await instance.methods.addCostRelatedClaim(claimNo, dateCost, causeOfClaimCost, selectedOptionCost, clauseIdAndTitleCost, claimDescCost, projectCost, claimAmount, imageCost).send({
            from: account
        });
        if (addCostClaim.status === true) {
            alert("Claim has been added");
        } else {
            alert("Error. Check console");
        }
        setLoading(false)
        setDateCost(null);
        setCauseOfClaimCost(getInitialState);
        setContractTypeCost(getInitialState);
        setClauseIdAndTitleCost(getInitialState);
        setClaimDescCost("");
        setProjectCost("");
        setClaimAmount("");

    }

    const submitDelayData = async (e) => {
        e.preventDefault();
        setLoading(true)
        console.log(date, causeOfClaim, selectedOption, clauseIdAndTitle, claimDesc, totalProjectDuration, projectStartingDate, projectCompletionDate, delayInDays, revisedProjectCompletionDate, imageDelay);
        var web3 = window.web3;
        web3 = new Web3(web3.currentProvider);
        const instance = new web3.eth.Contract(ABI, contractAddress);
        const userAccount = await web3.eth.getAccounts();
        const account = userAccount[0];
        const addDelayClaim = await instance.methods.addDelayRelatedClaim(claimNo, date, causeOfClaim, selectedOption, clauseIdAndTitle, claimDesc, totalProjectDuration, projectStartingDate, projectCompletionDate, delayInDays, revisedProjectCompletionDate, imageDelay).send({
            from: account
        }).catch(console.log);
        if (addDelayClaim.status === true) {
            alert("Claim has been added");
        } else {
            alert("Error. Check console");
        }
        setLoading(false)
        setDate(null)
        setCauseOfClaim("");
        setContractType(getInitialState);
        setClauseIdAndTitle(getInitialState);
        setClaimDesc("");
        setTotalProjectDuration("");
        setprojectStartingDate(null);
        setProjectCompletionDate(null);
        setDelayInDays("");
        setRevisedProjectCompletionDate(null);
    }

    const uploadImageDelay = (e) => {
        e.preventDefault()
        setLoading(true)
        const formData = new FormData()
        formData.append("file", imageSelectedDelay)
        formData.append("upload_preset", "construction_claim")
        axios.post("https://api.cloudinary.com/v1_1/drsqh0aog/image/upload", formData).then(res => {
            setImageDelay(res.data.secure_url)
            setLoading(false)
            alert("Image Uploaded")
        });
    }

    const uploadImageCost = (e) => {
        e.preventDefault()
        setLoading(true)
        const formData = new FormData()
        formData.append("file", imageSelectedCost)
        formData.append("upload_preset", "construction_claim")
        console.log(formData)
        axios.post("https://api.cloudinary.com/v1_1/drsqh0aog/image/upload", formData).then(res => {
            setImageCost(res.data.secure_url)
            setLoading(false)
            alert("Image Uploaded")
        });
    }



    const [selectedOption, setSelectedOption] = React.useState("");
    const [selectedOptionCost, setSelectedOptionCost] = React.useState("");

    const changeSelectOptionHandler = (event) => {
        setSelectedOption(event.target.value);
    };

    const changeSelectOptionCostHandler = (event) => {
        setSelectedOptionCost(event.target.value);
    };

    const firstArr = [
        "6.4 Delay and cost of delay in issue of drawing or instruction",
        "12.2 Delay and cost of adverse physical obstruction or condition",
        "17.1 Expense of errors in the position, levels. Dimensions or alignment of work",
        "18.1 Values of boreholes or exploratory excavation instructed ",
        "20.3 Value of work to rectify loss or damage resulting from employer's risks' ",
        "22.3 General indemnity by the employer for matters referred to in sub-clause 22.2",
        "25.4 Indemnity for failure by the employer to comply with insurance policy conditions",
        "27.1 Delay and cost of carrying out the engineer's instructions for dealing with fossils, coins, articles of value or antiquity and structures and other remains or things of geological or archaeological interest discovered on the site",
        "30.3 Indemnity for third-party claims for damage to bridges or roads communicating with or on the routes to the site",
        "31.2 Cost of providing facilities to other contractors employed by the employer or duly constituted authorities, in accordance with the written request of the engineer",
        "36.5 Delay and cost of certain tests required by the engineer",
        "38.2 Cost, in certain cases, of uncovering any part of the works or making openings in or through the same",
        "40.2 Delay and cost of certain suspensions in the progress of the works ordered by the engineer",
        "42.2 Delay and cost of failure of the employer to give possession of the site",
        "44.1 Extensions of time for completion of the works, or any section or part thereof ",
        "49.3 Cost of executing work of amendment, reconstruction, remedying of defects, shrinkages or other faults, not due to the contractor, during the defect’s liability period ",
        "50.1 Cost of searching for any defect, shrinkage or other fault in the works prior to the end of the defect’s liability period, for which the contractor is not liable ",
        "51 Variations",
        "52.1 Description of claim Valuation of variations",
        "52.2 Power of engineer to fix rates",
        "52.3 Variations and adjustments upon measurement of the estimated quantities which result in additions to or deductions from the contract price exceeding 15 per cent",
        "52.4 Instruction of the engineer that any varied work be executed on a daywork basis and, this, be paid at daywork rates",
        "58.1 Provisional sums",
        "59.4 Payments to nominated sub-contractors",
        "60.1 Interest at stipulated mate on delayed payments",
        "63.3 Payment after termination by the employer under clause 63",
        "65.3 Payment if the works or any materials or plant or any of the contractor's equipment is destroyed or damaged by 'special risks' ",
        "65.5 Increased costs of the execution of the works arising from 'special risks'",
        "65.8 Payment if the contract is terminated due to outbreak of war which materially affects the execution of the works",
        "66.1 Payment if any circumstances outside parties' control renders it impossible or unlawful for either party to fulfil his contractual obligations or under the law governing the contract the parties are released from further performance",
        "69.3 Payment in the event the contractor terminates his employment under the contract for default by the employer under sub-clause 69.1 ",
        "69.4 Delay and cost if the contractor suspend work or reduces the rate of work pursuant to sub-clause 69.4. ",
        "70.1 Changes in cost of labour and/or materials or any other matters affecting the cost of the execution of the works as determined in Part Il of the Condition",
        "70.2 Changes in cost due to subsequent legislation",
        "71.1 Loss or damages due to currency restrictions and/or transfer of currency restrictions in relation to the currency or currencies in which the contract price is to be paid.",
    ]

    const secondArr = [
        "1.9 CONS Delayed Drawings or Instructions",
        "1.9 P&DB Errors in the Employer's Requirements",
        "2.1 Right of Access to the Site*",
        "2.5 Employer's Claims*",
        "4.7 Setting Out",
        "4.12 Unforeseeable Physical Conditions",
        "4.19 Electricity, Water and Gas",
        "4.20 Employer's Equipment and Free Issue Material*",
        "4.24 Fossils",
        "7.4 Testing",
        "7.5 Rejection",
        "7.6 Remedial Work",
        "8.4 Extension of Time for Completion",
        "8.5 Delays Caused by Authorities",
        "8.6 Rate of Progress",
        "8.7 Delay Damages",
        "8.9 Consequences of Suspension",
        "9.4 Failure to Pass Tests on Completion",
        "10.2 Taking Over of Parts of the Works",
        "10.3 Interference with tests of Completion",
        "11.3 Extension of Defects Notification Period",
        "11.4 Failure to Remedy Defects",
        "11.8 Contractor to Search",
        "12.2 P&DB Delayed Tests*",
        "12.3 CONS Evaluation",
        "12.3 P&DB Retesting*",
        "12.4 CONS Omissions",
        "12.4 P&DB Failure to Pass Tests after Completion",
        "13.2 CONS Value Engineering",
        "13.3 Variation Procedure",
        "13.7 Adjustments for changes in Legislation",
        "14.4 Schedule of Payments",
        "14.8 Delayed Payment",
        "15.3 Valuation at Date of Termination",
        "15.4 Payment after Termination",
        "16.1 Contractor's Entitlement to Suspend Work",
        "16.4 Payment on Termination",
        "17.1 Indemnities*",
        "17.4 Consequences of Employer's Risks*",
        "18.1 General Requirements for Insurances",
        "18.2 Insurance for Works and Contractor's Equipment",
        "19.4 Consequences of Force Majeure",
        "19.6 Optional Payment, Termination and Release",
        "20.1 Contractor's Claim "
    ]

    const thirdArr = ["1.9 Delayed Drawings or Instructions",
        "1.9 Delayed Drawings or Instructions",
        "1.9 Delayed Drawings or Instructions",
        "2.1 Right of Access to the Site*",
        "2.5 Site Data and Items of Reference",
        "4.7 Setting Out",
        "4.12 Unforeseeable Physical Conditions",
        "4.19 Temporary Utilities",
        "4.23 Archaeological and Geological Findings",
        "7.4 Testing by the Contractor",
        "7.5 Defects and Rejection",
        "7.6 Remedial Work",
        "8.5 Extension of Time for Completion",
        "8.6 Delays Caused by Authorities",
        "8.7 Rate of Progress",
        "8.8 Delay Damages",
        "8.10 Consequences of Employer’s Suspension",
        "9.4 Failure to Pass Tests on Completion",
        "10.2 Taking Over Parts ",
        "10.3 Interference with tests on Completion",
        "11.3 Extension of Defects Notification Period",
        "11.4 Failure to Remedy Defects",
        "11.8 Contractor to Search",
        "12.2 P&DB Delayed Tests (Method of Measurement)",
        "12.3 CONS Evaluation (Valuation of the Works)",
        "12.3 P&DB Retesting (Valuation of the Works)",
        "12.4 CONS Omissions (Omissions)",
        "12.4 P&DB Failure to Pass Tests after Completion (Omissions)",
        "13.2 CONS Value Engineering",
        "13.3 Variation Procedure",
        "13.6 Adjustments for changes in Legislation",
        "14.4 Schedule of Payments",
        "14.8 Delayed Payment",
        "15.3 Valuation after Termination for Contractor’s Default ",
        "15.4 Payment after Termination for Contractor’s Default",
        "15.6 Valuation after Termination for Employer’s Convenience ",
        "15.7 Payment after Termination for Employer’s Convenience",
        "16.1 Suspension by Contractor",
        "16.4 Payment after Termination",
        "17.4 Indemnities by Contractor ",
        "17.5 Indemnities by Employer ",
        "17.6 Shared Indemnities",
        "18.4 Consequences of an Exceptional Event ",
        "18.5 Optional Termination ",
        "18.6 Release from Performance under the Law",
        "19.1 General Requirement",
        "20.2 Claims for Payment and/or EOT"
    ]

    let type = null;

    let options = null;

    if (selectedOption === "FIDIC Red Book 1987") {
        type = firstArr;
    } else if (selectedOption === "FIDIC Red Book 1999") {
        type = secondArr;
    } else if (selectedOption === "FIDIC Red Book 2017") {
        type = thirdArr;
    }

    if (selectedOptionCost === "FIDIC Red Book 1987") {
        type = firstArr;
    } else if (selectedOptionCost === "FIDIC Red Book 1999") {
        type = secondArr;
    } else if (selectedOptionCost === "FIDIC Red Book 2017") {
        type = thirdArr;
    }

    if (type) {
        options = type.map((el) => <option key={el}>{el}</option>);
    }


    return (
        <>
            {loading && <Loader />}
            {showData && (<div className='buttonWrapper'>
                <div className={['sideBarButtonWrap', showDelayRelatedClaim ? 'activeButton' : ''].join(' ')} onClick={selectDelayRelated}>Delay Related Claim</div>
                <div className={['sideBarButtonWrap', showCostRelatedClaim ? 'activeButton' : ''].join(' ')} onClick={selectCostRelated}>Cost Related Claim</div>
            </div>)}
            {showDelayRelatedClaim && (<div className="formContainer">
                <div className="form" style={{ top: '95px' }}>
                    <form className='addProject'>
                        <div className="input-container">
                            <label>Claim no </label>
                            <input type="number" name="claimNo" required value={claimNo} />
                        </div>
                        <div className="input-container">
                            <label>Project Name </label>
                            <input type="text" name="address" required value={projectData._projectName} />
                        </div>
                        <div className="input-container">
                            <label>Date </label>
                            <DatePicker selected={date} onChange={date => {
                                var full_date = date.getTime()
                                setDate(full_date)
                            }} showYearDropdown />
                        </div>
                        <div className="input-container">
                            <label>Cause of Claim </label>
                            <input type="text" name="causeOfClaim" required value={causeOfClaim} onChange={handleCauseOfClaim} />
                        </div>
                        <div className="input-container">
                            <label>Contract Type </label>
                            <select onChange={changeSelectOptionHandler} value={selectedOption}>
                                <option>FIDIC Red Book 1987</option>
                                <option>FIDIC Red Book 1999</option>
                                <option>FIDIC Red Book 2017</option>
                            </select>
                        </div>
                        <div className="input-container">
                            <label>Clause Id & Title </label>
                            <select onChange={handleClauseIdAndTitle} value={clauseIdAndTitle}>
                                {
                                    options
                                }
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
                            <DatePicker selected={projectStartingDate} onChange={date => {
                                var full_date = date.getTime()
                                setprojectStartingDate(full_date)
                            }} showYearDropdown />
                        </div>
                        <div className="input-container">
                            <label>Project Completion Date </label>
                            <DatePicker selected={projectCompletionDate} onChange={date => {
                                var full_date = date.getTime()
                                setProjectCompletionDate(full_date)
                            }} showYearDropdown />
                        </div>
                        <div className="input-container">
                            <label>Delay in Days </label>
                            <input type="text" name="delayInDays" required onChange={handleDelayInDays} value={delayInDays} />
                        </div>
                        <div className="input-container">
                            <label>Revised Project Completion Date </label>
                            <DatePicker selected={revisedProjectCompletionDate} onChange={date => {
                                var full_date = date.getTime()
                                setRevisedProjectCompletionDate(full_date)
                            }} showYearDropdown />
                        </div>
                        <div className="input-container">
                            <label>Upload Image </label>
                            <input type='file' onChange={e => setImageSelectedDelay(e.target.files[0])} />
                            <input type="submit" value="Upload Image" onClick={uploadImageDelay} />
                        </div>
                    </form>
                    <input type="submit" value="Add" onClick={submitDelayData} />
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
                            <input type="text" name="projectName" required value={projectData._projectName} />
                        </div>
                        <div className="input-container">
                            <label>Date </label>
                            <DatePicker selected={dateCost} onChange={date => {
                                var full_date = date.getTime()
                                setDateCost(full_date)
                            }} showYearDropdown />
                        </div>
                        <div className="input-container">
                            <label>Cause of Claim </label>
                            <input type="text" name="cause" required value={causeOfClaimCost} onChange={handleCauseOfClaimCost} />
                        </div>
                        <div className="input-container">
                            <label>Contract Type </label>
                            <select onChange={changeSelectOptionCostHandler} value={selectedOptionCost}>
                                <option>FIDIC Red Book 1987</option>
                                <option>FIDIC Red Book 1999</option>
                                <option>FIDIC Red Book 2017</option>
                            </select>
                        </div>
                        <div className="input-container">
                            <label>Clause Id & Title </label>
                            <select onChange={handleClauseIdAndTitleCost} value={clauseIdAndTitleCost}>
                                {
                                    options
                                }
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
                        <div className="input-container">
                            <label>Upload Image </label>
                            <input type='file' onChange={e => setImageSelectedCost(e.target.files[0])} />
                            <input type="submit" value="Upload Image" onClick={uploadImageCost} />
                        </div>
                        <div className="input-container">
                            <input type="submit" value="Add" onClick={submitCostData} />
                        </div>
                    </form>
                </div>
            </div>)}
        </>
    )
}

export default AddProject