import './styles/_hero_block.scss';

export default class HeroBlock extends HTMLElement {
    innerHTML = `
        <div class="hero-block-" data-hero-block-image-background="true">
            <div class="hero-block__image-background">
                <img class="image-object-fit__cover" alt="image" src="https://integration.epinova.se/globalassets/epinova.se/bildbank/detaljbilder/epinova-laptop-figma-svkom-retusch-2000px.jpg?mode=crop&amp;scale=both&amp;format=webp&amp;f.sharpen=25&amp;down.filter=robidoux_sharp&amp;up.filter=robidoux_sharp&amp;">
            </div>
            <div class="hero-block__content">
                <div class="hero-block__wrapper" data-container-width="site">
                    <div class="hero-block__text-container">
                        <div class="hero-block__heading">
                            <div class="hero-block__heading-wrap">
                                <div class="innovation-breadcrumbs" data-container-width="" data-vanilla-component="innovation-breadcrumbs">
                                    <nav class="innovation-breadcrumbs__navigation" aria-label="Du är här">
                                        <ul class="innovation-breadcrumbs__items">
                                            <li class="innovation-breadcrumbs__item">
                                                    <a class="innovation-breadcrumbs__link" href="/sv/">Start</a>
                                            </li>
                                            <li class="innovation-breadcrumbs__item">
                                                    <span class="innovation-breadcrumbs__current" aria-current="page">Kunder</span>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                                <h1 class="hero-block__heading-title">Kundcase</h1>
                            </div>
                        </div>
                        <div class="hero-block__preamble">
                            <p class="hero-block__preamble-text">Vi jobbar både inom privat och offentlig sektor med både webb och e-handel. Vi gläds tillsammans med våra kunder när vi tillsammans lyckas med våra lanseringar. Här är några exempel på projekt och kunder som vi jobbar med. </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}