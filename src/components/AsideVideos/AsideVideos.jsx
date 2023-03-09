import './AsideVideos.scss';
import AsideVideoCard from '../AsideVideoCard/AsideVideoCard';

function AsideVideos ({videos, selectedVideoId}) {

    return (
        <aside className="videos">
            <h4 className="videos__header">next videos</h4>
            <ul className="videos__list">
                {videos
                .filter ((video) => (
                    selectedVideoId !== video.id
                ))
                .map ((video) => (
                    <AsideVideoCard key={video.id} videoId={video.id} image={video.image} title={video.title} channel={video.channel}/>

                ))}
            </ul>
            
        </aside>
    );
}
export default AsideVideos;