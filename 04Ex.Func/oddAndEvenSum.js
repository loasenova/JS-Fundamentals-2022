function oddAndEvenSum(number){

    let numToString = String(number);
    let oddSum = 0;
    let evenSum = 0;

    for(let i = 0; i < numToString.length; i++){
        if((Number(numToString[i])) % 2 != 0){
            oddSum += Number(numToString[i]);
        }else{
            evenSum += Number(numToString[i]);
        }
    }

    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`)
}
oddAndEvenSum(1000435);
oddAndEvenSum(3495892137259234);