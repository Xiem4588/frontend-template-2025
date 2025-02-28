import './styles/_footer_block.scss';

export default class SigninFooter extends HTMLElement {
    innerHTML = `
        <div class="main__footer--copyright">
            <ul class="main__footer--copyright-menu">
                <li><a href="/">Home</a></li>
                <li>|</li>
                <li><a href="/signin">Sign in</a></li>
                <li>|</li>
                <li>© 2024 Siteimprove</li>
            </ul>
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

customElements.define('signin-footer', SigninFooter);
