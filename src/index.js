const readLine = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

const calculate = {
    "+": (x, y) => x + y,
    "-": (x, y) => x - y,
    "*": (x, y) => x * y,
    "/": (x, y) => x / y
}

// readLine.question() return user input as callback argument
readLine.question("Which operation do you want? ", (operation) => {
    // Object.keys() return every object's keys as an array: ["+", "-", "*", "/"]
    const allowedOperations = Object.keys(calculate);
    // array.includes() check if the passed parameter exists in the array, return true or false
    if (!allowedOperations.includes(operation)) throw new Error(`This operation is not allowed. Only ${allowedOperations} are allowed.`);

    readLine.question("Input the first number:", (inputX) => {
        // return x as an integer or null if not possible
        const x = parseInt(inputX) || null;
        if (!x) throw new Error("X is not a valid number.");

        readLine.question("Input the second number:", (inputY) => {
            const y = parseInt(inputY) || null;
            if (!y) throw new Error("Y is not a valid number.");

            const result = calculate[operation](x, y);
            console.log(`${x} ${operation} ${y} = ${result}`);

            readLine.close();
        });
    });
});
