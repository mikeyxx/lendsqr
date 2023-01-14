import { createContext, useState } from "react";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import UserDetails from "./pages/UserDetails";
import UserFilter from "./pages/UserFilter";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Users } from "./components/UserData";

interface ApplicationContext {
  menu: boolean;
  setMenu: React.Dispatch<React.SetStateAction<boolean>>;
  users: Users[];
  setUsers: React.Dispatch<React.SetStateAction<Users[]>>;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  usersPerPage: number;
  setUsersPerPage: React.Dispatch<React.SetStateAction<number>>;
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
};

export const TodosContext =
  createContext<ApplicationContext>(contextDefaultValues);

export const DataContext =
  createContext<ApplicationContext>(contextDefaultValues);

function App() {
  const [menu, setMenu] = useState<boolean>(false);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [isPasswordShown, setIsPasswordShown] = useState<boolean>(false);
  const [users, setUsers] = useState<Users[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [usersPerPage, setUsersPerPage] = useState<number>(10);

  return (
    <>
      {!isLoggedIn ? (
        <Login
          username={username}
          setUsername={setUsername}
          password={password}
          setPassword={setPassword}
          setIsLoggedIn={setIsLoggedIn}
          error={error}
          setError={setError}
          isPasswordShown={isPasswordShown}
          setIsPasswordShown={setIsPasswordShown}
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
            }}
          >
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/filter" element={<UserFilter />} />
              <Route path="/details" element={<UserDetails />} />
            </Routes>
          </DataContext.Provider>
        </Router>
      )}
    </>
  );
}

export default App;
