import React from "react";
import style from "./clickToEdit.module.css";
import { useEffect, useState, useRef } from "react";

export const Info = ({ value, handleValueChange }) => {
  const DomInfo = useRef(null);
  const [isEdit, setEdit] = useState(false);
  const [newValue, setNewValue] = useState(value);

  useEffect(() => {
    if (isEdit) {
      DomInfo.current.focus();
    }
  }, [isEdit]);

  const handleClick = () => {
    setEdit(!isEdit);
  };

  const handleBlur = () => {
    setEdit(false);
    handleValueChange(newValue);
  };

  const handleInputChange = (e) => {
    setNewValue(e.target.value);
  };
  return (
    <div className={style.info_container}>
      {isEdit ? (
        <input
          className={style.info_input}
          type="text"
          value={newValue}
          ref={DomInfo}
          onBlur={handleBlur}
          onChange={handleInputChange}
        />
      ) : (
        <span onClick={handleClick}>{newValue}</span>
      )}
    </div>
  );
};

const ClickToEdit = () => {
  const [name, setName] = useState("이름을 써주세요");
  const [age, setAge] = useState("나이를 써주세요");
  return (
    <div className={style.container}>
      <div className={style.name}>ClickToEdit</div>
      <div className={style.edit_container}>
        <label>이름</label>
        <Info
          value={name}
          handleValueChange={(newValue) => setName(newValue)}
        />
      </div>
      <div className={style.edit_container}>
        <label>나이</label>
        <Info value={age} handleValueChange={(newValue) => setAge(newValue)} />
      </div>
      <div className={style.edit_container}>
        <div className={style.text}>
          이름 <div className={style.text_name}> {name}</div>
          나이 <div className={style.text_age}> {age}</div>
        </div>
      </div>
    </div>
  );
};

export default ClickToEdit;
