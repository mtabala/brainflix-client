import "./CommentSection.scss"
import CommentForm from "../CommentForm/CommentForm";
import Comment from "../Comment/Comment";

function CommentSection () {
    return (
        <section className="conversation">
            <h5 className="conversation__header">3 Comments</h5>
            <CommentForm />
            <Comment />
        </section>

    );
}
export default CommentSection;