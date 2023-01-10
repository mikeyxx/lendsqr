import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import UserDetails from "./pages/UserDetails";
import UserFilter from "./pages/UserFilter";

function App() {
  return (
    <div>
      <Login />
      <Dashboard />
      <UserFilter />
      <UserDetails />
    </div>
  );
}

export default App;
