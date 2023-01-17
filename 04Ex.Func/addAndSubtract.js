function addAndSubtract(num1,num2,num3){

    function sum(n1,n2){
        return n1 + n2;
    }

    function subtract(result,n3){ 
        return result - n3;
    }

    let result = sum(num1,num2);
    let finalResult = subtract(result,num3);
    console.log(finalResult);
}
addAndSubtract(1,17,30)