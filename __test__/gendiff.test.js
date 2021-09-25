import fs from 'fs';
import path from 'path';
import genDiff from '../index.js';

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

test('genDiff from fixtures', () => {
  const output = readFile('tt.json');

  expect(genDiff(getFixturePath('file1.json'), getFixturePath('file2.json'))).toBe(output);
});
