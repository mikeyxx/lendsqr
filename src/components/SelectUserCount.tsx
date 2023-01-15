import filter from "../assets/filter.svg";
import more from "../assets/more.svg";
import { Link } from "react-router-dom";
import { Users } from "./UserData";

interface Props {
  user: Users;
}

const SelectUserCount = ({ user }: Props) => {
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
        <Link to={`/details/${user.id}`}>
          <img src={more} alt="" />
        </Link>
      </div>
    </div>
  );
};

export default SelectUserCount;
