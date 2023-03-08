import UploadImg from "../../assets/Images/Upload-video-preview.jpg";
import UploadForm from "../../components/UploadForm/UploadForm";
import "../UploadPage/UploadPage.scss";
import { Link } from "react-router-dom";

function UploadPage() {

    return (
        <section className="upload">
            <h1 className="upload__header">Upload Video</h1>

            <article className="upload__container">
                <div className="upload__wrap">
                    <div className="upload__thumbnail">
                        <p className="upload__title">video thumbnail</p>
                        <img className="upload__img" src={UploadImg} alt="thumbnail img"/>
                    </div>
                    <UploadForm />
                </div>

                <div className="upload__btns">
                    <Link className="btn btn--publish" to="/">publish</Link>
                    <Link className="btn btn--cancel" to="/">cancel</Link>
                </div>
            </article>

        </section>
    );
}

export default UploadPage;