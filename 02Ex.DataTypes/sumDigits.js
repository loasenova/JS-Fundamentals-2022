function sumDigits(num){

    let sum = 0;
    let numToString = String(num);

    for(let i = 0; i < numToString.length; i++){
        sum += Number(numToString[i]);
    }
    console.log(sum);
}
sumDigits(97561);