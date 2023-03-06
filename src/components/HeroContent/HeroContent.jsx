import "./HeroContent.scss"
import { timeConverter } from "../../Utilities/utilities";

function HeroContent ({selectedVideo}) {

    return (
        <section className="content">
            <h1 className="content__header">{selectedVideo.title}</h1>
            <div className="content__wrapper">
                <p className="content__wrapper-title">By {selectedVideo.channel}</p>
                <p className="content__wrapper-views">{selectedVideo.views}</p>
                <p className="content__wrapper-date">{timeConverter(selectedVideo.timestamp)}</p>
                <p className="content__wrapper-like">{selectedVideo.likes}</p>
            </div>
            <p className="content__text">{selectedVideo.description}</p>
        </section>
    )
}
export default HeroContent;