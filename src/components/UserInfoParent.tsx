import axios from "axios";
import { useContext, useEffect } from "react";
import { DataContext } from "../App";
import UserInformation from "../components/UserInformation";
import { useParams } from "react-router-dom";

const UserInfoParent = () => {
  const { menu, userData, setUserData, savedData, setSavedData } =
    useContext(DataContext);
  const { id } = useParams();

  const fetchData = async () => {
    try {
      const info = await axios.get(
        `https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/${id}`
      );
      const res = await info.data;
      setUserData(res);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const retrievedData = localStorage.getItem("items");
  useEffect(() => {
    if (retrievedData) {
      setSavedData([JSON.parse(retrievedData)]);
    }
  }, [userData]);

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(userData));
  }, [userData]);

  return (
    <>
      {savedData?.map((saved) => (
        <UserInformation key={saved?.id} saved={saved} />
      ))}
    </>
  );
};

export default UserInfoParent;
