import path from 'path';
import gendiff from './gendiff.js';
import parcer from './parcer.js';
import stylish from './stylish.js';

const main = (path1, path2) => {
  const data1 = parcer(path1, path.extname(path1));
  const data2 = parcer(path2, path.extname(path2));
  const diff = gendiff(data1, data2);
  console.log(diff)
  const result = stylish(diff);

  return result;
};

export default main;
