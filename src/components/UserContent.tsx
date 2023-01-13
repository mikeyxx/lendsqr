import users_count from "../assets/user-icon.svg";
import active_user from "../assets/active-users.svg";
import loan_users from "../assets/users-with-loan.svg";
import total_savings from "../assets/users-with-savings.svg";
import filter from "../assets/filter.svg";
import more from "../assets/more.svg";
import prev from "../assets/prev-btn.svg";
import next from "../assets/next-btn.svg";

import "../styles/content.scss";

interface Props {
  menu: boolean;
  setMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

const UserContent = ({ menu, setMenu }: Props) => {
  return (
    <div className={`userContentContainer ${!menu ? "up" : ""} `}>
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
            <span>Inactive</span>
          </div>
          <div>
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
    </div>
  );
};

export default UserContent;
