import './styles/_header_block.scss';

export default class SiteHeader extends HTMLElement {
    innerHTML = `
        <div class="main__header" data-container-width="header-big" aria-hidden="true">
            <div class="main__header-row">
                <div class="main__header-logo-wrapper">
                    <a class="main__header-logo" href="/" title="logo">
                        <svg width="151" height="37" viewBox="0 0 151 37" xmlns="http://www.w3.org/2000/svg"><g><path d="M0 1.42114V28.5081H5.417H27.086V23.0901H5.417V17.6731H27.086V12.2561H5.417V6.83914H27.086V1.42114H5.417H0Z" fill="currentColor"></path><path d="M43.1676 8.50863C42.1424 8.42932 41.1131 8.59423 40.164 8.98981C39.2149 9.3854 38.3731 10.0004 37.7077 10.7843H36.7218V9.0021H31.6035V36.0741H36.9115V26.7082H37.8974C38.9211 28.0734 40.476 28.9829 43.1677 28.9829C48.287 28.9829 51.4334 24.6986 51.4334 18.7463C51.4334 12.8694 48.3247 8.50863 43.1676 8.50863ZM41.4619 24.5864C38.1635 24.5864 36.7219 21.8183 36.7219 18.7473C36.7219 15.6763 38.1635 12.9458 41.4619 12.9458C44.647 12.9458 46.1254 15.5244 46.1254 18.7473C46.1254 21.9702 44.647 24.5864 41.4619 24.5864Z" fill="currentColor"></path><path d="M60.5709 0.926025H55.1875V5.66608H60.5709V0.926025Z" fill="currentColor"></path><path d="M60.5326 9.0022H55.2246V28.4926H60.5326V9.0022Z" fill="currentColor"></path><path d="M77.3439 8.50859C76.3236 8.42664 75.2984 8.59051 74.3545 8.98647C73.4105 9.38243 72.5752 9.99893 71.9187 10.7843H70.9328V9.00206H65.8145V28.4924H71.1225V18.1406C71.1225 15.5243 72.7528 13.2109 75.4445 13.2109C77.9108 13.2109 79.2363 14.728 79.2363 17.4574V28.4924H84.5473V16.5093C84.5473 11.5041 82.2379 8.50859 77.3439 8.50859Z" fill="currentColor"></path><path d="M98.1179 8.50854C91.9759 8.50854 88.0332 12.6429 88.0332 18.7472C88.0332 24.8514 91.9759 28.9838 98.1179 28.9838C104.336 28.9838 108.204 24.8514 108.204 18.7472C108.204 12.6419 104.336 8.50854 98.1179 8.50854ZM98.1179 24.5863C94.8196 24.5863 93.3412 21.8936 93.3412 18.7472C93.3412 15.6375 94.8196 12.9457 98.1179 12.9457C101.455 12.9457 102.896 15.6375 102.896 18.7472C102.896 21.8936 101.455 24.5863 98.1179 24.5863Z" fill="currentColor"></path><path d="M120.982 23.752H119.35L115.331 9.00195H109.91L115.445 28.491H124.663L130.271 9.00195H124.85L120.982 23.752Z" fill="currentColor"></path><path d="M141.176 8.50977C136.474 8.50977 132.986 10.8222 132.872 14.5763H138.143C138.294 13.2488 139.319 12.4913 141.441 12.4913C143.754 12.4913 144.892 13.5149 144.892 15.5246V16.017H139.692C133.929 16.017 131.768 19.4673 131.768 22.5005C131.768 25.9508 134.271 28.984 138.668 28.984C139.682 29.0611 140.701 28.9067 141.647 28.5324C142.593 28.1581 143.441 27.5738 144.128 26.8236H145.109L145.116 28.4926H150.01V15.8273C150.01 10.5948 146.447 8.50977 141.176 8.50977ZM144.881 20.6805C144.892 21.244 144.783 21.8033 144.564 22.3225C144.345 22.8416 144.02 23.3092 143.609 23.695C143.198 24.0808 142.711 24.3763 142.179 24.5625C141.647 24.7487 141.082 24.8215 140.521 24.7761C138.36 24.7761 137.07 23.8657 137.07 22.0835C137.07 20.3012 138.436 19.4672 140.71 19.4672H144.881V20.6805Z" fill="currentColor"></path></g></svg>
                    </a>
                </div>

                <div class="main__header-nav-center">
                    <ul class="mega-menu">
                        <li class="mega-menu__item" data-mega-menu-item="true" aria-hidden="true">
                            <a class="mega-menu__item-button" data-item-button href="/signin.html">Menu 1</a>
                            <div class="mega-menu__submenu" data-mega-menu-submenu data-background="">
                                <div class="mega-menu__submenu-container" data-container-width="header-big">
                                    <button type="button" class="mega-menu__submenu-go-back" data-button-go-back>
                                        <span class="mega-menu__title">Mega menu</span>
                                        <span class="mega-menu__close">Close</span>
                                    </button>
                                    <ul class="mega-menu__submenu-list" data-container-width="header-big">
                                        <li class="mega-menu__submenu-item" data-mega-menu-submenu-item="true" aria-hidden="true">
                                            <a class="mega-menu__submenu-item-button" data-submenu-item-button href="#">Submenu 1-1</a>
                                            <div class="mega-menu__submenu-item-submenu" data-mega-menu-submenu-item-submenu="true" data-background="">
                                                <button type="button" class="mega-menu__submenu-item-submenu-go-back" data-button-go-back>
                                                    <span class="mega-menu__title">Mega menu submenu</span>
                                                    <span class="mega-menu__close">Close</span>
                                                </button>
                                                <ul class="mega-menu__submenu-submenu-list">
                                                    <li class="mega-menu__submenu-submenu-item"><a href="#">Submenu 1-1-1</a></li>
                                                    <li class="mega-menu__submenu-submenu-item"><a href="#">Submenu 1-1-2</a></li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li class="mega-menu__submenu-item" data-mega-menu-submenu-item aria-hidden="true">
                                            <a class="mega-menu__submenu-item-button" data-submenu-item-button href="#">Submenu 1-2</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <li class="mega-menu__item" data-mega-menu-item="true" aria-hidden="true">
                            <a class="mega-menu__item-button" data-item-button href="/signin.html">Menu 2</a>
                            <div class="mega-menu__submenu" data-mega-menu-submenu data-background="">
                                <div class="mega-menu__submenu-container" data-container-width="header-big">
                                    <button type="button" class="mega-menu__submenu-go-back" data-button-go-back>
                                        <span class="mega-menu__title">Mega menu</span>
                                        <span class="mega-menu__close">Close</span>
                                    </button>
                                    <ul class="mega-menu__submenu-list" data-container-width="header-big">
                                        <li class="mega-menu__submenu-item">
                                            <a class="mega-menu__submenu-item-button" href="#">Submenu 2-1</a>
                                        </li>
                                        <li class="mega-menu__submenu-item">
                                            <a class="mega-menu__submenu-item-button" href="#">Submenu 2-2</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <li class="mega-menu__item" data-mega-menu-item="true" aria-hidden="true">
                            <a class="mega-menu__item-button" data-item-button href="/signin.html">Sign in</a>
                        </li>
                    </ul>
                </div>

                <div class="main__header-nav-last">
                    <button type="button" class="btn button--primary">
                        <span class="btn-content-text">Signin</span>
                    </button>
                </div>

                <div class="btn__menu-mb">
                    <button type="button" aria-label="Menu">
                        <span class="btn__menu-mb-icon-parent">
                            <span class="btn__menu-mb-icon-children"></span>
                        </span>
                    </button>
                </div>
            </div>
        </div>
    `;
}

customElements.define('site-header', SiteHeader);
