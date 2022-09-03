

export default class piq extends HTMLElement {

  constructor() {
    // Use super to access decendent's context
    const s = super()
    this.styleID = `style_${s.name()}`;
    this.CSS = s.style();

    // Set Style
    this.setStyle = () => {
      const id = `style_${s.name()}`;;
      const css = s.style();
      const styleNode = document.getElementById(id);

      if (styleNode) {
        return;
      }

      const style = document.createElement('style');
      style.id = id;
      style.innerHTML = css;
      document.head.appendChild(style);
    };

    // Render method for compoenent
    this.render = () => {
      this.innerHTML = s.template();
    };

    this.attr = () => {
      return s.getAttributeNames();
    }
  };

  props(s) {
    // return attribute data
    return this.getAttribute(s);
  };

  static get observedAttributes() {
    /* array of attribute names to monitor for changes */
    return ['type', 'label'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (newValue === oldValue) {
      return;
    }
    this.render();
  }

  connectedCallback() {
    this.setStyle();
    this.render();
  };
};


