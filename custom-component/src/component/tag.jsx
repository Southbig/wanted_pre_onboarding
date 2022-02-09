import React from "react";
import style from "./tag.module.css";
import { useState } from "react";

const Tag = () => {
  const tag = ["CodeStates", "JJang"];

  const [tags, setTags] = useState(tag);
  const removeTags = (remove) => {
    setTags(tags.filter((_, idx) => idx !== remove));
  };

  const addTags = (item) => {
    const checked = tags.filter((el) => el === item.target.value);
    if (item.target.value !== "" && checked.length === 0) {
      setTags([...tags, item.target.value]);
      item.target.value = "";
    }
  };
  return (
    <>
      <div className={style.container}>
        <div className={style.name}>Tag</div>
        <div className={style.tag_container}>
          <div className={style.tags}>
            {tags.map((tag, index) => (
              <div key={index} className={style.tag}>
                <span className={style.tag_title}>{tag}</span>
                <span
                  className={style.tag_close}
                  onClick={() => removeTags(index)}
                >
                  &times;
                </span>
              </div>
            ))}
          </div>
          <input
            className={style.tag_input}
            type="text"
            onKeyUp={(el) => (el.key === "Enter" ? addTags(el) : null)}
            placeholder="Press enter to add tags"
          />
        </div>
      </div>
    </>
  );
};

export default Tag;
