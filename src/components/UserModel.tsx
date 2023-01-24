import { Link } from "react-router-dom";
import "../styles/userModal.scss";

interface Props {
  view: string;
  karma: string;
  activate: string;
  targetId: string;
  topPosition: number;
  leftPosition: number;
}

const UserModel = ({
  view,
  karma,
  activate,
  targetId,
  topPosition,
  leftPosition,
}: Props) => {
  return (
    <div
      className="dropdown-menu"
      style={{
        position: "absolute",
        top: `${topPosition}px`,
        left: `${leftPosition - 170}px`,
      }}
    >
      <ul className="drop-menu">
        <li className="dropdownItem">
          <img src={view} alt="" />
          <Link to={`/details/${targetId}`}>
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
  );
};

export default UserModel;
