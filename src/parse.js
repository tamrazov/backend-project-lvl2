import yaml from 'js-yaml';

const parse = (file, format) => {
  if (format === '.yaml' || format === '.yml') {
    return yaml.load(file);
  }

  switch (true) {
    case format === '.yaml' || format === '.yml':
      return yaml.load(file);
    case format === '.json':
      return JSON.parse(file);
    default:
      throw new Error(`Dont know format: ${format}`);
  }
};

export default parse;
