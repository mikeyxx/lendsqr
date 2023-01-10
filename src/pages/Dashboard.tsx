import "../styles/dashboadStyles.scss";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import UserContent from "../components/UserContent";

const Dashboard = () => {
  return (
    <div className="dashboardContainer">
      <Header />
      <div className="dashboard-wrapper">
        <Sidebar />
        <UserContent />
      </div>
    </div>
  );
};

export default Dashboard;
