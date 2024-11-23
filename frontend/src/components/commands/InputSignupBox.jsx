import React from "react";

const InputSignupBox = ({ title, data, setData }) => {
  const changeHandle = (e) => {
    setData(e.target.value);
  };

  return (
    <div className="fullLine">
      <label htmlFor="password">{title}</label>
      <input
        type="text"
        name={title}
        id={title}
        onChange={changeHandle}
        value={data}
        required
        placeholder=""
        autoComplete="off"
      />
    </div>
  );
};

export default InputSignupBox;
