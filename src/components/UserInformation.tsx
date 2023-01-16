import back from "../assets/back.svg";
import filledStar from "../assets/filled-star.svg";
import unfilledStar from "../assets/unfilled-star.svg";
import "../styles/details.scss";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { DataContext } from "../App";
import { Users } from "./UserData";

interface Props {
  saved: Users;
}

const UserInformation = ({ saved }: Props) => {
  const { menu } = useContext(DataContext);
  const navigate = useNavigate();

  const navigateBack = () => {
    navigate("/");
  };

  return (
    <div className={`user-info-wrapper ${!menu ? "up" : ""}`}>
      <header>
        <div className="back-wrap">
          <div className="go-back" onClick={navigateBack}>
            <img src={back} alt="" />
            <span>Back to Users</span>
          </div>
          <div className="head">
            <h2>User Details</h2>
            <div className="user-action">
              <button className="blacklist-btn light active">
                Blacklist User
              </button>
              <button className="activate-btn light active">
                Activate User
              </button>
            </div>
          </div>
        </div>
        <div className="info-container">
          <div className="user-info-menu">
            <div className="name">
              <div className="pic">
                <img src={saved?.profile?.avatar} alt="" />
              </div>
              <div>
                <h4>
                  {saved?.profile?.firstName} {saved?.profile?.lastName}
                </h4>
                <span>{saved?.profile?.bvn}</span>
              </div>
            </div>
            <span className="divide"></span>
            <div className="tier-info">
              <h5>User's Tier</h5>
              <img src={filledStar} alt="" />
              <img src={unfilledStar} alt="" />
              <img src={unfilledStar} alt="" />
            </div>
            <span className="divide"></span>

            <div className="account-balance">
              <h5 className="amount">₦{saved?.accountBalance}</h5>
              <small>{saved?.accountNumber}/Providus Bank</small>
            </div>
          </div>
          <nav className="details-menu">
            <select className="select-item-display">
              <option>General Details</option>
              <option>Documents</option>
              <option>Bank Details</option>
              <option>Loans</option>
              <option>Savings</option>
              <option>App and System</option>
            </select>
            <ul className="details-menu-list">
              <li className="details-list">General Details</li>
              <li className="details-list">Documents</li>
              <li className="details-list">Bank Details</li>
              <li className="details-list">Loans</li>
              <li className="details-list">Savings</li>
              <li className="details-list">App and System</li>
            </ul>
          </nav>
        </div>
      </header>

      <section className="increase">
        <div className="section-one categories">
          <h4>Personal Information</h4>
          {/* Only display on small screen */}
          <div className="section-one-container">
            <div className="section-one-wrapper-first">
              <div className="inner-p">
                <h6>Full Name</h6>
                <span>
                  {saved?.profile?.firstName} {saved?.profile?.lastName}
                </span>
              </div>
              <div className="inner-p">
                <h6>Phone Number</h6>
                <span>{saved?.profile?.phoneNumber}</span>
              </div>
              <div className="inner-p">
                <h6>Email Address</h6>
                <span>{saved?.email}</span>
              </div>
              <div className="inner-p">
                <h6>BVN</h6>
                <span>{saved?.profile?.bvn}</span>
              </div>
              <div className="inner-p">
                <h6>Gender</h6>
                <h6>{saved?.profile?.gender}</h6>
              </div>
            </div>

            <div className="section-one-wrapper-second">
              <div className="inner-p m-stats">
                <h6>Marital Status</h6>
                <span>Single</span>
              </div>
              <div className="inner-p no-child">
                <h6>Children</h6>
                <span>N/A</span>
              </div>
              <div className="inner-p residence">
                <h6>Type of Residence</h6>
                <span>N/A</span>
              </div>
            </div>
          </div>
        </div>

        <hr />
        <div className="section-two categories">
          <h4>Education and Employment</h4>
          <div className="section-one-container">
            <div className="section-one-wrapper-first">
              <div className="inner-ee">
                <h6>Level of Education</h6>
                <span>{saved?.education?.level}</span>
              </div>
              <div className="inner-ee">
                <h6>Employment Status</h6>
                <span>{saved?.education?.employmentStatus}</span>
              </div>
              <div className="inner-ee">
                <h6>Sector of Employment</h6>
                <span>{saved?.education?.sector}</span>
              </div>
              <div className="inner-ee">
                <h6>Duration of Employment</h6>
                <span>{saved?.education?.duration}</span>
              </div>
            </div>

            <div className="section-one-wrapper-second">
              <div className="inner-ee">
                <h6>Office Email</h6>
                <span>{saved?.education?.officeEmail}</span>
              </div>
              <div className="inner-ee income">
                <h6>Monthly Income</h6>
                <span>₦{saved?.education?.monthlyIncome}</span>
              </div>
              <div className="inner-ee loan">
                <h6>Loan Repayment</h6>
                <span>₦{saved?.education?.loanRepayment}</span>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="socials categories">
          <h4>Social</h4>
          <div className="small-screen">
            <div className="inner-s">
              <h6>Twitter</h6>
              <span>{saved?.socials?.twitter}</span>
            </div>
            <div className="inner-s fb">
              <h6>Facebook</h6>
              <span>{saved?.socials?.facebook}</span>
            </div>
            <div className="inner-s ig">
              <h6>Instagram</h6>
              <span>{saved?.socials?.instagram}</span>
            </div>
          </div>
        </div>
        <hr />
        <div className="guarantor categories">
          <h4>Guarantor</h4>
          <div className="small-screen">
            <div className="inner-g">
              <h6>Full Name</h6>
              <span>
                {saved?.guarantor?.firstName} {saved?.guarantor?.lastName}
              </span>
            </div>
            <div className="inner-g phone">
              <h6>Phone Number</h6>
              <span>{saved?.guarantor?.phoneNumber}</span>
            </div>
            <div className="inner-g g-email">
              <h6>Email Address</h6>
              <span>N/A</span>
            </div>
            <div className="inner-g fam">
              <h6>Relationship</h6>
              <span>N/A</span>
            </div>
          </div>
        </div>
        <hr />
      </section>
    </div>
  );
};

export default UserInformation;
