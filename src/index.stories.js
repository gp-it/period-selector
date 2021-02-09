import {
  html,
  withKnobs,
  withWebComponentsKnobs,
  action,
} from '@open-wc/demoing-storybook';
import '../period-selector.js';

export default {
  title: 'PeriodSelector',
  component: 'period-selector',
  options: { selectedPanel: 'storybookjs/knobs/panel' },
  decorators: [withKnobs, withWebComponentsKnobs],
};

export const Simple = () =>
  html`<period-selector @change=${action('change')}></period-selector>`;

export const MinMax = () =>
  html`<period-selector min="2020-05-10" max="2020-05-28"></period-selector>`;
