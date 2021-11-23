import plain from './plain.js';
import json from './json.js';
import tt from './default.js';

const stylish = (tree, formatName) => {
  switch (formatName) {
    case 'plain':
      return plain(tree);
    case 'json':
      return json(tree);
    default:
      return tt(tree);
  }
};

export default stylish;
