import "./CommentForm.scss"
import mohanImg from "../../assets/Images/Mohan-muruge.jpg"

function CommentForm () {
    return (    
        <div className="conversation__wrap">
            <div className="conversation__image">
                <img className="conversation__img" src={mohanImg} alt="user avatar" />
            </div>
            <form className="conversation__form">

                <div className="conversation__input-wrap">    
                    <label htmlFor="comment" className="conversation__label">join the conversation</label>
                    <textarea className="conversation__input" id="comment" name="comment" placeholder="Add a new comment"></textarea>
                </div>

                <button className="conversation__btn btn" type="submit" id="submit-comment-btn">Comment</button>
            
            </form>
        </div>            
    )
}
export default CommentForm;