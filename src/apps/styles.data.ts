import { forIn, assign } from 'lodash';

export const STYLE_LAYOUT_PREFIX: string = 'ab-layout';
export const STYLE_LAYOUT_JSON = require('../layouts/styles.json');

export const STYLE_BUTTON_PREFIX: string = 'ab-button';
export const STYLE_BUTTON_JSON = require('../buttons/styles.json');

export const STYLE_INPUT_TEXT_PREFIX: string = 'ab-input-text';
export const STYLE_INPUT_TEXT_JSON = require('../inputs/styles-text.json');

const selectObject = require('../select/styles');
export const STYLE_SELECT_PREFIX: string = 'ab-select';
export const STYLE_SELECT_JSON = selectObject.styles;
export const STYLE_SELECT_ASSETS = selectObject.assets;

export const STYLE_NAMES: string[] = [STYLE_LAYOUT_PREFIX, STYLE_BUTTON_PREFIX, STYLE_INPUT_TEXT_PREFIX, STYLE_SELECT_PREFIX];

export const styles = {
  [STYLE_LAYOUT_PREFIX]: STYLE_LAYOUT_JSON,
  [STYLE_BUTTON_PREFIX]: STYLE_BUTTON_JSON,
  [STYLE_INPUT_TEXT_PREFIX]: STYLE_INPUT_TEXT_JSON,
  [STYLE_SELECT_PREFIX]: STYLE_SELECT_JSON,
};

export const assets = {
  [STYLE_SELECT_PREFIX]: STYLE_SELECT_ASSETS,
};

export const enableStyles: string[] = [];

export const setOverrideStyle = (overrideStyle: any) => {
  forIn(overrideStyle, (value, key) => {
    const styleName = STYLE_NAMES.find(v => key.startsWith(v));
    if (styleName && styles[styleName]) {
      styles[styleName][key] = assign(styles[styleName][key], value);
    }
  });
};