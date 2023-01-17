function addAndSubtract(arr){

    let newArr = [];
    let sum = 0;
    let newSum = 0;
    for(let i = 0; i < arr.length; i++){
        sum += arr[i];
        if(arr[i] % 2 !== 0){
            arr[i] -= i;
        }else{
            arr[i] += i;
        }
        newArr.push(arr[i]);
    }
    for(let j = 0; j < newArr.length; j++){
        newSum += newArr[j];
    }

    console.log(newArr);
    console.log(sum);
    console.log(newSum);
}
addAndSubtract([5, 15, 23, 56, 35]);
addAndSubtract([-5, 11, 3, 0, 2]);