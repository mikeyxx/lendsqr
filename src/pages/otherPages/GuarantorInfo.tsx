import Header from "../../components/Header";
import NoCustomerDataComponent from "../../components/NoCustomerDataComponent";
import Sidebar from "../../components/Sidebar";

const GuarantorInfo = () => {
  return (
    <div className="other-pages-container">
      <Header />
      <div className="other-pages-wrapper">
        <Sidebar />
        <NoCustomerDataComponent text="Add Guarantor Data" />
      </div>
    </div>
  );
};

export default GuarantorInfo;
