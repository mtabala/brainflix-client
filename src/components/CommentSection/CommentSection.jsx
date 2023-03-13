import "./CommentSection.scss"
import CommentForm from "../CommentForm/CommentForm";
import Comment from "../Comment/Comment";

function CommentSection({ selectedVideo, getVideo }) {
    return (
        <section className="conversation">
            <h5 className="conversation__header">{selectedVideo.comments.length} Comments</h5>
            <CommentForm getVideo={getVideo} />
            <ul className="conversation__list">
                <Comment selectedVideo={selectedVideo} />
            </ul>
        </section>

    );
}
export default CommentSection;