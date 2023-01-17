function palindromeIntegers(arrayOfNumbers){

    for(let i = 0; i < arrayOfNumbers.length; i++){
        if(String(arrayOfNumbers[i]) == String(arrayOfNumbers[i]).split("").reverse().join(""))
            {
                console.log(true);
            }else{
                console.log(false);
            }    
    }
}
palindromeIntegers([123,323,421,121]);
palindromeIntegers([32,2,232,1010]);