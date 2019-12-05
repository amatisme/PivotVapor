const template = document.createElement('template');
template.innerHTML = "<slot />";

class PivotImg extends HTMLElement {
    constructor() {
        super()
        
        console.log("Hello from pivot-img");
        this.attachShadow({
            mode: 'open'
        })
    }
    connectedCallback() {
        this.shadowRoot.appendChild(
            template.content.cloneNode(true));
        this.animate([
            { transform: 'scale(0) rotate(0deg)' },
            { transform: 'scale(1) rotate(1080deg)' }
        ], {
            duration: 10000
        })
    }
}
customElements.define('pivot-img', PivotImg);