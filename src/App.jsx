import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import "./app.css";
import NavBar from "./components/navbar/NavBar";
import Popup from "./components/Popup";

const App = () => {
    
    return (
        <BrowserRouter>
            <div className="app">
                <NavBar/>
                <Popup/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
