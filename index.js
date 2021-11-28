import path from 'path';
import gendiff from './src/gendiff.js';
import parcer from './src/parcer.js';
import stylish from './src/formatters/stylish.js';

const main = (path1, path2, formatName) => {
  const data1 = parcer(path1, path.extname(path1));
  const data2 = parcer(path2, path.extname(path2));
  const diff = gendiff(data1, data2);
  const result = stylish(diff, formatName);

  return result;
};

export default main;
