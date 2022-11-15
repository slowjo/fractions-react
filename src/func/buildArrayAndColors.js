export const buildFractionArray = (simpleArray) => {
    const outputArray = simpleArray.map((element) => {
        const innerArray = [];
    
        for (let j = 1; j <= element[1]; j++) {
            innerArray.push(1);
        }

        return innerArray;
    });

    return outputArray;
};

export const buildColorArray = (simpleArray) => {
    const outputArray = simpleArray.map((element) => {
        const innerArray = [];

        for (let i = 1; i <= element[1]; i++) {
            if (i <= element[0]) {
                innerArray.push('blue');
            } else {
                innerArray.push('grey');
            }
        };

        return innerArray;
    });

    return outputArray;
};

export const createNewFraction = () => {
    const a = Math.floor(Math.random() * 10 + 1);
    
    const b = Math.floor(Math.random() * 10 + 1);

    const outputArray = [[a, b]];

    while (outputArray[outputArray.length - 1][0] > outputArray[outputArray.length - 1][1]) {
        outputArray[outputArray.length - 1][0] = outputArray[outputArray.length - 1][0] - outputArray[outputArray.length - 1][1];
        outputArray.unshift([b, b]);
    }

    return {
        solution: [a, b],
        arrayForPie: outputArray,
    };
};