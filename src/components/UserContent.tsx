import axios from "axios";
import { useEffect } from "react";
import users_count from "../assets/user-icon.svg";
import active_user from "../assets/active-users.svg";
import { useContext } from "react";
import loan_users from "../assets/users-with-loan.svg";
import total_savings from "../assets/users-with-savings.svg";
import filter from "../assets/filter.svg";
import more from "../assets/more.svg";
import prev from "../assets/prev-btn.svg";
import next from "../assets/next-btn.svg";
import "../styles/content.scss";
import { Link } from "react-router-dom";
import { DataContext } from "../App";

const UserContent = () => {
  const {
    menu,
    setMenu,
    users,
    setUsers,
    currentPage,
    setCurrentPage,
    usersPerPage,
    setUsersPerPage,
  } = useContext(DataContext);

  const fetchUsers = async () => {
    const res = await axios.get(
      "https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users "
    );
    const info = res.data;
    setUsers(info);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const indexOfLastPage = currentPage * usersPerPage;
  const indexOfFirstPage = indexOfLastPage - usersPerPage;
  const currentUsers = users.slice(indexOfFirstPage, indexOfLastPage);

  console.log(currentUsers, users);

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
        {currentUsers.map((user) => (
          <div key={user.id} className="user-overview-wrapper">
            <div className="wrap">
              <div className="inner">
                <h4>Organization</h4>
                <Link to="/filter">
                  <img src={filter} alt="" />
                </Link>
              </div>
              <span>{user.orgName}</span>
            </div>

            <div className="wrap">
              <div className="inner">
                <h4>Username</h4>
                <Link to="/filter">
                  <img src={filter} alt="" />
                </Link>
              </div>
              <span>{user.userName}</span>
            </div>

            <div className="wrap">
              <div className="inner">
                <h4>Email</h4>
                <Link to="/filter">
                  <img src={filter} alt="" />
                </Link>
              </div>
              <span>{user.email}</span>
            </div>

            <div className="wrap">
              <div className="inner">
                <h4>Phone Number</h4>
                <Link to="/filter">
                  <img src={filter} alt="" />
                </Link>
              </div>
              <span>{user.phoneNumber}</span>
            </div>

            <div className="wrap">
              <div className="inner">
                <h4>Date Joined</h4>
                <Link to="/filter">
                  <img src={filter} alt="" />
                </Link>
              </div>
              <span>{user.createdAt}</span>
            </div>
            <div className="wrap">
              <div className="inner">
                <h4>Status</h4>
                <Link to="/filter">
                  <img src={filter} alt="" />
                </Link>
              </div>
              <span>Inactive</span>
            </div>
            <div className="dashDots">
              <img src={more} alt="" />
            </div>
          </div>
        ))}
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
