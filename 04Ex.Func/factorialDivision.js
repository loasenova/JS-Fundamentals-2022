function factorialDivision(num1,num2){

    let fact1 = 1;
    let fact2 = 1;
    for(let i = num1; i > 0; i--){
        fact1 *= i;
    }
    for(let j = num2; j > 0; j--){
        fact2 *= j;
    }

    let res = fact1/fact2;
    console.log(res.toFixed(2));

}
factorialDivision(5,2)