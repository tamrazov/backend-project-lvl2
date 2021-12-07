import fs from 'fs';
import path from 'path';
import genDiff from '../index.js';

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), { encoding: 'utf-8' });

test('genDiff from json', () => {
  const output = readFile('expected_file.txt');
  const res = genDiff(getFixturePath('file1.json'), getFixturePath('file2.json'), 'stylish');

  expect(res).toBe(output);
});

test('genDiff from yaml', () => {
  const output = readFile('expected_file.txt');

  expect(genDiff(getFixturePath('file1.yml'), getFixturePath('file2.yml'), 'stylish')).toBe(output);
});

test('recursive genDiff', () => {
  const output = readFile('expected_recursive_file.txt');

  expect(genDiff(getFixturePath('file3.json'), getFixturePath('file4.json'), 'stylish')).toBe(output);
});

test('plain genDiff', () => {
  const output = readFile('expected_plain_file.txt');

  expect(genDiff(getFixturePath('file3.json'), getFixturePath('file4.json'), 'plain')).toBe(output);
});

test('json genDiff', () => {
  const jsonDiff = genDiff(getFixturePath('file1.json'), getFixturePath('file2.json'), 'json');

  expect(() => JSON.parse(jsonDiff)).not.toThrow();
});
