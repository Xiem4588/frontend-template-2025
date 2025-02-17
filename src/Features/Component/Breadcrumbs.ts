import './breadcrumbs.scss';

export default class Breadcrumbs extends HTMLElement {
    innerHTML = `
        <div class="breadcrumbs" data-container-width="" data-vanilla-component="breadcrumbs">
            <nav class="breadcrumbs__navigation" aria-label="You are here">
                <ul class="breadcrumbs__items">
                    <li class="breadcrumbs__item">
                        <a class="breadcrumbs__link" href="/sv/">Start</a>
                    </li>
                    <li class="breadcrumbs__item">
                        <span class="breadcrumbs__current" aria-current="page">Case Studies</span>
                    </li>
                </ul>
            </nav>
        </div>
    `;
}

customElements.define("breadcrumbs-component", Breadcrumbs);