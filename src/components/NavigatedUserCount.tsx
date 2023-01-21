import { useContext, useEffect, useRef } from "react";
import filter from "../assets/filter.svg";
import more from "../assets/more.svg";
import { Link } from "react-router-dom";
import { Users } from "./UserData";
import view from "../assets/view.svg";
import karma from "../assets/user-times.svg";
import activate from "../assets/activate.svg";
import { DataContext } from "../App";

interface Props {
  user: Users;
}

const NavigatedUserCount = ({ user }: Props) => {
  const { open, setOpen, drop, setDrop } = useContext(DataContext);

  let menuRef = useRef<HTMLDivElement>(null);
  let filterRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    let handler = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
      document.addEventListener("mousedown", handler);
      return () => {
        document.removeEventListener("mousedown", handler);
      };
    };
  }, [menuRef]);

  useEffect(() => {
    // let handle = (e: MouseEvent) => {
    //   if (filterRef.current && !filterRef.current.contains(e.target as Node)) {
    //     setDrop(false);
    //   }
    //   document.addEventListener("mousedown", handle);
    //   return () => {
    //     document.removeEventListener("mousedown", handle);
    //   };
    // };
  }, [filterRef]);

  return (
    <div
      key={user.id}
      className="user-overview-wrapper"
      onClick={() => {
        setDrop(!drop);
      }}
    >
      <div className="wrap">
        <div className="inner">
          <h4>Organization</h4>
          <img src={filter} alt="" ref={filterRef} />
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
      <div className="dashDots" ref={menuRef}>
        <div
          className="menu-trigger"
          onClick={() => {
            setOpen(!open);
          }}
        >
          <img src={more} alt="" />
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

              <span className="a">Blacklist User</span>
            </li>
            <li className="dropdownItem">
              <img src={activate} alt="" />

              <span className="a">Activate User</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavigatedUserCount;
