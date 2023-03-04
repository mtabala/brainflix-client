import './AsideVideoCard.scss';

function AsideVideoCard ({video, UpdateSelectedVideo }) {

function handleVideoClick(id) {
    UpdateSelectedVideo(id);
    window.scrollTo(0, 0);
}
    return (
        <li className="videos__item" onClick={() => handleVideoClick(video.id)}>
                <img className ="videos__item-img" src={video.image} alt="video thumbnail" />
                <div className="videos__item-wrap">
                    <p className="videos__item-title">{video.title}</p>
                    <p className="videos__item-channel">{video.channel}</p>
                </div>
        </li>
    )
};
export default AsideVideoCard;