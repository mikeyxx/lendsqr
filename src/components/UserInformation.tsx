import back from "../assets/back.svg";
import placeholder from "../assets/placeholder.svg";
import filledStar from "../assets/filled-star.svg";
import unfilledStar from "../assets/unfilled-star.svg";

const UserInformation = () => {
  return (
    <div className="user-info-container">
      <div className="user-info-wrapper">
        <header>
          <div className="go-back">
            <img src={back} alt="" />
            <span>Back to Users</span>
          </div>
          <div className="head">
            <h2>User Details</h2>
            <div className="user-action">
              <button className="action-btn light">Blacklist User</button>
              <button className="action-btn filled">Activate User</button>
            </div>
          </div>
          <div className="user-info-menu">
            <div className="name">
              <div className="pic">
                <img src={placeholder} alt="" />
              </div>
              <h4>Grace Effiom</h4>
              <span>LSQFf5B7g90</span>
            </div>
            <div className="tier-info">
              <h5>User's Tier</h5>
              <img src={filledStar} alt="" />
              <img src={unfilledStar} alt="" />
              <img src={unfilledStar} alt="" />
            </div>
            <div className="account-balance">
              <h5 className="amount">#200,000.00</h5>
              <small>7868764378/Providus Bank</small>
            </div>
          </div>
          <nav>
            <ul>
              <li>General Details</li>
              <li>Documents</li>
              <li>Bank Details</li>
              <li>Loans</li>
              <li>Savings</li>
              <li>App and System</li>
            </ul>
          </nav>
        </header>

        <section>
          <div className="section-one">
            <h4>Personal Information</h4>
            <table>
              <thead>
                <tr>
                  <th>Full Name</th>
                  <th>Phone Number</th>
                  <th>Email Address</th>
                  <th>BVN</th>
                  <th>Gender</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Grace Effiom</td>
                  <td>07060780922</td>
                  <td>grace@gmail.com</td>
                  <td>223787632395</td>
                  <td>Female</td>
                </tr>
              </tbody>
              <thead>
                <tr>
                  <th>Marital Status</th>
                  <th>Children</th>
                  <th>Type of Residence</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Single</td>
                  <td>None</td>
                  <td>Parent's Apartment</td>
                </tr>
              </tbody>
            </table>
          </div>
          <hr />
          <div className="section-two">
            <h4>Education and Employment</h4>
            <table>
              <thead>
                <tr>
                  <th>Level of Education</th>
                  <th>Employment Status</th>
                  <th>Sector of Employment</th>
                  <th>Duration of Employment</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>B.Sc</td>
                  <td>Employed</td>
                  <td>FinTech</td>
                  <td>2 years</td>
                </tr>
              </tbody>
              <thead>
                <tr>
                  <th>Office Email</th>
                  <th>Monthly Income</th>
                  <th>Loan Repayment</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>grace@lendsqr.com</td>
                  <td>#200,000.00 - #400,00.00</td>
                  <td>40,000</td>
                </tr>
              </tbody>
            </table>
          </div>
          <hr />
          <div className="socials">
            <h4>Social</h4>
            <table>
              <thead>
                <tr>
                  <th>Twitter</th>
                  <th>Facebook</th>
                  <th>Instagram</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>@grace_effiom</td>
                  <td>Grace Effiom</td>
                  <td>@grace_effiom</td>
                </tr>
              </tbody>
            </table>
          </div>
          <hr />
          <div className="guarantor">
            <h4>Guarantor</h4>
            <table>
              <thead>
                <tr>
                  <th>Full Name</th>
                  <th>Phone Number</th>
                  <th>Email Address</th>
                  <th>Relationship</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Debby Ogana</td>
                  <td>07060780922</td>
                  <td>debby@gmail.com</td>
                  <td>Sister</td>
                </tr>
              </tbody>
            </table>
          </div>
          <hr />
          <div className="untitled">
            <h4>Untitled</h4>
            <table>
              <thead>
                <tr>
                  <th>Full Name</th>
                  <th>Phone Number</th>
                  <th>Email Address</th>
                  <th>Relationship</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Debby Ogana</td>
                  <td>07060780922</td>
                  <td>debby@gmail.com</td>
                  <td>Sister</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
};

export default UserInformation;
