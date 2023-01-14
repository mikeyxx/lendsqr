import React, { useRef } from "react";
import "../styles/login.scss";
import pablo from "../assets/pablo-sign-in.svg";
import group from "../assets/Group.svg";
import { access } from "../components/Credentials";

interface Props {
  username: string;
  setUsername: React.Dispatch<React.SetStateAction<string>>;
  password: string;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
  error: string;
  setError: React.Dispatch<React.SetStateAction<string>>;
  isPasswordShown: boolean;
  setIsPasswordShown: React.Dispatch<React.SetStateAction<boolean>>;
}

const Login = ({
  username,
  setUsername,
  password,
  setPassword,
  setIsLoggedIn,
  error,
  setError,
  isPasswordShown,
  setIsPasswordShown,
}: Props) => {
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await access(username, password);
      setIsLoggedIn(true);
    } catch (err) {
      setError("Incorrect username or password");
    }
    setUsername("");
    setPassword("");
  };

  const showPassword = () => {
    setIsPasswordShown((prev) => !prev);
  };
  return (
    <div className="wrapper">
      <div className="left">
        <header className="groupImg">
          <img src={group} alt="" />
        </header>
        <div className="pabloImg">
          <img src={pablo} alt="" />
        </div>
      </div>
      <div className="right">
        <div className="formWrapper">
          <header>
            <h1>Welcome!</h1>
            <p>Enter details to login</p>
          </header>

          <form className="form" onSubmit={handleLogin}>
            <input
              value={username}
              type="text"
              placeholder="Email"
              required
              onChange={(e) => setUsername(e.target.value)}
            />
            <div className="password-box">
              <input
                value={password}
                type={isPasswordShown ? "text" : "password"}
                placeholder="Password"
                required
                onChange={(e) => setPassword(e.target.value)}
              />
              <span onClick={showPassword}>Show</span>
            </div>

            <span className="err">{error}</span>

            <a href="#" className="forgot-password btn">
              forgot password?
            </a>
            <button type="submit" className="submit-btn filled">
              Log in
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
