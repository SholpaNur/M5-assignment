// ADD A FUNCTION CALLED CALCULATE
let calculate = (x, y, operation) => {
    let result;
    switch (operation) {
        case '+':
            result = x + y;
            break;
        case '-':
            result = x - y;
            break;
        case '*':
            result = x * y;
            break;
        case '/':
            result = x / y;
            break;
    }
    return result;
}

let mainLoop = () => {
    while (true) {
        let x = parseFloat(prompt('enter first number'))
        let y = parseFloat(prompt('enter second number'))
        let operation = prompt('enter operation from +, -, *, /')
        if (['+', '-', '*', '/'].indexOf(operation) !== -1) {
            alert(`${x} ${operation} ${y} = ${calculate(x, y, operation)}`)
            break
        }
    }
}

mainLoop()

// COLLECT FIRST NUMBER FROM USER


// COLLECT SECOND NUMBER FROM USER


// COLLECT OPERATION TO PERFORM (+,-,*,/) FROM USER


// CALL THE FUNCTION AND RETURN THE RESULT WITHIN AN ALERT
