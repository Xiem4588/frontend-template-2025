
import './styles/_article_list_block.scss';

export default class ArticleListBlock extends HTMLElement {
    innerHTML = `
        <div class="article-list-block">
            <div class="article-list-block__wrapper" data-layout-smart="3-per-row" data-container-width="site">
                <div class="teaser-base-item">
                    <a class="teaser-base-item__link link-before-animation-none" href="/">
                        <div class="teaser-base-item__image">
                            <img alt="image" src="https://www.epinova.se/contentassets/84a377d2dc0c41b193e39ceb38fb534f/webpage.jpg?mode=crop&scale=both&format=webp&f.sharpen=25&down.filter=robidoux_sharp&up.filter=robidoux_sharp&width=634&height=423">
                        </div>
                        <div class="teaser-base-item__content">
                            <div class="teaser-base-item__heading">
                                <h3 class="h4 teaser-base-item__title">Epinova AI Assistant 2.0 för Optimizely – nu med Nya smarta verktyg</h3>
                            </div>
                            <div class="teaser-base-item__time">
                                <time class="teaser-base-item__date" datetime="@Model.Content.StartPublish?.ToString("yyyy-MM-ddTHH:mm:ss")">27 nov. 2024</time>
                                <time class="teaser-base-item__reading-time" datetime="PT@(Model.ReadingTime)M">Lästid: 1 min</time>
                            </div>
                            <div class="teaser-base-item__preamble">
                                <p class="teaser-base-item__preamble-text">Vi jobbar både inom privat och offentlig sektor med både webb och e-handel. Vi gläds tillsammans med våra kunder när vi tillsammans lyckas med våra lanseringar. Här är några exempel på projekt och kunder som vi jobbar med. </p>
                            </div>
                        </div>
                    </a>
                </div>
                <div class="teaser-base-item">
                    <a class="teaser-base-item__link link-before-animation-none" href="/">
                        <div class="teaser-base-item__image">
                            <img alt="image" src="https://www.epinova.se/contentassets/84a377d2dc0c41b193e39ceb38fb534f/webpage.jpg?mode=crop&scale=both&format=webp&f.sharpen=25&down.filter=robidoux_sharp&up.filter=robidoux_sharp&width=634&height=423">
                        </div>
                        <div class="teaser-base-item__content">
                            <div class="teaser-base-item__heading">
                                <h3 class="h4 teaser-base-item__title">Epinova AI Assistant 2.0 för Optimizely – nu med Nya smarta verktyg</h3>
                            </div>
                            <div class="teaser-base-item__time">
                                <time class="teaser-base-item__date" datetime="@Model.Content.StartPublish?.ToString("yyyy-MM-ddTHH:mm:ss")">27 nov. 2024</time>
                                <time class="teaser-base-item__reading-time" datetime="PT@(Model.ReadingTime)M">Lästid: 1 min</time>
                            </div>
                            <div class="teaser-base-item__preamble">
                                <p class="teaser-base-item__preamble-text">Vi jobbar både inom privat och offentlig sektor med både webb och e-handel. Vi gläds tillsammans med våra kunder när vi tillsammans lyckas med våra lanseringar. Här är några exempel på projekt och kunder som vi jobbar med. </p>
                            </div>
                        </div>
                    </a>
                </div>
                <div class="teaser-base-item">
                    <a class="teaser-base-item__link link-before-animation-none" href="/">
                        <div class="teaser-base-item__image">
                            <img alt="image" src="https://www.epinova.se/contentassets/84a377d2dc0c41b193e39ceb38fb534f/webpage.jpg?mode=crop&scale=both&format=webp&f.sharpen=25&down.filter=robidoux_sharp&up.filter=robidoux_sharp&width=634&height=423">
                        </div>
                        <div class="teaser-base-item__content">
                            <div class="teaser-base-item__heading">
                                <h3 class="h4 teaser-base-item__title">Epinova AI Assistant 2.0 för Optimizely – nu med Nya smarta verktyg</h3>
                            </div>
                            <div class="teaser-base-item__time">
                                <time class="teaser-base-item__date" datetime="@Model.Content.StartPublish?.ToString("yyyy-MM-ddTHH:mm:ss")">27 nov. 2024</time>
                                <time class="teaser-base-item__reading-time" datetime="PT@(Model.ReadingTime)M">Lästid: 1 min</time>
                            </div>
                            <div class="teaser-base-item__preamble">
                                <p class="teaser-base-item__preamble-text">Vi jobbar både inom privat och offentlig sektor med både webb och e-handel. Vi gläds tillsammans med våra kunder när vi tillsammans lyckas med våra lanseringar. Här är några exempel på projekt och kunder som vi jobbar med. </p>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    `;
}

customElements.define('article-list-block', ArticleListBlock);