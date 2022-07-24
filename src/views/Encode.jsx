import React, { useState, useRef } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { FaCopy } from 'react-icons/fa';
import cipher from '../cipher';

function Encode() {
  const [message, setMessage] = useState('');
  const location = useLocation();
  const inputRef = useRef(null);

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  const { state } = location;

  const user = {
    offset: state,
    msg: message,
  };

  const encodeMessage = cipher.encode(user.offset, user.msg);

  const selectAllText = () => {
    inputRef.current.select();
  };

  return (
    <div className="flex flex-col h-screen w-screen overflow-hidden items-center justify-center bg-stone-800">
      <div className="flex items-center justify-center flex-col bg-teal-900 lg:w-7/12 rounded-2xl shadow-xl lg:p-8 p-3">
        <h1 className="font-monofett lg:text-9xl text-8xl text-[#e2d784] pointer-events-none">CODEME</h1>
        <h2 className="font-jockey text-4xl text-stone-50 text-centerm mb-1">MESSAGE:</h2>
        <input
          className="lg:w-[420px] w-[300px] h-10 bg-gray-100 rounded p-1 mr-3 border focus:outline-none focus:border-yellow-500 font-[arial] text-stone-700 text-lg m-2"
          type="text"
          placeholder="Write message to encode"
          onChange={handleChange}
          value={message}
        />
        <h2 className="font-jockey text-4xl text-stone-50 text-center mb-2 mt-7">ENCODED MESSAGE:</h2>
        <div className="flex flex-row">
          <input disabled value={encodeMessage} className="lg:w-[370px] w-[250px] h-10 rounded-l-lg p-2 border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white" type="textbox" ref={inputRef} />
          <button
            className="lg:w-[50px] w-[50px] h-10 px-4 rounded-r-lg bg-[#e2d784] text-gray-800 font-bold border-[#e2d784]"
            type="button"
            onClick={() => {
              selectAllText();
              navigator.clipboard.writeText(encodeMessage);
            }}
          >
            <FaCopy className="text-gray-700 text-left text-xl" />
          </button>
        </div>
        <Link to="/home">
          <button className="bg-[#e2d784] text-stone-800 font-monofett text-3xl rounded-2xl p-3 shadow-xl m-3" type="button">GO BACK</button>
        </Link>
      </div>
    </div>
  );
}

export default Encode;
