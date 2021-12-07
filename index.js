import path from 'path';
import { readFileSync } from 'fs';
import genDiff from './src/gendiff.js';
import parse from './src/parse.js';
import stylize from './src/formatters/stylize.js';

const getResult = (path1, path2, formatName = 'stylish') => {
  const file1 = readFileSync(path1, 'utf8');
  const file2 = readFileSync(path2, 'utf8');
  const data1 = parse(file1, path.extname(path1));
  const data2 = parse(file2, path.extname(path2));
  const diff = genDiff(data1, data2);
  const result = stylize(diff, formatName);

  return result;
};

export default getResult;
