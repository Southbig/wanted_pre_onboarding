import React from "react";
import style from "./tab.module.css";
import { useState } from "react";

const Tab = () => {
  const [currentTab, setCurrentTab] = useState(0);

  const dummy = [
    { title: "Tab1", text: "Tab menu ONE" },
    { title: "Tab2", text: "Tab menu TWO" },
    { title: "Tab3", text: "Tab menu THREE" },
  ];

  const selectMenuHandler = (index) => {
    setCurrentTab(index);
  };
  return (
    <div className={style.container}>
      <div className={style.name}>Tab</div>
      <div className={style.tab_container}>
        {dummy.map((el, index) => {
          return (
            <span
              key={index}
              className={style.submenu}
              className={`${currentTab === index ? style.focuse : style.tab}`}
              onClick={() => selectMenuHandler(index)}
            >
              {el.title}
            </span>
          );
        })}
      </div>
      <div className={style.text}>{dummy[currentTab].text}</div>
    </div>
  );
};

export default Tab;
