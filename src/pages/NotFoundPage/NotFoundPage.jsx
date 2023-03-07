import errorPic from "../../assets/Images/404error.jpg";
import "../NotFoundPage/NotFoundPage.scss";

function NotFoundPage() {
    return (
      <div className="error">
        <h1 className="error__header">Oops...Something went wrong! Page not found.</h1>
        <img
          class="error__img"
          src={errorPic}
          alt="page not found"
        />
      </div>
    );
  }
  
  export default NotFoundPage;