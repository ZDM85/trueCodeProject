import React from "react";
import "./home.css";
import file1 from "../assets/img/Group 1.png";
import file2 from "../assets/img/Group 2.svg";

const Home = () => {

    return (
        <div className="home">
            <img src={file2} alt="" className="home-progress"/>
            <div className="home-header">
                <h3 className="home-name">ТОЧКА НАЗНАЧЕНИЯ:</h3>
                <img src={file1} alt="" className="home-mars"/>
            </div>
        </div>
    );
}

export default Home;
