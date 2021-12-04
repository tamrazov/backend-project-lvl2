import uniq from 'lodash.uniq';
import sortby from 'lodash.sortby';
import isobject from 'lodash.isobject';

const genDiff = (data1, data2) => {
  if (!data1 || !data2) {
    return [];
  }

  const keys = sortby(uniq([...Object.keys(data1), ...Object.keys(data2)]));

  return keys.map((key) => {
    switch (true) {
      case !(key in data1):
        return { key, type: 'added', value: data2[key] };
      case !(key in data2):
        return { key, type: 'deleted', value: data1[key] };
      case isobject(data1[key]) && isobject(data2[key]): {
        const children = genDiff(data1[key], data2[key]);
        return { key, type: 'children', children };
      }
      case data1[key] === data2[key]:
        return { key, type: 'unchanged', value: data1[key] };
      default:
        return { key, type: 'changed', value: { value1: data1[key], value2: data2[key] } };
    }
  });
};

export default genDiff;
