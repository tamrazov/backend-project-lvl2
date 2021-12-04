import uniq from 'lodash.uniq';
import sortby from 'lodash.sortby';
import isobject from 'lodash.isobject';

const genDiff = (data1, data2) => {
  if (!data1 || !data2) {
    return [];
  }

  const keys = sortby(uniq([...Object.keys(data1), ...Object.keys(data2)]));
  const result = [];

  keys.forEach((key) => {
    switch (true) {
      case !(key in data1):
        result.push({ key, type: 'added', value: data2[key] });
        break;
      case !(key in data2):
        result.push({ key, type: 'deleted', value: data1[key] });
        break;
      case isobject(data1[key]) && isobject(data2[key]): {
        const children = genDiff(data1[key], data2[key]);
        result.push({ key, type: 'children', children });
        break;
      }
      case data1[key] === data2[key]:
        result.push({ key, type: 'unchanged', value: data1[key] });
        break;
      default:
        result.push({ key, type: 'changed', value: { value1: data1[key], value2: data2[key] } });
    }
  });

  return result;
};

export default genDiff;
