function sorting(array){

    let sortedArr = array.sort((a, b) => b - a);
    let newArr = [];
    while(sortedArr.length > 0){
        newArr.push(sortedArr.shift());
        newArr.push(sortedArr.pop());
    }
    console.log(newArr.join(" "));
}
sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);
sorting([34, 2, 32, 45, 690, 6, 32, 7, 19, 47]);