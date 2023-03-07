import { useState } from "react";
import HeroVideo from "../components/HeroVideo/HeroVideo"
import HeroContent from '../components/HeroContent/HeroContent';
import CommentSection from '../components/CommentSection/CommentSection';
import AsideVideos from '../components/AsideVideos/AsideVideos';
import VideoDetails from '../assets/Data/video-details.json';
import '../App.scss';

function HomePage() {
    const [selectedVideo, setSelectedVideo] = useState (VideoDetails[0]);

    function UpdateSelectedVideo(id) {        
        let newVideo = VideoDetails.find((video) => video.id === id)
        setSelectedVideo(newVideo);
    }
    return (  
        <>      
            <HeroVideo img={selectedVideo.image} video ={selectedVideo.video}/>

            <main className="main">
                <div className="main__container">
                    <HeroContent selectedVideo={selectedVideo}/>
                    <CommentSection selectedVideo={selectedVideo} />
                </div>
                
                <AsideVideos selectedVideoId={selectedVideo.id} UpdateSelectedVideo={UpdateSelectedVideo}/>
            </main>
            </>
    );
}

export default HomePage;