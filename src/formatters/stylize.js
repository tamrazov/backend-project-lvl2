import getPlainFormat from './plain.js';
import getJsonFormat from './json.js';
import getDefaultFormat from './default.js';

const stylize = (tree, formatName) => {
  switch (formatName) {
    case 'plain':
      return getPlainFormat(tree);
    case 'json':
      return getJsonFormat(tree);
    default:
      return getDefaultFormat(tree);
  }
};

export default stylize;
