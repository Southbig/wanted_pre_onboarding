import React from "react";
import style from "./tab.module.css";
import { useState } from "react";

const Tab = () => {
  const [currentTab, setCurrentTab] = useState(0);

  const menuArr = [
    { name: "Tab1", text: "Tab menu ONE" },
    { name: "Tab2", text: "Tab menu TWO" },
    { name: "Tab3", text: "Tab menu THREE" },
  ];

  const selectMenuHandler = (index) => {
    setCurrentTab(index);
  };
  return (
    <div className={style.container}>
      <div className={style.name}>Tab</div>
      <div className={style.tab_container}>
        {menuArr.map((el, index) => {
          return (
            <span
              key={index}
              className={style.submenu}
              className={`${currentTab === index ? style.focuse : style.tab}`}
              onClick={() => selectMenuHandler(index)}
            >
              {el.name}
            </span>
          );
        })}
      </div>
      <div className={style.text}>{menuArr[currentTab].text}</div>
    </div>
  );
};

export default Tab;
