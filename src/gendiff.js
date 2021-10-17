import uniq from 'lodash.uniq';
import sortby from 'lodash.sortby';

const genDiff = (data1, data2) => {
  const keys = sortby(uniq([...Object.keys(data1), ...Object.keys(data2)]));
  let result = [];

  keys.forEach((key) => {
    switch (true) {
      case key in data1 && key in data2:
        if (data1[key] === data2[key]) {
          result.push({key, type: 'unchanged', value: data1[key]});
        } else {
          result.push({key, type: 'changed', value1: data1[key], value2: data2[key]})
        }
        break;
      case key in data1:
        result.push({key, type: 'deleted', value: data1[key]})
        break;
      case key in data2:
        result.push({key, type: 'added', value: data2[key]})
        break;
      case 'object':
        const children = genDiff(data1[key], data2[key]);
        result.push({key, type: 'children', children});
        break;
      default:
        throw new Error(`Unknown key - ${key}`);
    }
  })


  return result;
};

export default genDiff;
