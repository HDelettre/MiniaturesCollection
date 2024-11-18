import React, { useState } from 'react';

const InputBox = ({title, setGeneralData, generalData}) => {

  const [data, setData] = useState(generalData)

  const changeHandle = (e) => {
    setData(e.target.value)
    setGeneralData(e.target.value)
  }
  
  return (
    <div className="fullLine">
      <div className="labelBox">{title}</div>
      <input type='text' name='inputBox' className="labelBox" value={data} onChange={changeHandle} />
    </div>
  );
}

export default InputBox;
