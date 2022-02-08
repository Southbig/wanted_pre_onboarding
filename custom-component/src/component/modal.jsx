import React from "react";
import style from "./modal.module.css";
import { useState } from "react";

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openModalHandler = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className={style.container}>
      <div className={style.name}>Modal</div>
      <div className={style.modal_Btn} onClick={openModalHandler}>
        {isOpen === false ? "Open Modal" : ""}
      </div>
      {isOpen ? (
        <div className={style.modal_window} onClick={openModalHandler}>
          <div className={style.ModalView} onClick={(e) => e.stopPropagation()}>
            <div className={style.close_btn} onClick={openModalHandler}>
              &times;
            </div>
            <div className={style.text}>HELLO CODESTATES!</div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Modal;
