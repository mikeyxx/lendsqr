// Icons
import portfolioIcon from "../assets/briefcase.svg";
import dropdown from "../assets/dropdown-icon.svg";
import home from "../assets/home.svg";
import users from "../assets/user-friends.svg";
import guarantor from "../assets/guarantor-icon.svg";
import moneybag from "../assets/loan-bag.svg";
import handshake from "../assets/handshake-regular.svg";
import saving from "../assets/piggy-bank.svg";
import handbag from "../assets/hand-hold-cashbag.svg";
import userCheck from "../assets/user-check.svg";
import karma from "../assets/user-times.svg";
import bank from "../assets/bank.svg";
import coins from "../assets/coins.svg";
import transaction from "../assets/transaction.svg";
import service from "../assets/services.svg";
import serviceAcct from "../assets/service-acct.svg";
import scroll from "../assets/scroll.svg";
import report from "../assets/chart-bar.svg";
import slider from "../assets/sliders.svg";
import percent from "../assets/badge-percent.svg";
import clipboard from "../assets/clipboard-list.svg";
import tire from "../assets/tire.svg";
import logout from "../assets/sign-out.svg";
//Side bar styles
import "../styles/sidebar.scss";
import { useContext } from "react";
import { DataContext } from "../App";
import { NavLink } from "react-router-dom";

// interface Props {
//   menu: boolean;
// }

