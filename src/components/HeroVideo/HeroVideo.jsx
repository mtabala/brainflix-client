import "./HeroVideo.scss"

function HeroVideo () {
    return (
        <>
        <section className="hero">
            <video controls 
                className="hero__video" 
                poster="https://i.imgur.com/l2Xfgpl.jpg" 
                src="https://project-2-api.herokuapp.com/stream"></video>
        </section>
        </>
    )
}
export default HeroVideo;