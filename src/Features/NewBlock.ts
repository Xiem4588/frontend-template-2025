
import './styles/_new_block.scss';

export default class DefaultBlock extends HTMLElement {
    innerHTML = `
        <div style="display: flex; align-items:center; justify-content: center; height: 500px;">Block content!</div>
    `;
}