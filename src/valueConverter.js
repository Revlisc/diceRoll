export const valueConverter = (value) => {
    const points = [];
    for (let i = 0; i < value.length; i++) {
        switch (value === true) {
            case value[i] === 'one':
                points.push(1);
                break;
            case value[i] === 'two':
                points.push(2);
                break;
            case value[i] === 'three':
                points.push(3);
                break;
            case value[i] === 'four':
                points.push(4);
                break;
            case value[i] === 'five':
                points.push(5);
                break;
            case value[i] === 'six':
                points.push(6);
                break;
            default:
                break;
           
        }
    }
    
    return points;
}