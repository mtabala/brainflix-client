import "./HeroContent.scss"
import { timeConverter } from "../../Utilities/utilities";

function HeroContent ({selectedVideo}) {

    return (
        <section className="content">
            <h2 className="content__header">{selectedVideo.title}</h2>
            <div className="content__wrapper">
                <p className="content__wrapper-title">By {selectedVideo.channel}</p>
                <p className="content__wrapper-views">{selectedVideo.views}</p>
                <p className="content__wrapper-date tooltip">{timeConverter(selectedVideo.timestamp)}
                    <span className="tooltiptext">
                        {new Date(selectedVideo.timestamp).toLocaleDateString("en-US",{year:"numeric",month:"2-digit",day:"2-digit"})}
                    </span>
                </p>
                <p className="content__wrapper-like">{selectedVideo.likes}</p>
            </div>
            <p className="content__text">{selectedVideo.description}</p>
        </section>
    )
}
export default HeroContent;