function signCheck(num1,num2,num3){

    let result = ' ';
    if(num1 >= 0){
        if(num2 >= 0){
            if(num3 >= 0){
                result = 'Positive';
            }else{
                result = "Negative";
            }
        }else{
            if(num3 >= 0){
                result = "Negative";
            }else{
                result = "Positive"
            }
        }
    }else{
        if(num2 >= 0){
            if(num3 >= 0){
                result = "Negative";
            }else{
                result ="Positive";
            }
        }else{
            if(num3 >= 0){
                result = "Positive";
            }else{
                result ="Negative";
            }    
        }
    }
    console.log(`${result}`);
}
signCheck( 5,
    12,
   -15);
signCheck(-6,
    -12,
     14);
signCheck(-1,
    -2,
    -3);
signCheck(-5,
    1,
    1);