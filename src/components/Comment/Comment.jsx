import "./Comment.scss"
import {timeConverter} from "../../Utilities/utilities";

function Comment ({selectedVideo}) {
    return (
        <>
        {selectedVideo.comments
        .map((comment) => (
            <li className="conversation__item" key={comment.id}>
                <div className="conversation__img"></div>
                <div className="conversation__comment">
                    <div className="conversation__comment-header">
                        <p className="conversation__name">{comment.name}</p>
                        <p className="conversation__date">{timeConverter(comment.timestamp)}</p>
                    </div>
                    <p className="conversation__comment-text">{comment.comment}</p>
                </div>
            </li>
        )) }
        </>
    )
}
export default Comment;