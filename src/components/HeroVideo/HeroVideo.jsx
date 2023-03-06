import "./HeroVideo.scss"

function HeroVideo ({img, video}) {
    return (
        <section className="hero">
            <video 
                controls 
                className="hero__video" 
                poster={img} 
                src={video + "?api_key='mtabala'"} >
            </video>
        </section>
    )
}
export default HeroVideo;