import axios from "axios";
import { useEffect, useState } from "react";
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
import FilterDropDown from "./FilterDropDown";

const UserContent = () => {
  const {
    menu,
    users,
    setUsers,
    currentPage,
    setCurrentPage,
    usersPerPage,
    numberOfValues,
    setNumberOfValues,
    disableBtn,
  } = useContext(DataContext);

  const [open, setOpen] = useState<boolean>(false);
  const [drop, setDrop] = useState<boolean>(false);
  const [targetId, setTargetId] = useState("");
  const [left, setLeft] = useState(0);
  const [top, setTop] = useState(0);
  const [filterTop, setFilterTop] = useState(0);
  const [filterLeft, setFilterLeft] = useState(0);

  const currentNumOfUsers = Number(numberOfValues);

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

  const handlePageNumClick = (e: React.SyntheticEvent): void => {
    let target = e.target as HTMLLIElement;
    setCurrentPage(Number(target.id));
  };

  const pages = [];

  for (let i = 1; i <= Math.ceil(users.length / usersPerPage); i++) {
    pages.push(i);
  }

  const renderPageNumber = pages.map((number) => {
    return (
      <li
        id={String(number)}
        key={number}
        onClick={handlePageNumClick}
        className={currentPage === number ? "activePageNum" : ""}
      >
        {number}
      </li>
    );
  });

  const handleUserMenu = (e: React.MouseEvent<Element, MouseEvent>): void => {
    let target = e.target as HTMLImageElement;
    setTargetId(target.id);
    setLeft(e.pageX);
    setTop(e.pageY);
    setOpen(true);
  };

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
        {currentNumOfUsers <= 10 ? (
          <SelectUserCount
            open={open}
            handleUserMenu={handleUserMenu}
            currentUsers={currentUsers}
            targetId={targetId}
            leftPosition={left}
            topPosition={top}
            setDrop={setDrop}
            setFilterTop={setFilterTop}
            setFilterLeft={setFilterLeft}
            currentPage={currentPage}
          />
        ) : (
          <NavigatedUserCount
            open={open}
            handleUserMenu={handleUserMenu}
            users={users}
            targetId={targetId}
            leftPosition={left}
            topPosition={top}
            setDrop={setDrop}
            setFilterTop={setFilterTop}
            setFilterLeft={setFilterLeft}
            numberOfValues={numberOfValues}
          />
        )}
      </div>
      <div className="paginate">
        <div className="drop-paginate">
          <div>
            <span>Showing</span>
            <select onChange={(e) => setNumberOfValues(e.target.value)}>
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
          <ul className="pageNum">{renderPageNumber}</ul>
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
        </div>
      </div>
      {drop && <FilterDropDown filterTop={filterTop} filterLeft={filterLeft} />}
    </div>
  );
};

export default UserContent;
