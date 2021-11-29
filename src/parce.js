import yaml from 'js-yaml';

const parce = (file, format = '.json') => {
  let doc;

  try {
    if (format === '.yaml' || format === '.yml') {
      doc = yaml.load(file);
    } else {
      doc = JSON.parse(file);
    }
  } catch (e) {
    console.log(e);
  }

  return doc;
};

export default parce;
