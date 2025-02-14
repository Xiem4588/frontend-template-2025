export default class FooterComponent extends HTMLElement {
    innerHTML = `
        <div class="main__footer--copyright" data-border-top>
            <ul class="main__footer--copyright-menu">
                <li><a href="/">Start</a></li>
                <li><a href="/login">Privacy policy</a></li>
            </ul>
            |
            <div class="main__footer--copyright-siteimprove">© 2024 Siteimprove</div>
            <div class="theme-selector">
                <ul class="theme-options">
                    <li data-site-theme="system" class="active">System</li>
                    <li data-site-theme="dark">Dark</li>
                    <li data-site-theme="light">Light</li>
                    <li data-site-theme="nebula">Nebula</li>
                    <li data-site-theme="polaris">Polaris</li>
                    <li data-site-theme="odyssey">Odyssey</li>
                    <li data-site-theme="blackguard">Blackguard</li>
                    <li data-site-theme="highContrast">HighContrast</li>
                </ul>
            </div>
        </div>
    `;
}