import { html, fixture, expect } from '@open-wc/testing';

import '../period-selector.js';

describe('PeriodSelector', () => {
  it('passes the a11y audit', async () => {
    const el = await fixture(html` <period-selector></period-selector> `);

    await expect(el).shadowDom.to.be.accessible();
  });
});
