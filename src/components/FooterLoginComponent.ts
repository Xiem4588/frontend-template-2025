export default class FooterComponent extends HTMLElement {
    innerHTML = `
        <div class="main__footer" data-container-width="footer-big">
            <div class="main__footer--copyright">
                <ul class="main__footer--copyright-menu">
                    <li><a href="/">Start</a></li>
                    <li><a href="/login">Privacy policy</a></li>
                </ul>
                |
                <div class="main__footer--copyright-siteimprove">© 2024 Siteimprove</div>
            </div>
        </div>
    `;
}