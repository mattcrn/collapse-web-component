class Collapse extends HTMLElement {
    constructor() {
        // Always call parent constructor first
        super();

        // Get template content from DOM
        const template = document.querySelector("#collapse");
        const templateContent = template.content;

        // Create new Shadow Root
        const shadowRoot = this.attachShadow({ mode: "open" }).appendChild(
            templateContent.cloneNode(true)
        );
    }

    // Called when the element is first connected to the DOM
    connectedCallback() {
        // `this` will always reference the custom element instance (which extends from HTMLElement, in this case)
        // First, get timer span reference
        const container = $(".container", this.shadowRoot);
        const trigger = $("#trigger", this.shadowRoot);
        const content = $(".content", this.shadowRoot);
        const labelText = $(".label-text", this.shadowRoot);
        const labelIcon = $(".label-icon", this.shadowRoot);

        this.shadowRoot.hidden = false;


        trigger.change(() => {
            if(trigger.prop( "checked" )) {
                container.height(content.outerHeight(true));
                labelText.text(this.closeText);
                labelIcon.text("-");
            } else {
                container.height(0);
                labelText.text(this.openText);
                labelIcon.text("+");
            }
        });
    }

    get openText() {
        return this.getAttribute("open-text");
    }

    get closeText() {
        return this.getAttribute("close-text");
    }
}
customElements.define("collapse-component", Collapse);