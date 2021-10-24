import React, { useState } from "react";

const card = (props) => {
  const [counterA, setCounterA] = useState(0);
  const [counterB, setCounterB] = useState(0);

  return (
    <>
      <div className="cards">
        <div className="card">
          <img src={props.imgsrc} alt="ITS A MOVIE" className="card_img" />
          <div className="card_info">
            <span className="card_category">{props.title} </span>
            <h2 className="card_title">{props.sname}</h2>
            <button
              className={counterA % 2 === 0 ? "unlike" : "like"}
              onClick={() => {
                setCounterA(counterA + 1);
              }}
            >
              ❤
            </button>
            <button
              className={counterB % 2 === 0 ? "unwatch" : "watch"}
              onClick={() => {
                setCounterB(counterB + 1);
              }}
            >
              <span>👁️</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default card;
