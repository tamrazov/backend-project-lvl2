import path from 'path';
import gendiff from './gendiff.js';
import parcer from './parcer.js';

const main = (path1, path2) => {
  const data1 = parcer(path1, path.extname(path1));
  const data2 = parcer(path2, path.extname(path2));
  const diff = gendiff(data1, data2)

  return gendiff(data1, data2);
};

export default main;
