export default class MainComponent extends HTMLElement {
    innerHTML = `
        <div class="main__content--column column-2" data-container-width="site">
            <div class="main__content-wrapper">
                <div class="main__content-block d-none">
                    <div class="main__block-1">
                        <h2 class="h2">Block 1</h2>
                    </div>
                    <div class="main__block-2">
                        <h2 class="h2">Sign in</h2>
                    </div>
                    <div class="main__block-3">
                        <h2 class="h2">Sign in</h2>
                    </div>
                </div>
            </div>
        </div>
    `;
}
