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

const Sidebar = () => {
  return (
    <div className="DashboardContentContainer">
      {/* Sidebar menu */}
      <div className="switch-Organization">
        <img src={portfolioIcon} alt="" />
        <h3 className="switchOrg">Switch Organization</h3>
        <img src={dropdown} alt="" />
      </div>
      <div className="dash">
        <img src={home} alt="" />
        <h4>Dashboard</h4>
      </div>
      <div className="customerCategory">
        <h4>Customer</h4>
        <ul>
          <li>
            <img src={users} alt="" />
            <span>Users</span>
          </li>
          <li>
            <img src={guarantor} alt="" />
            <span>Guarantors</span>
          </li>
          <li>
            <img src={moneybag} alt="" />
            <span>Loans</span>
          </li>
          <li>
            <img src={handshake} alt="" />
            <span>Decision Models</span>
          </li>
          <li>
            <img src={saving} alt="" />
            <span>Savings</span>
          </li>
          <li>
            <img src={handbag} alt="" />
            <span>Loan Requests</span>
          </li>
          <li>
            <img src={userCheck} alt="" />
            <span>Whitelist</span>
          </li>
          <li>
            <img src={karma} alt="" />
            <span>Karma</span>
          </li>
        </ul>
      </div>
      <div className="businessContainer">
        <h4>Business</h4>
        <ul>
          <li>
            <img src={portfolioIcon} alt="" />
            <span>Organization</span>
          </li>
          <li>
            <img src={handbag} alt="" />
            <span>Loan Products</span>
          </li>
          <li>
            <img src={bank} alt="" />
            <span>Savings Products</span>
          </li>
          <li>
            <img src={coins} alt="" />
            <span>Fees and Charges</span>
          </li>
          <li>
            <img src={transaction} alt="" />
            <span>Transactions</span>
          </li>
          <li>
            <img src={service} alt="" />
            <span>Services</span>
          </li>
          <li>
            <img src={serviceAcct} alt="" />
            <span>Service Account</span>
          </li>
          <li>
            <img src={scroll} alt="" />
            <span>Settlements</span>
          </li>
          <li>
            <img src={report} alt="" />
            <span>Reports</span>
          </li>
        </ul>
      </div>
      <div className="businessContainer">
        <h4>Settings</h4>
        <ul>
          <li>
            <img src={slider} alt="" />
            <span>Preferences</span>
          </li>
          <li>
            <img src={percent} alt="" />
            <span>Fees and Pricing</span>
          </li>
          <li>
            <img src={clipboard} alt="" />
            <span>Audit Logs</span>
          </li>
          <li className="hide">
            <img src={tire} alt="" />
            <span>Systems Messages</span>
          </li>
        </ul>
      </div>
      <div className="logout-wrapper hide">
        <div className="logout">
          <img src={logout} alt="" />
          <span>Logout</span>
        </div>
        <span>v1.2.0</span>
      </div>
    </div>
  );
};

export default Sidebar;
