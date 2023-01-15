import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import UserInfoParent from "../components/UserInfoParent";
import "../styles/userDetailsStyles.scss";

const UserDetails = () => {
  return (
    <div className="user-details-container">
      <Header />
      <div className="user-details-wrapper">
        <Sidebar />
        <UserInfoParent />
      </div>
    </div>
  );
};

export default UserDetails;
