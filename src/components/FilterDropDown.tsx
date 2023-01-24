import "../styles/filterDropDownStyle.scss";

interface Props {
  filterTop: number;
  filterLeft: number;
}

const FilterDropDown = ({ filterTop, filterLeft }: Props) => {
  return (
    <div
      style={{
        position: "absolute",
        top: `${filterTop + 40}px`,
        left: `${filterLeft - 150}px`,
      }}
    >
      <div className="filter-wrapper">
        <div className="org field">
          <label htmlFor="" className="label">
            Organization
          </label>
          <select>
            <option>Select</option>
          </select>
        </div>
        <div className="username field">
          <label htmlFor="" className="label">
            Username
          </label>
          <input type="text" placeholder="User" />
        </div>

        <div className="email field">
          <label htmlFor="" className="label">
            Email
          </label>
          <input type="text" placeholder="Email" />
        </div>
        <div className="date field">
          <label htmlFor="" className="label">
            Date
          </label>
          <input type="date" placeholder="Date" />
        </div>
        <div className="phonenumber field">
          <label htmlFor="" className="label">
            Phone Number
          </label>
          <input type="text" placeholder="Phone Number" />
        </div>
        <div className="status field">
          <label htmlFor="" className="label">
            Status
          </label>
          <select>
            <option>Select</option>
          </select>
        </div>
        <div className="go">
          <button className="reset-btn sub light">Reset</button>
          <button className="filter-btn sub filled">Filter</button>
        </div>
      </div>
    </div>
  );
};

export default FilterDropDown;
