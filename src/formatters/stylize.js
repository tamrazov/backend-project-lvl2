import getPlainFormat from './plain.js';
import getJsonFormat from './json.js';
import getStylishFormat from './stylish.js';

const stylize = (tree, formatName) => {
  switch (formatName) {
    case 'plain':
      return getPlainFormat(tree);
    case 'json':
      return getJsonFormat(tree);
    case 'stylish':
      return getStylishFormat(tree);
    default:
      throw new Error(`Don't know formatName: ${formatName}`);
  }
};

export default stylize;
