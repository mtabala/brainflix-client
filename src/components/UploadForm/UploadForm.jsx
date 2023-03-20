import UploadImg from "../../assets/Images/Upload-video-preview.jpg";
import "../UploadForm/UploadForm.scss";
import { Link, useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
import axios from "axios";

function UploadForm() {
    const formUseRef = useRef();
    const navigate = useNavigate()
    const [titleError, setTitleError] = useState('');

    // Defining a function to handle the form submission
    const handleSubmit = (event) => {
        event.preventDefault();

        const form = formUseRef.current;
        const title = form.title;
        const description = form.description;

        // Adding form validation by checking that the title and description fields are not empty
        if (title.value === "" || description.value === "") {
            setTitleError("invalid");

            setTimeout(() => {
                alert("Please fill in all the fields");
            }, 300);
            return;
        } else {
            axios
                .post("http://localhost:9090/videos", {
                    title: title.value,
                    description: description.value,
                })
                .then((response) => {
                    alert("Thank you for submitting your video");
                    navigate("/");
                })
                .catch((error) => {
                    console.log("error: ", error);
                })

        }
    }

    return (
        <>
            <form className="upload__form" onSubmit={handleSubmit} ref={formUseRef}>
                <div className="upload__form-wrapper">
                    <div className="upload__thumbnail">
                        <p className="upload__title">video thumbnail</p>
                        <img className="upload__img" src={UploadImg} alt="thumbnail img" />
                    </div>

                    <div className="upload__wrapper">
                        <label htmlFor="title" className="upload__label">title your video</label>
                        <input id="title" name="title" className={`upload__input ${titleError}`} placeholder="Add a title to your video"></input>
                        <label htmlFor="description" className="upload__label">  add a video description</label>
                        <textarea id="description" name="description" className={`upload__input upload__input--description ${titleError}`} placeholder="Add a description to your video"></textarea>
                    </div>
                </div>

                <div className="upload__form-btns">
                    <button className="btn btn--publish" >publish</button>
                    <Link className="btn btn--cancel" to="/">cancel</Link>
                </div>
            </form>
        </>
    );
}

export default UploadForm;
