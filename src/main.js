
import piq from '/src/core/piq.js';

// Mock use case
class TheThing extends piq {

  name() {
    return 'the-thing'
  };

  data() {
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
