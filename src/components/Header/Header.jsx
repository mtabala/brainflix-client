import "./Header.scss"
import logo from "../../assets/Logo/BrainFlix-logo.svg"
import mohanImg from "../../assets/Images/Mohan-muruge.jpg"

function Header () {
    return (
        <header className="header">
            <a className="header__logo" href="../../public/index.html">
                <img className="header__logo-img" src={logo} alt="logo mohan" />
            </a>

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

                <a className="btn btn--header" href="../../public/index.html"> upload </a>
            </form>
        </header>
    )
}
export default Header;