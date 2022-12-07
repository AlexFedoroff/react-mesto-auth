import loaderImgFailure from '../images/AuthImgFailure.png';
import loaderImgSuccess from '../images/AuthImgSuccess.png';
//import { useEffect } from "react";


function InfoTooltip(props) {                  
  let infoText;
  let loaderImg;
  
  if (props.isRegSuccess) {
    infoText = "Вы успешно зарегистрировались!";
    loaderImg = loaderImgSuccess;
  } 
  else
  {
    infoText = "Что-то пошло не так! Попробуйте еще раз.";
    loaderImg = loaderImgFailure;
  }
/*
  useEffect(() => {
    if (props.isOpen) {
      document.addEventListener("keydown", handleEscClose);
    }
    return () => document.removeEventListener("keydown", handleEscClose);
  }, [props.isOpen]);
  */
  function handleOverlayClick(evt) {
    if (evt.target === evt.currentTarget) {
      props.onClose();
    }
  }
/*
  function handleEscClose(evt) {
    if (evt.key === "Escape") {
      props.onClose();
    }
  }*/

  return (
    <div className={`popup ${props.isOpen && " popup_opened"}`}
      onClick={handleOverlayClick}>
      <div className="popup__container">        
        <img className="popup__auth-res-img" src={loaderImg} alt="Изображение статуса успешности авторизации"/>
        <h2 className="popup__infotext">{infoText}</h2>
        <button className="popup__close-icon"  type="button" onClick={props.onClose}></button>
       </div>
    </div>
 )
}

export default InfoTooltip;
