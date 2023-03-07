import "../UploadForm/UploadForm.scss";

function UploadForm() {

    return (
        <form className="upload__form">
            <label htmlFor="title" className="upload__label-title">title your video</label>
            <input id="title" className="upload__input-title" placeholder="Add a title to your video"></input>

            <label htmlFor="description" className="upload__label-description">add a video description</label>
            <textarea id="description" className="upload__input-description" placeholder="Add a description to your video"></textarea>
        </form>
    );
}

export default UploadForm;