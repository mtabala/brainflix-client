import './AsideVideos.scss';
import { useState } from "react";
import AsideVideoCard from '../AsideVideoCard/AsideVideoCard';
import VideoData from "../../assets/Data/videos.json";

function AsideVideos ({UpdateSelectedVideo, selectedVideoId}) {
    const [videos] = useState (VideoData);

    return (
        <aside className="videos">
            <h4 className="videos__header">next videos</h4>
            <ul className="videos__list">
                {videos
                    .filter((video) => ( video.id !== selectedVideoId))
                    .map((video) => (<AsideVideoCard UpdateSelectedVideo={UpdateSelectedVideo} key={video.id} video={video} />) )
                }

            </ul>
            
        </aside>
    );
}
export default AsideVideos;