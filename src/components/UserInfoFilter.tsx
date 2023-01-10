import users_count from "../assets/user-icon.svg";
import active_user from "../assets/active-users.svg";
import total_savings from "../assets/users-with-savings.svg";
import filter from "../assets/filter.svg";
import more from "../assets/more.svg";
import prev from "../assets/prev-btn.svg";
import next from "../assets/next-btn.svg";
import view from "../assets/view.svg";
import karma from "../assets/user-times.svg";
import activate from "../assets/activate.svg";

const UserInfoFilter = () => {
  return (
    <div className="userInfoFilterContainer">
      <h2>Users</h2>
      <div className="summary-card">
        <div className="users-card">
          <img src={users_count} alt="" />
          <h4>Users</h4>
          <span className="total-value">2,453</span>
        </div>
        <div className="active-users-card">
          <img src={active_user} alt="" />
          <h4>Active Users</h4>
          <span className="total-value">2,453</span>
        </div>
        <div className="active-users-card">
          <img src={total_savings} alt="" />
          <h4>Users with savings</h4>
          <span className="total-value">102,453</span>
        </div>
      </div>
      <div className="user-overview">
        <table>
          <thead>
            <tr>
              <th>
                <h4>Organization</h4>
                <img src={filter} alt="" />
              </th>
              <th>
                <h4>Username</h4>
                <img src={filter} alt="" />
              </th>
              <th>
                <h4>Email</h4>
                <img src={filter} alt="" />
              </th>
              <th>
                <h4>Phone Number</h4>
                <img src={filter} alt="" />
              </th>
              <th>
                <h4>Date Joined</h4>
                <img src={filter} alt="" />
              </th>
              <th>
                <h4>Status</h4>
                <img src={filter} alt="" />
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Lendsqr</td>
              <td>Adedeji</td>
              <td>Adedeji@lendsqr.com</td>
              <td>08078903721</td>
              <td>May 15, 2020 10:00am</td>
              <td>Status</td>
              <td>
                <img src={more} alt="" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="paginate">
        <div>
          <span>Showing</span>
          <select>
            <option>Hello</option>
          </select>
          <span>Out of 100</span>
        </div>

        <div>
          <img src={prev} alt="" />
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <img src={next} alt="" />
        </div>
      </div>
      <div className="filter-dropdown">
        <div className="filter-wrapper">
          <div className="org">
            <label htmlFor="">Organization</label>
            <select>
              <option>Select</option>
            </select>
          </div>
          <div className="username">
            <label htmlFor="">Username</label>
            <input type="text" placeholder="User" />
          </div>

          <div className="email">
            <label htmlFor="">Email</label>
            <input type="text" placeholder="Email" />
          </div>
          <div className="date">
            <label htmlFor="">Date</label>
            <input type="date" placeholder="Date" />
          </div>
          <div className="phonenumber">
            <label htmlFor="">Phone Number</label>
            <input type="text" placeholder="Phone Number" />
          </div>
          <div className="status">
            <label htmlFor="">Status</label>
            <select>
              <option>Select</option>
            </select>
          </div>
          <div className="go">
            <button className="btn light">Reset</button>
            <button className="btn filled">Filter</button>
          </div>
        </div>
      </div>
      <div className="three-dots-container">
        <div className="three-dots-wrapper">
          <div className="view-details">
            <img src={view} alt="" />
            <span>View Details</span>
          </div>
          <div className="blacklist-user">
            <img src={karma} alt="" />
            <span>Blacklist User</span>
          </div>
          <div className="activate-user">
            <img src={activate} alt="" />
            <span>Activate User</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserInfoFilter;
