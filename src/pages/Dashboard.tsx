import "../styles/dashboadStyles.scss";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import UserContent from "../components/UserContent";

interface Props {
  menu: boolean;
  setMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

const Dashboard = ({ menu, setMenu }: Props) => {
  return (
    <div className="dashboardContainer">
      <Header menu={menu} setMenu={setMenu} />
      <div className="dashboard-wrapper">
        <Sidebar menu={menu} />
        <UserContent menu={menu} setMenu={setMenu} />
      </div>
    </div>
  );
};

export default Dashboard;
