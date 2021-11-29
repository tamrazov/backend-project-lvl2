const replacer = ' ';
const spacesCount = 4;
const signSize = 2;

const stringify = (value, startDepth = 1) => {
  const iter = (currentValue, depth) => {
    if (typeof currentValue !== 'object' || currentValue === null) {
      return `${currentValue}`;
    }

    const indentSize = depth * spacesCount;
    const currentIndent = replacer.repeat(indentSize);
    const bracketIndent = replacer.repeat(indentSize - spacesCount);
    const lines = Object
      .entries(currentValue)
      .map(([key, val]) => `${currentIndent}${key}: ${iter(val, depth + 1)}`);

    return [
      '{',
      ...lines,
      `${bracketIndent}}`,
    ].join('\n');
  };

  return iter(value, startDepth);
};

const getDefaultFormat = (tree) => {
  const iter = (currentTree, depth) => {
    const indentSize = depth * spacesCount - signSize;
    const currentIndent = replacer.repeat(indentSize);
    const bracketIndent = replacer.repeat(indentSize - signSize);

    const lines = currentTree
      .flatMap(({
        type, children, value, key,
      }) => {
        switch (type) {
          case 'children':
            return `${currentIndent}  ${key}: ${iter(children, depth + 1)}`;
          case 'changed':
            return [
              `${currentIndent}- ${key}: ${stringify(value.value1, depth + 1)}`,
              `${currentIndent}+ ${key}: ${stringify(value.value2, depth + 1)}`,
            ];
          case 'added':
            return `${currentIndent}+ ${key}: ${stringify(value, depth + 1)}`;
          case 'deleted':
            return `${currentIndent}- ${key}: ${stringify(value, depth + 1)}`;
          case 'unchanged':
            return `${currentIndent}  ${key}: ${stringify(value, depth + 1)}`;
          default:
            throw new Error(`Unknown node type ${type}`);
        }
      });

    return [
      '{',
      ...lines,
      `${bracketIndent}}`,
    ].join('\n');
  };

  return iter(tree, 1);
};

export default getDefaultFormat;
