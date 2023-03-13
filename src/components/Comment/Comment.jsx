import "./Comment.scss"
import { timeConverter } from "../../Utilities/utilities";

function Comment({ selectedVideo }) {
    return (
        <>
            {selectedVideo.comments
                .map((comment) => (
                    <li className="conversation__item" key={comment.id}>
                        <div className="conversation__img"></div>
                        <div className="conversation__comment">
                            <div className="conversation__comment-header">
                                <p className="conversation__comment-name">{comment.name}</p>
                                <p className="conversation__comment-date tooltip">{timeConverter(comment.timestamp)}
                                    <span className="tooltiptext">
                                        {new Date(comment.timestamp).toLocaleDateString("en-US", { year: "numeric", month: "2-digit", day: "2-digit" })}
                                    </span>
                                </p>
                            </div>
                            <p className="conversation__comment-text">{comment.comment}</p>
                        </div>
                    </li>
                ))}
        </>
    )
}
export default Comment;