import './AsideVideoCard.scss';
import { Link } from "react-router-dom";

function AsideVideoCard({ id, image, title, channel }) {

    function handleVideoClick() {
        window.scrollTo(0, 0);
    }

    return (
        <li className="videos__item">
            <Link to={`/videos/${id}`} onClick={() => handleVideoClick()} className="videos__item-link">
                <img className="videos__item-img" src={image} alt="video thumbnail" />
                <div className="videos__item-text">
                    <p className="videos__item-title">{title}</p>
                    <p className="videos__item-channel">{channel}</p>
                </div>
            </Link>
        </li>
    )
};
export default AsideVideoCard;