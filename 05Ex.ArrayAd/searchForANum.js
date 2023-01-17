function searchForANum(array, input){

    let numToTake = input[0];
    let numToDel = input[1];
    let numToSearch = input[2];

    let newArr = array.splice(0,numToTake);
    newArr.splice(0,numToDel);

    let count = 0; 
    for(let el of newArr){
        if(el === numToSearch){
            count++;
        }
    }

    console.log(`Number ${numToSearch} occurs ${count} times.`)
}
searchForANum([5, 2, 3, 4, 1, 6],
    [5, 2, 3]);
searchForANum([7, 1, 5, 8, 2, 7],
    [3, 1, 5]);