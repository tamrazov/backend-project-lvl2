const replacer = ' ';
const spacesCount = 4;

const stringify = (value, startDepth = 1) => {
  const iter = (currentValue, depth) => {
    if (typeof currentValue !== 'object' || currentValue === null) {
      if (typeof value === 'string') {
        return `"${value}"`;
      }

      return `${value}`;
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

const json = (tree) => {
  const iter = (currentTree, depth) => {
    const lines = currentTree
      .flatMap(({
        type, children, value, key,
      }) => {
        switch (type) {
          case 'children':
            return `  "  ${key}": ${iter(children, depth + 1)}`;
          case 'changed':
            return [
              `  "- ${key}": ${stringify(value.value1, depth + 1)}`,
              `  "+ ${key}": ${stringify(value.value2, depth + 1)}`,
            ];
          case 'added':
            return `  "+ ${key}": ${stringify(value, depth + 1)}`;
          case 'deleted':
            return `  "- ${key}": ${stringify(value, depth + 1)}`;
          case 'unchanged':
            return `  "  ${key}": ${stringify(value, depth + 1)}`;
          default:
            throw new Error(`Unknown node type ${type}`);
        }
      });

    return `{\n${lines.join(',\n')}\n}`;
  };

  return iter(tree, 1);
};

export default json;
