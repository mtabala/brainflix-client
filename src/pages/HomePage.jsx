import { useState, useEffect } from "react";
import HeroVideo from "../components/HeroVideo/HeroVideo"
import HeroContent from '../components/HeroContent/HeroContent';
import CommentSection from '../components/CommentSection/CommentSection';
import AsideVideos from '../components/AsideVideos/AsideVideos';
import axios from "axios";
import { useParams } from "react-router-dom";
import '../App.scss';


function HomePage() {
    const api = "https://project-2-api.herokuapp.com";
    const apiKey = "b085c8f5-ab35-419c-89c6-ecde67a6d2c9";

    const [selectedVideo, setSelectedVideo] = useState (null);
    const [videos, setVideos] = useState ([]);
    const {videoId} = useParams ();

    useEffect (() =>  {
        getVideos ();
    },[]);

    useEffect (() => {
        if (videoId) {
            getVideo(videoId);
        } else if (videos.length) {
            getVideo(videos[0].id);
        }
    },[videoId, videos]);

    function getVideo (videoId) {
        axios
        .get (`${api}/videos/${videoId}?api_key=${apiKey}`)
        .then ((res) => {
            console.log(res)
            setSelectedVideo(res.data);
        })
        .catch((err) => {
            console.log("err: ", err);
        })
    };

    function getVideos () {
        axios
        .get (`${api}/videos/?api_key=${apiKey}`)
        .then ((response) => {
            setVideos(response.data);
        })
        .catch((err) => {
            console.log("err: ", err);
        })
    };

    return (
        selectedVideo && videos.length ?
        <>      
            <HeroVideo img={selectedVideo.image} video ={selectedVideo.video}/>

            <main className="main">
                <div className="main__container">
                    <HeroContent selectedVideo={selectedVideo}/>
                    <CommentSection selectedVideo={selectedVideo} />
                </div>
                
                <AsideVideos selectedVideoId={selectedVideo.id} videos={videos}/>
            </main>
            </> : ""
    );
}

export default HomePage;