
import './styles/_new_block.scss';

export default class NameBlock extends HTMLElement {
    innerHTML = `
        <div style="display: flex; align-items:center; justify-content: center; height: 500px;">Block content!</div>
    `;
}

customElements.define('name-block', NameBlock);