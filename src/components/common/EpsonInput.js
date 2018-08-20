import React from "react";

const EpssInput = ({
  name,
  label,
  value,
  inputType,
  onChange,
  autoFocus,
  error
}) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        value={value}
        onChange={onChange}
        id={name}
        name={name}
        type={inputType}
        className="form-control"
        error={error}
      />
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default EpssInput;
