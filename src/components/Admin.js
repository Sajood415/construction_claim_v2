import { useLocation } from "react-router-dom";
import AddProject from "./Admin/AddProject";

const Admin = () => {

  const location = useLocation();
  const accountAddress = location.state.accountAddress

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
              <div className={['sideBarButtonWrap', 'activeButton'].join(' ')} tabIndex="1">Add Project</div>
            </div>
          </>
          <AddProject />
      </div>
    </>
  )
}

export default Admin