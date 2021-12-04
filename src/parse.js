import yaml from 'js-yaml';

const parse = (file, format) => {
  if (format === '.yaml' || format === '.yml') {
    return yaml.load(file);
  }

  return JSON.parse(file);
};

export default parse;
