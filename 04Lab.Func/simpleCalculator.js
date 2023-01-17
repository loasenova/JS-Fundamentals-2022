function simpleCalculator(num1,num2,operation){

    let result = 0;
    switch(operation){
        case "multiply":
            result = num1 * num2;
            break;
        case "divide":
            result = num1 / num2;
            break;
        case "add":
            result = num1 + num2;
            break;
        case "subtract":
            result = num1 - num2;
            break;
    }
    console.log(result);
}
simpleCalculator(5,
    5,
    'multiply');
simpleCalculator(40,
    8,
    'divide');
simpleCalculator(12,
    19,
    'add');
simpleCalculator(50,
    13,
    'subtract');