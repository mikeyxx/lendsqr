import "../styles/noCustomerDataPageStyle.scss";
import { ImSad } from "react-icons/im";

interface Props {
  text: string;
}

const NoCustomerDataComponent = ({ text }: Props) => {
  return (
    <div className="noDataPageContainer">
      <div className="noDataPage-wrapper">
        <p>{text}</p>
        <ImSad className="sad" />
      </div>
    </div>
  );
};

export default NoCustomerDataComponent;
