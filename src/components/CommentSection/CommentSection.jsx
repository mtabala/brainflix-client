import "./CommentSection.scss"
import CommentForm from "../CommentForm/CommentForm";
import Comment from "../Comment/Comment";

function CommentSection ({selectedVideo}) {
    return (
        <section className="conversation">
            <h5 className="conversation__header">3 Comments</h5>
            <CommentForm />
            <ul className="conversation__list">
                <Comment selectedVideo={selectedVideo}/>
            </ul>
        </section>

    );
}
export default CommentSection;