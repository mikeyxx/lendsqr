import { useContext, useEffect, useRef } from "react";
import filter from "../assets/filter.svg";
import more from "../assets/more.svg";
import { Users } from "./UserData";
import view from "../assets/view.svg";
import karma from "../assets/user-times.svg";
import activate from "../assets/activate.svg";
import UserModel from "./UserModel";

interface Props {
  users: Users[];
  open: boolean;
  handleUserMenu: (e: React.MouseEvent<Element, MouseEvent>) => void;
  targetId: string;
  leftPosition: number;
  topPosition: number;
  setDrop: React.Dispatch<React.SetStateAction<boolean>>;
  setFilterTop: React.Dispatch<React.SetStateAction<number>>;
  setFilterLeft: React.Dispatch<React.SetStateAction<number>>;
  numberOfValues: string;
}

const NavigatedUserCount = ({
  users,
  open,
  handleUserMenu,
  targetId,
  leftPosition,
  topPosition,
  setDrop,
  setFilterTop,
  setFilterLeft,
  numberOfValues,
}: Props) => {
  const imgRef = useRef<NodeList | null>(null);

  useEffect(() => {
    setTimeout(() => {
      imgRef.current = document.querySelectorAll(".filter") as NodeList;
      imgRef.current?.forEach((img) =>
        img.addEventListener("click", handleFilterIconPress)
      );
    }, 1500);

    return () => {
      imgRef.current?.forEach((img) =>
        img.removeEventListener("click", handleFilterIconPress)
      );
    };
  }, [numberOfValues]);

  function handleFilterIconPress(e: any) {
    setDrop(true);
    setFilterLeft(e.pageX);
    setFilterTop(e.pageY);
  }

  function getDate(data: string) {
    const res = data.split("T");
    return res[0];
  }

  function checkDate(data: string) {
    const currentDate = Number(new Date().getFullYear());
    const res = data.split("T");
    const a = res[0];
    const dateCreated = Number(new Date(a).getFullYear());
    return currentDate - dateCreated > 3 ? "Inactive" : "Active";
  }

  return (
    <>
      {users.map((user) => (
        <div key={user.id} className="user-overview-wrapper">
          <div className="wrap">
            <div className="inner">
              <h4>Organization</h4>
              <img src={filter} alt="" className="filter" />
            </div>
            <span>{user.orgName}</span>
          </div>

          <div className="wrap">
            <div className="inner">
              <h4>Username</h4>

              <img src={filter} alt="" className="filter" />
            </div>
            <span>{user.userName}</span>
          </div>

          <div className="wrap">
            <div className="inner">
              <h4>Email</h4>

              <img src={filter} alt="" className="filter" />
            </div>
            <span>{user.email}</span>
          </div>

          <div className="wrap">
            <div className="inner">
              <h4>Phone Number</h4>

              <img src={filter} alt="" className="filter" />
            </div>
            <span>{user.phoneNumber}</span>
          </div>

          <div className="wrap">
            <div className="inner">
              <h4>Date Joined</h4>

              <img src={filter} alt="" className="filter" />
            </div>
            <span>{getDate(user.createdAt)}</span>
          </div>
          <div className="wrap">
            <div className="inner">
              <h4>Status</h4>

              <img src={filter} alt="" className="filter" />
            </div>
            <span
              style={{
                backgroundColor:
                  checkDate(user.createdAt) === "Inactive"
                    ? `#ffcccc`
                    : "#e6fff2",
                color:
                  checkDate(user.createdAt) === "Inactive" ? `red` : "green",
                borderRadius: "5px",
                padding: "2px 5px",
              }}
            >
              {checkDate(user.createdAt)}
            </span>
          </div>

          <div className="menu-trigger">
            <img
              src={more}
              alt=""
              id={user.id}
              onClick={(event) => handleUserMenu(event)}
            />
          </div>
        </div>
      ))}
      {open && (
        <UserModel
          targetId={targetId}
          view={view}
          karma={karma}
          activate={activate}
          topPosition={topPosition}
          leftPosition={leftPosition}
        />
      )}
    </>
  );
};

export default NavigatedUserCount;
