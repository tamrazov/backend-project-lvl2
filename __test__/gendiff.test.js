import fs from 'fs';
import path from 'path';
import genDiff from '../src/index.js';

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

test('genDiff from json', () => {
  const output = fs.readFileSync(getFixturePath('expected_file.txt'), { encoding: 'utf-8' });
  const res = genDiff(getFixturePath('file1.json'), getFixturePath('file2.json'));

  expect(res).toBe(output);
});

test('genDiff from yaml', () => {
  const output = fs.readFileSync(getFixturePath('expected_file.txt'), { encoding: 'utf-8' });

  expect(genDiff(getFixturePath('file1.yml'), getFixturePath('file2.yml'))).toBe(output);
});

test('recursive genDiff', () => {
  const output = fs.readFileSync(getFixturePath('expected_recursive_file.txt'), { encoding: 'utf-8' });

  expect(genDiff(getFixturePath('file3.json'), getFixturePath('file4.json'))).toBe(output);
});

test('plain genDiff', () => {
  const output = fs.readFileSync(getFixturePath('expected_plain_file.txt'), { encoding: 'utf-8' });

  expect(genDiff(getFixturePath('file3.json'), getFixturePath('file4.json'), 'plain')).toBe(output);
});

test('json genDiff', () => {
  const output = fs.readFileSync(getFixturePath('expected_json_file.json'), { encoding: 'utf-8' });

  expect(genDiff(getFixturePath('file1.json'), getFixturePath('file2.json'), 'json')).toBe(output);
});
