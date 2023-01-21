import { useContext, useEffect, useRef } from "react";
import filter from "../assets/filter.svg";
import more from "../assets/more.svg";
import { Link } from "react-router-dom";
import { Users } from "./UserData";
import view from "../assets/view.svg";
import karma from "../assets/user-times.svg";
import activate from "../assets/activate.svg";
import "../styles/userDetailsdropdown.scss";
import { DataContext } from "../App";

interface Props {
  user: Users;
}

const SelectUserCount = ({ user }: Props) => {
  const { open, setOpen, drop, setDrop } = useContext(DataContext);
  let filterRef = useRef<NodeList | null>(null);

  const handleUserDetailMenu = (e: React.SyntheticEvent): void => {
    let target = e.target as HTMLImageElement;
    if (target.id) {
      console.log(target.id);
      setOpen(!open);
    }
    // console.log(target.id === id);
  };

  const doAnotherThing = () => {
    setDrop(!drop);
  };

  filterRef.current = document.querySelectorAll(".inner");
  filterRef.current.forEach((filter) =>
    filter.addEventListener("click", doAnotherThing)
  );

  return (
    <div key={user.id} className="user-overview-wrapper">
      <div className="wrap">
        <div className="inner">
          <h4>Organization</h4>
          <img src={filter} alt="" />
        </div>
        <span>{user.orgName}</span>
      </div>

      <div className="wrap">
        <div className="inner">
          <h4>Username</h4>

          <img src={filter} alt="" />
        </div>
        <span>{user.userName}</span>
      </div>

      <div className="wrap">
        <div className="inner">
          <h4>Email</h4>

          <img src={filter} alt="" />
        </div>
        <span>{user.email}</span>
      </div>

      <div className="wrap">
        <div className="inner">
          <h4>Phone Number</h4>

          <img src={filter} alt="" />
        </div>
        <span>{user.phoneNumber}</span>
      </div>

      <div className="wrap">
        <div className="inner">
          <h4>Date Joined</h4>

          <img src={filter} alt="" />
        </div>
        <span>{user.createdAt}</span>
      </div>
      <div className="wrap">
        <div className="inner">
          <h4>Status</h4>

          <img src={filter} alt="" />
        </div>
        <span>Inactive</span>
      </div>
      <div className="dashDots">
        <div className="menu-trigger">
          <img src={more} alt="" id={user.id} onClick={handleUserDetailMenu} />
        </div>
        <div className={`dropdown-menu ${open ? "active" : "inactive"}`}>
          <ul className="drop-menu">
            <li className="dropdownItem">
              <img src={view} alt="" />
              <Link to={`/details/${user.id}`}>
                <span>View Details</span>
              </Link>
            </li>
            <li className="dropdownItem">
              <img src={karma} alt="" />

              <span>Blacklist User</span>
            </li>
            <li className="dropdownItem">
              <img src={activate} alt="" />

              <span>Activate User</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

// interface Items {
//   user: Users;
//   img: string;
//   text: string;
// }

// const DropdownItem = ({ user, img, text }: Items) => {
//   return (
//     <Link to={`/details/${user.id}`} className="dropdownItem">
//       <img src={img} alt="" />
//       <span>{text}</span>
//     </Link>
//   );
// };

export default SelectUserCount;