const Sidebar = () => {
  const { menu } = useContext(DataContext);
  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    location.reload();
  };

  return (
    <div className="sidebarContainer">
      <div className={`sidebar-wrapper ${menu ? "toggle" : ""}`}>
        <div className="switch-Organization">
          <img src={portfolioIcon} alt="" />
          <h3 className="switchOrg">Switch Organization</h3>
          <img src={dropdown} alt="" />
        </div>
        <div className="dash">
          <img src={home} alt="" />
          <h4>Dashboard</h4>
        </div>
        <nav className="customerCategory cat">
          <h4>Customer</h4>
          <ul className="menu">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "activeLink" : "normalLink"
              }
            >
              <li className="list-menu">
                <img src={users} alt="" />
                <span>Users</span>
              </li>
            </NavLink>
            <NavLink
              to="/nodata"
              className={({ isActive }) =>
                isActive ? "activeLink" : "normalLink"
              }
            >
              <li className="list-menu">
                <img src={guarantor} alt="" />
                <span>Guarantors</span>
              </li>
            </NavLink>
            <NavLink
              to="/nodata"
              className={({ isActive }) =>
                isActive ? "activeLink" : "normalLink"
              }
            >
              <li className="list-menu">
                <img src={moneybag} alt="" />
                <span>Loans</span>
              </li>
            </NavLink>

            <NavLink
              to="/nodata"
              className={({ isActive }) =>
                isActive ? "activeLink" : "normalLink"
              }
            >
              <li className="list-menu">
                <img src={handshake} alt="" />
                <span>Decision Models</span>
              </li>
            </NavLink>

            <NavLink
              to="/nodata"
              className={({ isActive }) =>
                isActive ? "activeLink" : "normalLink"
              }
            >
              <li className="list-menu">
                <img src={saving} alt="" />
                <span>Savings</span>
              </li>
            </NavLink>
            <NavLink
              to="/nodata"
              className={({ isActive }) =>
                isActive ? "activeLink" : "normalLink"
              }
            >
              <li className="list-menu">
                <img src={handbag} alt="" />
                <span>Loan Requests</span>
              </li>
            </NavLink>
            <NavLink
              to="/nodata"
              className={({ isActive }) =>
                isActive ? "activeLink" : "normalLink"
              }
            >
              <li className="list-menu">
                <img src={userCheck} alt="" />
                <span>Whitelist</span>
              </li>
            </NavLink>
            <NavLink
              to="/nodata"
              className={({ isActive }) =>
                isActive ? "activeLink" : "normalLink"
              }
            >
              <li className="list-menu">
                <img src={karma} alt="" />
                <span>Karma</span>
              </li>
            </NavLink>
          </ul>
        </nav>
        <nav className="businessContainer cat">
          <h4>Business</h4>
          <ul className="menu">
            <NavLink
              to="/nodata"
              className={({ isActive }) =>
                isActive ? "activeLink" : "normalLink"
              }
            >
              <li className="list-menu active">
                <img src={portfolioIcon} alt="" />
                <span>Organization</span>
              </li>
            </NavLink>
            <NavLink
              to="/nodata"
              className={({ isActive }) =>
                isActive ? "activeLink" : "normalLink"
              }
            >
              <li className="list-menu">
                <img src={handbag} alt="" />
                <span>Loan Products</span>
              </li>
            </NavLink>
            <NavLink
              to="/nodata"
              className={({ isActive }) =>
                isActive ? "activeLink" : "normalLink"
              }
            >
              <li className="list-menu">
                <img src={bank} alt="" />
                <span>Savings Products</span>
              </li>
            </NavLink>
            <NavLink
              to="/nodata"
              className={({ isActive }) =>
                isActive ? "activeLink" : "normalLink"
              }
            >
              <li className="list-menu">
                <img src={coins} alt="" />
                <span>Fees and Charges</span>
              </li>
            </NavLink>
            <NavLink
              to="/nodata"
              className={({ isActive }) =>
                isActive ? "activeLink" : "normalLink"
              }
            >
              <li className="list-menu">
                <img src={transaction} alt="" />
                <span>Transactions</span>
              </li>
            </NavLink>
            <NavLink
              to="/nodata"
              className={({ isActive }) =>
                isActive ? "activeLink" : "normalLink"
              }
            >
              <li className="list-menu">
                <img src={service} alt="" />
                <span>Services</span>
              </li>
            </NavLink>
            <NavLink
              to="/nodata"
              className={({ isActive }) =>
                isActive ? "activeLink" : "normalLink"
              }
            >
              <li className="list-menu">
                <img src={serviceAcct} alt="" />
                <span>Service Account</span>
              </li>
            </NavLink>
            <NavLink
              to="/nodata"
              className={({ isActive }) =>
                isActive ? "activeLink" : "normalLink"
              }
            >
              <li className="list-menu">
                <img src={scroll} alt="" />
                <span>Settlements</span>
              </li>
            </NavLink>
            <NavLink
              to="/nodata"
              className={({ isActive }) =>
                isActive ? "activeLink" : "normalLink"
              }
            >
              <li className="list-menu">
                <img src={report} alt="" />
                <span>Reports</span>
              </li>
            </NavLink>
          </ul>
        </nav>
        <nav className="settings cat">
          <h4>Settings</h4>
          <ul className="menu">
            <NavLink
              to="/nodata"
              className={({ isActive }) =>
                isActive ? "activeLink" : "normalLink"
              }
            >
              <li className="list-menu">
                <img src={slider} alt="" />
                <span>Preferences</span>
              </li>
            </NavLink>
            <NavLink
              to="/nodata"
              className={({ isActive }) =>
                isActive ? "activeLink" : "normalLink"
              }
            >
              <li className="list-menu">
                <img src={percent} alt="" />
                <span>Fees and Pricing</span>
              </li>
            </NavLink>
            <NavLink
              to="/nodata"
              className={({ isActive }) =>
                isActive ? "activeLink" : "normalLink"
              }
            >
              <li className="list-menu">
                <img src={clipboard} alt="" />
                <span>Audit Logs</span>
              </li>
            </NavLink>
            <NavLink
              to="/nodata"
              className={({ isActive }) =>
                isActive ? "activeLink" : "normalLink"
              }
            >
              <li className="hide list-menu">
                <img src={tire} alt="" />
                <span>Systems Messages</span>
              </li>
            </NavLink>
          </ul>
        </nav>
        <hr />
        <div className="logout-wrapper hide list-menu">
          <div className="logout" onClick={handleLogout}>
            <img src={logout} alt="" />
            <span>Logout</span>
          </div>
          <span>v1.2.0</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
