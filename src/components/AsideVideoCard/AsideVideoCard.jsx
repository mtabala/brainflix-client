import './AsideVideoCard.scss';

function AsideVideoCard ({ image, title, channel}) {

// function handleVideoClick(id) {
//     UpdateSelectedVideo(id);
//     window.scrollTo(0, 0);
// }
    return (
        <li className="videos__item">
                <img className ="videos__item-img" src={image} alt="video thumbnail" />
                <div className="videos__item-text">
                    <p className="videos__item-title">{title}</p>
                    <p className="videos__item-channel">{channel}</p>
                </div>
        </li>
    )
};
export default AsideVideoCard;