import { NavLink } from "react-router-dom";
import "./Header.scss"
import logo from "../../assets/Logo/BrainFlix-logo.svg"
import mohanImg from "../../assets/Images/Mohan-muruge.jpg"

function Header() {
    return (
        <header className="header">
            <NavLink className="header__logo" to="/">
                <img className="header__logo-img" src={logo} alt="logo mohan" />
            </NavLink>

            <form className="header__form">
                <input
                    type="text"
                    className="header__input"
                    placeholder="Search"
                    name="input"
                />

                <img className="header__img"
                    src={mohanImg}
                    alt="user avatar"
                />

                <NavLink className="btn btn--header" to="/upload">
                    upload
                </NavLink>
            </form>
        </header>
    )
}
export default Header;