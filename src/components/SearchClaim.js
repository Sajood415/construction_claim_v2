import React, { useState } from 'react'
import { useLocation } from "react-router-dom";

import FindDelayRelatedClaim from "./Contractor/FindDelayRelatedClaim";
import FindCostRelatedClaim from "./Contractor/FindCostRelatedClaim";


const SearchClaim = () => {
    const [showDelayRelatedClaim, setshowDelayRelatedClaim] = useState(false);
    const [showCostRelatedClaim, setshowCostRelatedClaim] = useState(false);

    const location = useLocation();
    const accountAddress = location.state.accountAddress

    function showDelayRelatedClaimField() {
        setshowDelayRelatedClaim(true);
        setshowCostRelatedClaim(false);
      }
    
      function showCostRelatedClaimField() {
        setshowCostRelatedClaim(true);
        setshowDelayRelatedClaim(false);
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
                        <div className={['sideBarButtonWrap', showDelayRelatedClaim ? 'activeButton' : ''].join(' ')} tabIndex="2" onClick={showDelayRelatedClaimField}>Find Delay Related Claim</div>
                        <div className={['sideBarButtonWrap', showCostRelatedClaim ? 'activeButton' : ''].join(' ')} tabIndex="3" onClick={showCostRelatedClaimField}>Find Cost Related Claim</div>
                    </div>
                </>
                {showDelayRelatedClaim && (<FindDelayRelatedClaim />)}
                {showCostRelatedClaim && (<FindCostRelatedClaim />)}
            </div>
        </>)
}

export default SearchClaim