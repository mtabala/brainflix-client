import "./Comment.scss"

function Comment () {
    return (
        <ul className="conversation__list">
            <li className="conversation__item">
                    <div className="conversation__img"></div>
                    <div className="conversation__comment">
                        <div className="conversation__comment-header">
                            <p className="conversation__name">Micheal Lyons</p>
                            <p className="conversation__date">08/09/2021</p>
                        </div>
                        <p className="conversation__comment-text">They BLEW the ROOF off at their last
                            event, once everyone started figuring
                            out they were going. This is still simply
                            the greatest opening of an event I have
                            EVER witnessed.</p>
                    </div>
                </li>

                <li className="conversation__item">
                    <div className="conversation__img"></div>
                    <div className="conversation__comment">
                        <div className="conversation__comment-header">
                            <p className="conversation__name">Gary Wong</p>
                            <p className="conversation__date">07/15/2021</p>
                        </div>
                        <p className="conversation__comment-text">Every time I see him shred I feel so
                            motivated to get off my couch and hop
                            on my board. He’s so talented! I wish I
                            can ride like him one day so I can really
                            enjoy myself!
                        </p>
                    </div>
                </li>

                <li className="conversation__item">
                    <div className="conversation__img"></div>
                    <div className="conversation__comment">
                        <div className="conversation__comment-header">
                            <p className="conversation__name">Theodore Duncan</p>
                            <p className="conversation__date">07/11/2021</p>
                        </div>
                        <p className="conversation__comment-text">How can someone be so good!!! You
                            can tell he lives for this and loves to do
                            it every day. Everytime I see him I feel
                            instantly happy! He’s definitely my
                            favorite ever!
                        </p>
                    </div>
                </li>
        </ul>
    )
}
export default Comment;