export const valueConverter = (value) => {
    const points = [];
    for (let i = 0; i < value.length ; i++) {
        if (value[i] === 'one') {
            points.push(1);
        } else if (value[i] === 'two') {
            points.push(2);
        } else if (value[i] === 'three') {
            points.push(3);
        } else if (value[i] === 'four') {
            points.push(4);
        } else if (value[i] === 'five') {
            points.push(5);
        } else {
            points.push(6);
            console.log("DEFAULT WAS PUSHED");
        }
        /*
        switch (value === true) {
            case (value[i] === 'one'):
                console.log(value[i], ' was pushed')
                points.push(1);
                break;
            case (value[i] === 'two'):
                points.push(2);
                break;
            case (value[i] === 'three'):
                points.push(3);
                break;
            case (value[i] === 'four'):
                points.push(4);
                break;
            case (value[i] === 'five'):
                points.push(5);
                break;
            case (value[i] === 'six'):
                points.push(6);
                break;
            default:
                break;
           
        }
        */
    }
    
    return points;
}