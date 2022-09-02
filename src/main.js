class piq extends HTMLElement{

  constructor() {
    //use super to access decendent's context
    const s = super()
    this.setStyle(s.style());
  };

  props(s) {
    // return attribute data
    return this.getAttribute(s);
  };

  setStyle(s) {
    // TODO:
    // method to set component style and
    // check if componenet style exist
    console.log(s);
  };
};


class TheThing extends piq {

  data() {
    // Use this.props() method from parent object
    // to do getAttribute() operation
    return {
      type: this.props('type'),
      label: this.props('label')
    }
  };

  style() {
    return `
      .css-name-here {
        color: red;
      }
    `;
  };

  template() {
    return `
      <div>test</div>
      <div> ${this.data().type} </div>
      <div> ${this.data().label} </div>
    `;
  }

  connectedCallback() {
    this.innerHTML = this.template();
  };

};

customElements.define('the-thing', TheThing);
