import UploadImg from "../../assets/Images/Upload-video-preview.jpg";
import UploadForm from "../../components/UploadForm/UploadForm";
import "../UploadPage/UploadPage.scss";
import {Link, useNavigate } from "react-router-dom";
function UploadPage() {
    // const navigate = useNavigate ()
    // const alertUpload = () => {
    //     alert("Thank you for submitting your video")
    //     navigate("/")
    // }
    return (
        <section className="upload">
            <h1 className="upload__header">Upload Video</h1>
                
                    <UploadForm />

                {/* <div className="upload__btns">
                    <button className="btn btn--publish" to="/" onClick={ alertUpload}>publish</button>
                    <Link className="btn btn--cancel" to="/">cancel</Link>
                </div> */}

        </section>
    );
}

export default UploadPage;