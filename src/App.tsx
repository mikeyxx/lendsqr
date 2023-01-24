import { createContext, useState } from "react";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import UserDetails from "./pages/UserDetails";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Users } from "./components/UserData";
import GuarantorInfo from "./pages/otherPages/GuarantorInfo";
import Loans from "./pages/otherPages/Loans";
import DModelInfo from "./pages/otherPages/DModelInfo";
import Savings from "./pages/otherPages/Savings";
import LoanRequest from "./pages/otherPages/LoanRequestInfo";
import WhiteList from "./pages/otherPages/WhiteListInfo";
import Karma from "./pages/otherPages/KarmaInfo";

interface ApplicationContext {
  menu: boolean;
  setMenu: React.Dispatch<React.SetStateAction<boolean>>;
  users: Users[];
  setUsers: React.Dispatch<React.SetStateAction<Users[]>>;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  usersPerPage: number;
  setUsersPerPage: React.Dispatch<React.SetStateAction<number>>;
  numberOfValues: string;
  setNumberOfValues: React.Dispatch<React.SetStateAction<string>>;
  disableBtn: boolean;
  setDisableBtn: React.Dispatch<React.SetStateAction<boolean>>;
  userData: Users[];
  setUserData: React.Dispatch<React.SetStateAction<Users[]>>;
  savedData: Users[];
  setSavedData: React.Dispatch<React.SetStateAction<Users[]>>;
  changePage: boolean;
  setChangePage: React.Dispatch<React.SetStateAction<boolean>>;
}

const contextDefaultValues: ApplicationContext = {
  menu: false,
  setMenu: () => {},
  users: [],
  setUsers: () => {},
  currentPage: 1,
  setCurrentPage: () => {},
  usersPerPage: 10,
  setUsersPerPage: () => {},
  numberOfValues: "10",
  setNumberOfValues: () => {},
  disableBtn: false,
  setDisableBtn: () => {},
  userData: [],
  setUserData: () => {},
  savedData: [],
  setSavedData: () => {},
  changePage: false,
  setChangePage: () => {},
};

export const DataContext =
  createContext<ApplicationContext>(contextDefaultValues);

function App() {
  const [menu, setMenu] = useState<boolean>(false);
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loggedUser, setLoggedUser] = useState<Users[]>([]);
  const [error, setError] = useState<string>("");
  const [isPasswordShown, setIsPasswordShown] = useState<boolean>(false);
  const [users, setUsers] = useState<Users[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [usersPerPage, setUsersPerPage] = useState<number>(10);
  const [numberOfValues, setNumberOfValues] = useState<string>("10");
  const [disableBtn, setDisableBtn] = useState<boolean>(false);
  const [userData, setUserData] = useState<Users[]>([]);
  const [savedData, setSavedData] = useState<Users[]>([]);
  const [changePage, setChangePage] = useState<boolean>(false);

  const isLoggedIn = localStorage.getItem("isLoggedIn");

  return (
    <>
      {!isLoggedIn ? (
        <Login
          username={username}
          setUsername={setUsername}
          password={password}
          setPassword={setPassword}
          error={error}
          setError={setError}
          isPasswordShown={isPasswordShown}
          setIsPasswordShown={setIsPasswordShown}
          loggedUser={loggedUser}
          setLoggedUser={setLoggedUser}
        />
      ) : (
        <Router>
          <DataContext.Provider
            value={{
              menu,
              setMenu,
              users,
              setUsers,
              currentPage,
              setCurrentPage,
              usersPerPage,
              setUsersPerPage,
              numberOfValues,
              setNumberOfValues,
              disableBtn,
              setDisableBtn,
              userData,
              setUserData,
              savedData,
              setSavedData,
              changePage,
              setChangePage,
            }}
          >
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/details/:id" element={<UserDetails />} />
              <Route path="/guarantor" element={<GuarantorInfo />} />
              <Route path="/loans" element={<Loans />} />
              <Route path="/dModel" element={<DModelInfo />} />
              <Route path="/savings" element={<Savings />} />
              <Route path="/lRequest" element={<LoanRequest />} />
              <Route path="/whitelist" element={<WhiteList />} />
              <Route path="/karma" element={<Karma />} />
            </Routes>
          </DataContext.Provider>
        </Router>
      )}
    </>
  );
}

export default App;
