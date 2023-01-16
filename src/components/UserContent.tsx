import axios from "axios";
import { useEffect } from "react";
import users_count from "../assets/user-icon.svg";
import active_user from "../assets/active-users.svg";
import { useContext } from "react";
import loan_users from "../assets/users-with-loan.svg";
import total_savings from "../assets/users-with-savings.svg";
import prev from "../assets/prev-btn.svg";
import next from "../assets/next-btn.svg";
import "../styles/content.scss";
import { DataContext } from "../App";
import SelectUserCount from "./SelectUserCount";
import NavigatedUserCount from "./NavigatedUserCount";
import ReactPaginate from "react-paginate";

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
    numberOfValues,
    seNumberOfValues,
    disableBtn,
    setDisableBtn,
    drop,
  } = useContext(DataContext);

  const currentNumOfUsers = parseInt(numberOfValues);

  const fetchUsers = async () => {
    try {
      const res = await axios.get(
        "https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users "
      );
      const info: [] = await res.data;
      if (currentNumOfUsers <= 10) {
        setUsers(info);
      } else {
        setUsers(info.slice(0, currentNumOfUsers));
      }
    } catch (error) {
      console.log(error);
    }
  };
  const indexOfLastPage = currentPage * usersPerPage;
  const indexOfFirstPage = indexOfLastPage - usersPerPage;
  const currentUsers = users.slice(indexOfFirstPage, indexOfLastPage);

  useEffect(() => {
    fetchUsers();
  }, [currentPage, currentNumOfUsers]);

  // const handlePageClick = (data: {}) => {
  //   console.log(data.selected);
  // };

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
        {currentNumOfUsers <= 10
          ? currentUsers.map((user) => (
              <SelectUserCount key={user.id} user={user} />
            ))
          : users.map((user) => (
              <NavigatedUserCount key={user.id} user={user} />
            ))}
      </div>
      <div className="paginate">
        <div className="drop-paginate">
          <div>
            <span>Showing</span>
            <select onChange={(e) => seNumberOfValues(e.target.value)}>
              <option value={10}>10</option>
              <option value={20}>20</option>
              <option value={30}>30</option>
              <option value={40}>40</option>
              <option value={50}>50</option>
              <option value={60}>60</option>
              <option value={70}>70</option>
              <option value={80}>80</option>
              <option value={90}>90</option>
              <option value={100}>100</option>
            </select>
          </div>

          <span className="out-of">Out of 100</span>
        </div>

        <div className="pag">
          <button
            disabled={disableBtn}
            onClick={() => {
              if (currentPage === 1) {
                return;
              }
              setCurrentPage((prev) => prev - 1);
            }}
          >
            <img src={prev} alt="" />
          </button>

          <span>1</span>
          <span>2</span>
          <span>3</span>
          <button
            disabled={disableBtn}
            onClick={() => {
              if (currentPage === 10) {
                return;
              }
              setCurrentPage((prev) => prev + 1);
            }}
          >
            <img src={next} alt="" />
          </button>
          {/* <ReactPaginate
            pageCount={10}
            previousLabel={<img src={prev} alt="" />}
            nextLabel={<img src={next} alt="" />}
            breakLabel={"..."}
            marginPagesDisplayed={3}
            onPageChange={handlePageClick}
          /> */}
        </div>
      </div>
      <div className="filter-dropdown">
        <div className={`filter-wrapper ${drop ? "active" : "inactive"}`}>
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
    </div>
  );
};

export default UserContent;
