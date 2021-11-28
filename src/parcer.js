import { readFileSync } from 'fs';
import yaml from 'js-yaml';

const parcer = (path, format = '.json') => {
  let doc;

  try {
    if (format === '.yaml' || format === '.yml') {
      doc = yaml.load(readFileSync(path, 'utf8')); // вынести это из этой логики чтение файла.
    } else {
      doc = JSON.parse(readFileSync(path, 'utf8'));
    }
  } catch (e) {
    console.log(e);
  }

  return doc;
};

export default parcer;
