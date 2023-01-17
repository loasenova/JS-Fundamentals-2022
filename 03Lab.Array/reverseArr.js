function reverseArr(n,arr){

    let revArr = [];
    for(let i = n - 1; i >= 0; i--){

        revArr.push(arr[i]);
    }
    console.log(revArr.join(' '));
}
reverseArr(3, [10,20,30,40,50]);