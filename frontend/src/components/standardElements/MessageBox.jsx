import React from 'react';

const MessageBox = ({messageInfo, setMessageInfo}) => {

  const messageHandle = () => {setMessageInfo("")}

  return (
    <div className='messageContainer'>
      <div className='fullLine'>
        <h3>MESSAGE D'INFORMATION</h3>
        <span
          className="fa-solid fa-square-xmark"
          style={{ color: "red", cursor: "pointer" }}
          onClick={messageHandle}
        />
      </div>
      {messageInfo}
    </div>
  );
}

export default MessageBox;
