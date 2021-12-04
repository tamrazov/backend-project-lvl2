import yaml from 'js-yaml';

const parse = (file, format) => {
  let doc;

  if (format === '.yaml' || format === '.yml') {
    doc = yaml.load(file);
  } else {
    doc = JSON.parse(file);
  }

  return doc;
};

export default parse;
