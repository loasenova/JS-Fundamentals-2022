function negativeOrPositive(arr){

    let newArr = [];
    
    for(let element of arr){
        if(element < 0){
            newArr.unshift(element);
        }else{
            newArr.push(element);
        } 
    }
    console.log(newArr.join('\n'));
}
negativeOrPositive(['7', '-2', '8', '9']);
negativeOrPositive(['3', '-2', '0', '-1']);