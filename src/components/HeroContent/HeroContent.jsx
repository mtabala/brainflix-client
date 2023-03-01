import "./HeroContent.scss"

function HeroContent () {
    return (
        <>
        <section className="content">
            <h1 className="content__header">BMX Rampage: 2021 Highlights</h1>
            <div className="content__wrapper">
                <p className="content__wrapper-title">By Red Cow</p>
                <p className="content__wrapper-views">1,001,023</p>
                <p className="content__wrapper-date">07/11/2021</p>
                <button className="content__like-btn">111,044</button>
            </div>
            <p className="content__text">On a gusty day in Southern Utah, a group of 25
                daring mountain bikers blew the doors off what
                is possible on two wheels, unleashing some of
                the biggest moments the sport has ever seen.
                While mother nature only allowed for one full run
                before the conditions made it impossible to ride,
                that was all that was needed for event veteran
                Kyle Strait, who won the event for the second
                time -- eight years after his first Red Cow
                Rampage title</p>
        </section>
        </>
    )
}
export default HeroContent;