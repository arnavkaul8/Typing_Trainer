import React from "react";
import { Link } from "react-router-dom";
import { FaInfo, FaKeyboard, FaGithub, FaLinkedin } from "react-icons/fa";
import { resetTest } from "../helpers/resetTest";
import { useSelector, useDispatch } from "react-redux";
import { setIsCmdLine } from "../store/actions";

function Navbar() {
    const {
        toggle: { isCmdLine },
    } = useSelector((state) => state);
    const dispatch = useDispatch();

    const handleChangeRoute = () => {
        resetTest();
    }

    const handleSetting = () => {
        dispatch(setIsCmdLine(true))
    }

    return (
        <div className="top">
            {/* Logo */}
            <div className="logo">Hello!! Welcome to Typing-Trainer</div>

            {/* Menu */}
            <div className="menu">
                <Link to="/" className="button">
                    <FaKeyboard />
                </Link>
                <Link to="/About" className="button" onClick={handleChangeRoute}>
                    <FaInfo />
                </Link>
                <a href="https://github.com/arnavkaul8" className="button" onClick={handleChangeRoute} target="_blank" rel="noopener noreferrer">
                <FaGithub />
                </a>
                <a href="https://www.linkedin.com/in/arnav-kaul/" className="button" onClick={handleChangeRoute} target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
                </a>

                
            </div>
        </div>
    );
}

export default Navbar;
