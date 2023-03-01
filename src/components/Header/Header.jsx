import "./Header.scss"
import logo from "../../assets/Logo/BrainFlix-logo.svg"
import mohanImg from "../../assets/Images/Mohan-muruge.jpg"

function Header () {
    return (
        <>
        <header className="header">
            <a className="header__logo">
                <img className="header__logo-img" src={logo} alt="logo" />
            </a>

            <form className="header__wrap">
                <textarea
                    className="header__input"
                    placeholder="Search"
                    name="input"
                ></textarea>
                
                <img className="header__img"
                    src={mohanImg}
                    alt="user image"
                />

                <button className="header__btn"> upload </button>
            </form>
            {/* <button className="header__btn"> upload </button> */}
        </header>
        </>
    )
}
export default Header;