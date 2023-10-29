import React from "react";
import "./navbar.css";
import mars from "../../assets/img/Mars.svg"
import { useDispatch } from "react-redux";
import { setPopupDisplay } from "../../reducers/appReducer";

const NavBar = () => {
    const dispatch = useDispatch();

    function showPopupHandler() {
        dispatch(setPopupDisplay("flex"));
    } 


    return (
        <div className="navbar">
            <div className="container">
                <div className="navbar-logo">
                    <img src={mars} alt="" />            
                </div>
                <div className="navbar-header">
                    <div className="navbar-1">О МАРСЕ</div>
                    <div className="navbar-2">ПРОЦЕСС</div>
                    <div className="navbar-3">БИЛЕТЫ</div>
                    <div className="navbar-4">НОВОСТИ</div>
                    <div className="navbar-5">КОНТАКТЫ</div>
                    <button className="navbar-btn" onClick={() => showPopupHandler()}>КУПИТЬ БИЛЕТЫ</button>
                </div>
            </div>
        </div>
    );
}

export default NavBar;
