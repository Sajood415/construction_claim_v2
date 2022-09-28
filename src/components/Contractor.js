import { useState } from "react";
import { useLocation } from "react-router-dom";


import AddProject from "./Contractor/AddProject";
import FindDelayRelatedClaim from "./Contractor/FindDelayRelatedClaim";
import FindCostRelatedClaim from "./Contractor/FindCostRelatedClaim";


const Contractor = () => {
  const [showAddForm, setShowAddForm] = useState(true);
  const [showDelayRelatedClaim, setshowDelayRelatedClaim] = useState(false);
  const [showCostRelatedClaim, setshowCostRelatedClaim] = useState(false);

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

  return (
    <>
      <div className="App-header">
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
        {showAddForm && (<AddProject DelayRelatedClaim={showDelayRelatedClaim} CostRelatedClaim={showCostRelatedClaim} />)}
        {showDelayRelatedClaim && (<FindDelayRelatedClaim />)}
        {showCostRelatedClaim && (<FindCostRelatedClaim />)}
      </div>
    </>
  )
}

export default Contractor