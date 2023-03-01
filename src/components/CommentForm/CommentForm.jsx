import "./CommentForm.scss"
import mohanImg from "../../assets/Images/Mohan-muruge.jpg"

function CommentForm () {
    return (    
        <div class="conversation__wrap">
            <div class="conversation__image">
                <img class="conversation__img" src={mohanImg} alt="user avatar" />
            </div>
            <form class="conversation__form">
                <label for="comment" class="conversation__label">join the conversation</label>
                <textarea class="conversation__input" id="comment" name="comment" placeholder="Add a new comment"></textarea>
                <button class="conversation__btn" type="submit" id="submit-comment-btn">Comment</button>
            </form>
        </div>            
    )
}
export default CommentForm;