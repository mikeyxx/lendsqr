import { useContext } from "react";
import users_count from "../assets/user-icon.svg";
import active_user from "../assets/active-users.svg";
import loan_users from "../assets/users-with-loan.svg";
import total_savings from "../assets/users-with-savings.svg";
import filter from "../assets/filter.svg";
import more from "../assets/more.svg";
import prev from "../assets/prev-btn.svg";
import next from "../assets/next-btn.svg";
import view from "../assets/view.svg";
import karma from "../assets/user-times.svg";
import activate from "../assets/activate.svg";
import "../styles/userfilterStyles.scss";

import "../styles/filter.scss";
import { DataContext } from "../App";

const UserInfoFilter = () => {
  const { menu } = useContext(DataContext);
  return (
    <div className={`userInfoFilterContainer ${!menu ? "up" : ""}`}>
      <h2>Users</h2>
      <div className="summary-card">
        <div className="users-card cards">
          <img src={users_count} alt="" />
          <h4>Users</h4>
          <span className="total-value">2,453</span>
        </div>
        <div className="active-users-card cards">
          <img src={active_user} alt="" />
          <h4>Active Users</h4>
          <span className="total-value">2,453</span>
        </div>
        <div className="loan-users-card cards">
          <img src={loan_users} alt="" />
          <h4>Users with loans</h4>
          <span className="total-value">12,453</span>
        </div>
        <div className="saving-users-card cards">
          <img src={total_savings} alt="" />
          <h4>Users with savings</h4>
          <span className="total-value">102,453</span>
        </div>
      </div>
      <div className="user-overview">
        <div className="user-overview-wrapper">
          <div className="wrap">
            <div className="inner">
              <h4>Organization</h4>
              <img src={filter} alt="" />
            </div>
            <span>Lendsqr</span>
          </div>

          <div className="wrap">
            <div className="inner">
              <h4>Username</h4>
              <img src={filter} alt="" />
            </div>
            <span>Adedeji</span>
          </div>

          <div className="wrap">
            <div className="inner">
              <h4>Email</h4>
              <img src={filter} alt="" />
            </div>
            <span>Adedeji@lendsqr.com</span>
          </div>

          <div className="wrap">
            <div className="inner">
              <h4>Phone Number</h4>
              <img src={filter} alt="" />
            </div>
            <span>08078903721</span>
          </div>

          <div className="wrap">
            <div className="inner">
              <h4>Date Joined</h4>
              <img src={filter} alt="" />
            </div>
            <span>May 15, 2020 10:00am</span>
          </div>
          <div className="wrap">
            <div className="inner">
              <h4>Status</h4>
              <img src={filter} alt="" />
            </div>
            <span>Active</span>
          </div>
          <div className="dots">
            <img src={more} alt="" />
          </div>
        </div>
      </div>
      <div className="paginate">
        <div className="drop-paginate">
          <div>
            <span>Showing</span>
            <select>
              <option>Hello</option>
            </select>
          </div>

          <span className="out-of">Out of 100</span>
        </div>

        <div className="pag">
          <img src={prev} alt="" />
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <img src={next} alt="" />
        </div>
      </div>
      <div className="filter-dropdown">
        <div className="filter-wrapper ">
          <div className="org field">
            <label htmlFor="" className="label">
              Organization
            </label>
            <select>
              <option>Select</option>
            </select>
          </div>
          <div className="username field">
            <label htmlFor="" className="label">
              Username
            </label>
            <input type="text" placeholder="User" />
          </div>

          <div className="email field">
            <label htmlFor="" className="label">
              Email
            </label>
            <input type="text" placeholder="Email" />
          </div>
          <div className="date field">
            <label htmlFor="" className="label">
              Date
            </label>
            <input type="date" placeholder="Date" />
          </div>
          <div className="phonenumber field">
            <label htmlFor="" className="label">
              Phone Number
            </label>
            <input type="text" placeholder="Phone Number" />
          </div>
          <div className="status field">
            <label htmlFor="" className="label">
              Status
            </label>
            <select>
              <option>Select</option>
            </select>
          </div>
          <div className="go">
            <button className="reset-btn sub light">Reset</button>
            <button className="filter-btn sub filled">Filter</button>
          </div>
        </div>
      </div>
      <div className="three-dots-container">
        <div className="three-dots-wrapper">
          <div className="view-details action">
            <img src={view} alt="" className="view" />
            <span>View Details</span>
          </div>
          <div className="blacklist-user action">
            <img src={karma} alt="" className="karma" />
            <span>Blacklist User</span>
          </div>
          <div className="activate-user action">
            <img src={activate} alt="" className="activate" />
            <span>Activate User</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserInfoFilter;
