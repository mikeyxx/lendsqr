import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import UserInformation from "../components/UserInformation";
import "../styles/userDetailsStyles.scss";

const UserDetails = () => {
  return (
    <div className="user-details-container">
      <Header />
      <div className="user-details-wrapper">
        <Sidebar />
        <UserInformation />
      </div>
    </div>
  );
};

export default UserDetails;
