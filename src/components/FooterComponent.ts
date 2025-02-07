export default class FooterComponent extends HTMLElement {
    innerHTML = `
        <div class="main__footer" data-container-width="footer-big">
            <div class="main__footer-content">
                <div class="main__footer-legal-wrap">
                    <div class="main__footer-siteimprove">© 2024 Siteimprove</div>
                    <ul class="main__footer-legal">
                        <li><a href="https://siteimprove.com/legal/" target="_blank">Legal</a></li>
                        <li><a href="https://siteimprove.com/privacy/" target="_blank">Privacy policy</a></li>
                    </ul>
                </div>
            </div>
        </div>
    `;
}