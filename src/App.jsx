import { useState } from "react";
import Header from "./components/Header/Header"
import HeroVideo from "./components/HeroVideo/HeroVideo"
import HeroContent from './components/HeroContent/HeroContent';
import CommentSection from './components/CommentSection/CommentSection';
import AsideVideos from './components/AsideVideos/AsideVideos';
import videoData from "./assets/Data/videos.json";
import './App.scss';

function App() {

    // const [videos, setVideos] = useState(videoData); // array of videos
    // const [selectedVideo, setSelectedVideo] = useState(videos[0]); // single video
    // const handleVideoClick = (id) => {
    //     const filteredVideos = videos.filter(video => video.id === id);
    //     setSelectedVideo(filteredVideos[0]); 
    // };

    return (    
        <div className="App">
            <Header />
            <HeroVideo />
            <HeroContent />
            <CommentSection />
            <AsideVideos />
            {/* <AsideVideos 
                videos={videos}
                selectedVideo={selectedVideo}
                handleVideoClick={handleVideoClick}/> */}
        </div>
    );
}

export default App;