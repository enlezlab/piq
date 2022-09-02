

export default class piq extends HTMLElement {

  constructor() {
    //use super to access decendent's context
    const s = super()
    //TODO: Only set style when both
    // name and style present
    this.setStyle({
      id: s.name(),
      css: s.style()
    });
  };

  props(s) {
    // return attribute data
    return this.getAttribute(s);
  };

  setStyle(conf) {
    const id = conf.id;
    const css = conf.css;
    const styleNode = document.getElementById(id);

    if (!styleNode) {
      const style = document.createElement('style');
      style.id = id;
      style.innerHTML = css;
      document.head.appendChild(style);
    }
  };
};


