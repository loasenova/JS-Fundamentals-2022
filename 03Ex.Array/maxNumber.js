function maxNum(arr){

    let newArr = [];
    
    for(let i = 0; i < arr.length; i++){
        let isBiger = true;
        for(let j = i+1; j < arr.length; j++){
            if(arr[i] <= arr[j]){
                isBiger = false;
                break;
            }
        }
        if(isBiger){
            newArr.push(arr[i]);
        }
    }
    console.log(newArr.join(' '));
}
maxNum([1, 4, 3, 2]);
maxNum([14, 24, 3, 19, 15, 17]);
maxNum([41, 41, 34, 20]);
maxNum([27, 19, 42, 2, 13, 45, 48]);