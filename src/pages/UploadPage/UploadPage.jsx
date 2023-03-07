import UploadImg from "../../assets/Images/Upload-video-preview.jpg";
import UploadForm from "../../components/UploadForm/UploadForm";

function UploadPage() {

    return (
        <section className="upload">
            <h1 className="upload__header">Upload Video</h1>

            <div className="upload__container">
                <div className="upload__wrap">
                    <p className="upload__title">video thumbnail</p>
                    <img className="upload__img" src={UploadImg} alt="thumbnail img"/>
                </div>
                <UploadForm />
            </div>

        </section>
    );
}

export default UploadPage;