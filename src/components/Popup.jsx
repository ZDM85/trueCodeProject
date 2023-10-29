import React from "react";
import "./home.css";
import { useDispatch, useSelector } from "react-redux";
import { setPopupDisplay } from "../reducers/appReducer";

const Popup = () => {
    const dispatch = useDispatch();
    const popupDisplay = useSelector(state => state.app.popupDisplay);

    return (
        <div className="popup" style={{display: popupDisplay}} onClick={(e) => e.stopPropagation()}>
            <div className="popup-content">
                <div className="popup-header">
                    <div className="popup-title">БРОНИРОВАНИЕ БИЛЕТОВ</div>
                    <div className="popup-btn">
                        <button className="popup-close" onClick={() => dispatch(setPopupDisplay("none"))}>X</button>
                    </div>
                </div>
                <div className="popup-columns">
                    <div className="popup-col_1">
                        <label htmlFor="popup-in">Дата заезда</label>
                        <input id="popup-in" type="text" placeholder="13.05.2022" className="popup-in"/>
                    </div>
                    <div className="popup-col_2">
                        <label htmlFor="popup-out">Дата выезда</label>
                        <input id="popup-out" type="text" placeholder="13.05.2022" className="popup-out"/>
                    </div>
                    <div className="popup-col_3">
                    <label htmlFor="popup-humans">Количество</label>
                        <input id="popup-humans" type="text" placeholder="1 человек" className="popup-humans"/>
                    </div>
                </div>
                <button className="popup-create">КУПИТЬ БИЛЕТЫ</button>
            </div>
        </div>
    );
}

export default Popup;
