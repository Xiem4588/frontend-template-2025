
import './styles/_featured_content_block.scss';

export default class FeaturedContentBlock extends HTMLElement {
    innerHTML = `
        <div class="featured-content-block" data-featured-content-padding="true" data-background="">
            <div class="featured-content-block__wrapper" data-featured-content-image-right="false" data-container-width="site">
                <div class="featured-content-block__image">
                    <img alt="image" src="https://www.epinova.se/contentassets/84a377d2dc0c41b193e39ceb38fb534f/webpage.jpg?mode=crop&scale=both&format=webp&f.sharpen=25&down.filter=robidoux_sharp&up.filter=robidoux_sharp&width=634&height=423">
                </div>
                <div class="featured-content-block__text-container">
                    <div class="featured-content-block__heading">
                        <h2 class="featured-content-block__heading-title">Kundcase</h2>
                    </div>
                    <div class="featured-content-block__preamble">
                        <p class="featured-content-block__preamble-text">Vi jobbar både inom privat och offentlig sektor med både webb och e-handel. Vi gläds tillsammans med våra kunder när vi tillsammans lyckas med våra lanseringar. Här är några exempel på projekt och kunder som vi jobbar med. </p>
                    </div>
                    <div class="featured-content-block__cta">
                        <a class="cta-button__link-icon" href="/"><span>Läs mer</span></a>
                    </div>
                </div>
            </div>
        </div>
    `;
}

customElements.define('featured-content-block', FeaturedContentBlock);