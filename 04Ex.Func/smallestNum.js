function smallest(num1,num2,num3){
    let smallestNum = 1000000;

    if(num1 <= num2){
        smallestNum = num1;
        if(num1 >= num3){
            smallestNum = num3;
        }
    }else{
        smallestNum = num2;
        if(num2 >= num3){
            smallestNum = num3;
        }
    }
    console.log(smallestNum);
}
smallest(3,2,1)