function firstAndLastKel(arr){

    let k = Number(arr.shift());

    console.log(arr.slice(0,k).join(" "));
    console.log(arr.slice(-k).join(" "));
}
firstAndLastKel([2, 
    7, 8, 9]);
firstAndLastKel([3,
    6, 7, 8, 9]);