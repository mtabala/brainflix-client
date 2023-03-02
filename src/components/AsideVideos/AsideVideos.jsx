import './AsideVideos.scss';
import AsideVideoCard from '../AsideVideoCard/AsideVideoCard';

function AsideVideos () {

    return (
        <aside class="videos">
            <h4 className="videos__header">next video</h4>
            <ul class="videos__list">
                <AsideVideoCard />
            </ul>
        </aside>
    );
}
export default AsideVideos;