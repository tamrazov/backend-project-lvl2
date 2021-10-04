import fs from 'fs';
import path from 'path';
import genDiff from '../index.js';

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

test('genDiff from json', () => {
  const output = fs.readFileSync(getFixturePath('expected_file.txt'), { encoding: 'utf-8' });

  expect(genDiff(getFixturePath('file1.json'), getFixturePath('file2.json'))).toBe(output);
});

test('genDiff from yaml', () => {
  const output = fs.readFileSync(getFixturePath('expected_file.txt'), { encoding: 'utf-8' });

  expect(genDiff(getFixturePath('file1.json'), getFixturePath('file2.json'))).toBe(output);
});
