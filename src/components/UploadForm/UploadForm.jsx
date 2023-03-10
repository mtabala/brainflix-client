import UploadImg from "../../assets/Images/Upload-video-preview.jpg";
import "../UploadForm/UploadForm.scss";
import {Link, useNavigate } from "react-router-dom";

function UploadForm() {
    const navigate = useNavigate ()
        const alertUpload = () => {
        alert("Thank you for submitting your video")
        navigate("/")
    }

    return (
        <>
        <form className="upload__form">
            <div className="upload__form-wrapper">
                <div className="upload__thumbnail">
                    <p className="upload__title">video thumbnail</p>
                    <img className="upload__img" src={UploadImg} alt="thumbnail img"/>
                </div>
                
                <div className="upload__wrapper">
                    <label htmlFor="title" className="upload__label">title your video</label>
                    <input id="title" className="upload__input" placeholder="Add a title to your video"></input>
                    <label htmlFor="description" className="upload__label">add a video description</label>
                    <textarea id="description" className="upload__input upload__input--description" placeholder="Add a description to your video"></textarea>
                </div>
            </div>

            <div className="upload__btns">
                <button className="btn btn--publish" to="/" onClick={ alertUpload}>publish</button>
                <Link className="btn btn--cancel" to="/">cancel</Link>
            </div>      
        </form>
        </>
    );
}

export default UploadForm;