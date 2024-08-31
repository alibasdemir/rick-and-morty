import "./filter.css";

/* eslint-disable react/prop-types */
function Filter({
  statusFilter,
  genderFilter,
  onStatusChange,
  onGenderChange,
}) {
  return (
    <div className="filter-container">
      <div className="checkbox-wrapper-27">
        <h6>Status:</h6>
        {["alive", "dead", "unknown"].map((status) => (
          <label key={status} className="checkbox">
            <input
              type="checkbox"
              value={status}
              checked={statusFilter === status}
              onChange={() => onStatusChange(status)}
            />
            <span className="checkbox__icon"></span>
            {status.charAt(0).toUpperCase() + status.slice(1)}
          </label>
        ))}
      </div>
      <div className="checkbox-wrapper-27">
        <h6>Gender:</h6>
        {["female", "male", "genderless", "unknown"].map((gender) => (
          <label key={gender} className="checkbox">
            <input
              type="checkbox"
              value={gender}
              checked={genderFilter === gender}
              onChange={() => onGenderChange(gender)}
            />
            <span className="checkbox__icon"></span>
            {gender.charAt(0).toUpperCase() + gender.slice(1)}
          </label>
        ))}
      </div>
    </div>
  );
}

export default Filter;
