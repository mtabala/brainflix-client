import UploadForm from "../../components/UploadForm/UploadForm";
import "../UploadPage/UploadPage.scss";
function UploadPage() {
    return (
        <section className="upload">
            <h1 className="upload__header">Upload Video</h1>                
            <UploadForm />
        </section>
    );
}

export default UploadPage;