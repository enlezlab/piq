
import piq from '/src/core/piq.js';

// Mock use case
class TheThing extends piq {

  name() {
    return 'the-thing'
  };

  data(s) {
    return super.props(s);
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
      <div> ${this.data('type')} </div>
      <div> ${this.data('label')} </div>
    `;
  }
};

customElements.define('the-thing', TheThing);

