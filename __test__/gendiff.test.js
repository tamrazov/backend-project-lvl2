import genDiff from '../index.js';
import { readFileSync } from 'fs';
const FIXTURES_BASE_DIR = `${__dirname}/__fixtures__`;

test('genDiff from fixtures', () => {
  const output = JSON.stringify(readFileSync(`${FIXTURES_BASE_DIR}/tt.json`, { encoding: 'utf-8' }));

  expect(genDiff(`${FIXTURES_BASE_DIR}/file1.json`, `${FIXTURES_BASE_DIR}/file2.json`)).toBe(output);
});
