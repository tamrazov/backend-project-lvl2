


const stylish = (data) => {
    let result = '{\n';

    for (let item of data) {
        switch(true) {
            case item.type === 'deleted':
                result += `  - ${item.key}: ${item.value}\n`;
                break;
            case item.type ===  'unchanged':
                result += `  ${item.key}: ${item.value}\n`;
                break;
            case item.type === 'added':
                result += `  + ${item.key}: ${item.value}\n`;
                break;
            case item.type === 'changed':
                result += `  +- ${item.key}: ${item.value1}\n`;
                break;  
            default:
                throw new Error(`dont know type ${item.type}`)
        }
    }

    return `${result}}`;
}

export default stylish;