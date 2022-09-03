

export default class piq extends HTMLElement {

  constructor() {
    // Use super to access decendent's context
    const s = super()
    this.styleID = `style_${s.name()}`;
    this.CSS = s.style();

    // Component template
    this.tpl = s.template();
  };

  props(s) {
    // return attribute data
    return this.getAttribute(s);
  };

  setStyle(conf) {
    const id = conf.id;
    const css = conf.css;
    const styleNode = document.getElementById(id);

    if (styleNode) {
      return;
    }

    const style = document.createElement('style');
    style.id = id;
    style.innerHTML = css;
    document.head.appendChild(style);
  };

  connectedCallback() {
    this.setStyle({
      id: this.styleID,
      css: this.CSS
    });
    this.innerHTML = this.tpl;
  };
};


