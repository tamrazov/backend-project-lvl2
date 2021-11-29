import path from 'path';
import { readFileSync } from 'fs';
import gendiff from './src/gendiff.js';
import parce from './src/parce.js';
import stylize from './src/formatters/stylize.js';

const getResult = (path1, path2, formatName) => {
  const file1 = readFileSync(path1, 'utf8');
  const file2 = readFileSync(path2, 'utf8');
  const data1 = parce(file1, path.extname(path1));
  const data2 = parce(file2, path.extname(path2));
  const diff = gendiff(data1, data2);
  const result = stylize(diff, formatName);

  return result;
};

export default getResult;
