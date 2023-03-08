import './AsideVideos.scss';
import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import AsideVideoCard from '../AsideVideoCard/AsideVideoCard';
// import VideoData from "../../assets/Data/videos.json";

export const api = "https://project-2-api.herokuapp.com";
export const apiKey = "b085c8f5-ab35-419c-89c6-ecde67a6d2c9";

function AsideVideos () {
    const [videos, setVideos] = useState ([]);
    const [ setCurrentVideo] = useState ({});
    const {videoId} = useParams ();

    useEffect (() =>  {
        getVideos ();
    },[])

    useEffect (() => {
        if (videoId) {
            getVideo(videoId);
        } else if (videos.length) {
            getVideo(videos[0].id);
        }
    })

    function getVideo (videoId) {
        axios
        .get (`${api}/videos/?api_key=${apiKey}/${videoId}`)
        .then ((res) => {
            setCurrentVideo(res.data);
        })
        .catch((err) => {
            console.log("err: ", err);
        })
    }

    function getVideos () {
        axios
        .get (`${api}/videos/?api_key=${apiKey}`)
        .then ((response) => {
            setVideos(response.data);
        })
        .catch((err) => {
            console.log("err: ", err);
        })
    }



    return (
        <aside className="videos">
            <h4 className="videos__header">next videos</h4>
            <ul className="videos__list">
                {videos.map ((video) => (
                    <AsideVideoCard image={video.image} title={video.title} channel={video.channel}>
                    <Link key={video.id} to={`videos/?api_key=${apiKey}/${videoId}`}>
                        
                    </Link>
                    </AsideVideoCard>
                ))}
            </ul>
            
        </aside>
    );
}
export default AsideVideos;