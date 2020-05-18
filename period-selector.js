import { LitElement, html } from 'lit-element';
import { lastDayOfMonth } from './utils';

class PeriodSelector extends LitElement {
  static get properties() {
    return {
      start: String,
      end: String,
    };
  }

  render() {
    return html`
      <style>
        .periode-input {
          display: grid;
          grid-template-columns: 1fr 1fr;
          justify-items: center;
        }
      </style>
      <fieldset>
        <legend>Période</legend>
        <div class="periode-input">
          <input
            name="start"
            type="date"
            aria-label="start"
            value="${this.start}"
            @change="${this._periodChanged}"
          />
          <input
            name="end"
            type="date"
            aria-label="end"
            value="${this.end}"
            @change="${this._periodChanged}"
          />
        </div>
      </fieldset>
    `;
  }

  _periodChanged(event) {
    let target = event.target;
    if (target.name === 'start') {
      this.start = event.target.value;
      if (!this.end || this.end < this.start) {
        const date = new Date(this.start);
        this.end = lastDayOfMonth(date.getMonth() + 1, date.getFullYear());
      }
    } else {
      this.end = event.target.value;
      if (!this.start || this.start > this.end) {
        const date = new Date(this.end);
        this.start = `${date.getFullYear()}-${(date.getMonth() + 1)
          .toString()
          .padStart(2, '0')}-01`;
      }
    }
    this.dispatchEvent(new Event('change'));
  }
}
customElements.define('period-selector', PeriodSelector);
