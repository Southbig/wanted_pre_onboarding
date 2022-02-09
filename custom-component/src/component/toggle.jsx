import React from "react";
import style from "./toggle.module.css";
import { useState } from "react";

const Toggle = () => {
  const [isOn, setisOn] = useState(false);

  const toggleHandler = () => {
    setisOn(!isOn);
  };
  return (
    <div className={style.toggle_container}>
      <div className={style.name}>Toggle</div>
      <div className={style.toggleContainer}>
        {!isOn ? (
          <div
            onClick={toggleHandler}
            className={style.toggleCircle__checked}
          />
        ) : (
          <div
            onClick={toggleHandler}
            className={style.toggleCircle__unchecked}
          />
        )}
        {!isOn ? (
          <div onClick={toggleHandler} className={style.toggleBox__checked} />
        ) : (
          <div onClick={toggleHandler} className={style.toggleBox__unchecked} />
        )}
      </div>
      <div className={style.toggle_text}>
        {!isOn ? <span>Toggle Switch On</span> : <span>Toggle Switch Off</span>}
      </div>
    </div>
  );
};

export default Toggle;
