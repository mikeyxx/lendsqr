import "../styles/noCustomerDataPageStyle.scss";
import { ImSad } from "react-icons/im";

const NoCustomerDataComponent = () => {
  return (
    <div className="noDataPageContainer">
      <div className="noDataPage-wrapper">
        <p>Add Customer Data</p>
        <ImSad className="sad" />
      </div>
    </div>
  );
};

export default NoCustomerDataComponent;
