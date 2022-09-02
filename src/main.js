
import piq from '/src/core/piq.js';

class TheThing extends piq {

  static namespace = 'the-thing';

  name() {
    return 'the-thing'
  };

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
