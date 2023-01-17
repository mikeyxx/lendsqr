import { createContext, useState } from "react";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import UserDetails from "./pages/UserDetails";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Users } from "./components/UserData";
import OtherPages from "./pages/OtherPages";

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
  seNumberOfValues: React.Dispatch<React.SetStateAction<string>>;
  disableBtn: boolean;
  setDisableBtn: React.Dispatch<React.SetStateAction<boolean>>;
  userData: Users[];
  setUserData: React.Dispatch<React.SetStateAction<Users[]>>;
  savedData: Users[];
  setSavedData: React.Dispatch<React.SetStateAction<Users[]>>;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  drop: boolean;
  setDrop: React.Dispatch<React.SetStateAction<boolean>>;
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
  seNumberOfValues: () => {},
  disableBtn: false,
  setDisableBtn: () => {},
  userData: [],
  setUserData: () => {},
  savedData: [],
  setSavedData: () => {},
  open: false,
  setOpen: () => {},
  drop: false,
  setDrop: () => {},
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
  const [numberOfValues, seNumberOfValues] = useState<string>("10");
  const [disableBtn, setDisableBtn] = useState<boolean>(false);
  const [userData, setUserData] = useState<Users[]>([]);
  const [savedData, setSavedData] = useState<Users[]>([]);
  const [open, setOpen] = useState<boolean>(false);
  const [drop, setDrop] = useState<boolean>(false);
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
              seNumberOfValues,
              disableBtn,
              setDisableBtn,
              userData,
              setUserData,
              savedData,
              setSavedData,
              open,
              setOpen,
              drop,
              setDrop,
              changePage,
              setChangePage,
            }}
          >
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/details/:id" element={<UserDetails />} />
              <Route path="/nodata" element={<OtherPages />} />
            </Routes>
          </DataContext.Provider>
        </Router>
      )}
    </>
  );
}

export default App;
