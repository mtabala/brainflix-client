import { useState, useEffect } from "react";
import HeroVideo from "../components/HeroVideo/HeroVideo"
import HeroContent from '../components/HeroContent/HeroContent';
import CommentSection from '../components/CommentSection/CommentSection';
import AsideVideos from '../components/AsideVideos/AsideVideos';
import axios from "axios";
import { useParams } from "react-router-dom";
import '../App.scss';

function HomePage() {
    //Define API and API key
    const api = "https://project-2-api.herokuapp.com";
    const apiKey = "b085c8f5-ab35-419c-89c6-ecde67a6d2c9";

    //Define use state variables using useState hooks
    const [selectedVideo, setSelectedVideo] = useState(null); // currently selected video
    const [videos, setVideos] = useState([]); // all videos
    const { videoId } = useParams(); // extract video id from url params

    // Define useEffect hook to get all videos from the API
    useEffect(() => {
        getVideos();
    }, []);

    // Define useEffect hook to get the selected video when the video id changes, or on default to get to the first video in the list
    useEffect(() => {
        if (videoId) {
            getVideo(videoId);
        } else if (videos.length) {
            getVideo(videos[0].id);
        }
    }, [videoId, videos]);

    // Define function to get a selected video from the API by video id
    function getVideo(videoId) {
        axios
            .get(`${api}/videos/${videoId}?api_key=${apiKey}`)
            .then((res) => {
                console.log(res)
                setSelectedVideo(res.data);
            })
            .catch((err) => {
                console.log("err: ", err);
            })
    };

    // Define function to get all videos from the API
    function getVideos() {
        axios
            .get(`${api}/videos/?api_key=${apiKey}`)
            .then((response) => {
                setVideos(response.data);
            })
            .catch((err) => {
                console.log("err: ", err);
            })
    };

    return (
        selectedVideo && videos.length ?
            <>
                <HeroVideo img={selectedVideo.image} video={selectedVideo.video} />

                <main className="main">
                    <div className="main__container">
                        <HeroContent selectedVideo={selectedVideo} />
                        <CommentSection getVideo={getVideo} selectedVideo={selectedVideo} />
                    </div>

                    <AsideVideos selectedVideoId={selectedVideo.id} videos={videos} />
                </main>
            </> : ""
    );
}

export default HomePage;