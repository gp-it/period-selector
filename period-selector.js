import { LitElement, html, css } from 'lit-element';

class PeriodSelector extends LitElement {
  static get properties() {
    return {
      title: { type: String },
      start: { type: String },
      end: { type: String },
      min: { type: String },
      max: { type: String },
    };
  }

  static get styles() {
    return css`
      .periode-input {
        display: grid;
        grid-template-columns: 1fr 1fr;
        justify-items: center;
      }
    `;
  }

  constructor() {
    super();
    this.title = 'Période';
  }

  render() {
    return html`
      <fieldset>
        <legend>${this.title}</legend>
        <div class="periode-input">
          <input
            name="start"
            type="date"
            aria-label="start"
            .value="${this.start}"
            min=${this.min}
            max="${this.getMax()}"
            @change="${this._periodChanged}"
          />

          <input
            name="end"
            type="date"
            aria-label="end"
            .value="${this.end}"
            min="${this.getMin()}"
            max="${this.max}"
            @change="${this._periodChanged}"
          />
        </div>
      </fieldset>
    `;
  }

  _periodChanged(event) {
    if (event.target.name === 'start') {
      this.start = event.target.value;
    } else {
      this.end = event.target.value;
    }
    if (this.start && this.end) this.dispatchEvent(new CustomEvent('change'));
  }

  getMin() {
    if (!this.min || this.start > this.min) return this.start;
    return this.min;
  }

  getMax() {
    if (!this.max || this.end < this.max) return this.end;
    return this.max;
  }
}
customElements.define('period-selector', PeriodSelector);
