function bombNumbers(array, numbers){

    let bombNum = numbers[0];
    let bombPower = numbers[1];

    let bombIndex = array.indexOf(bombNum);
    for(let num of array){
        if(num === bombNum){
            array.splice(bombIndex - bombPower,bombPower * 2 + 1);
            bombIndex = array.indexOf(bombNum);
        }
    }

    let sum = 0;
    for(let el of array){
        sum += el;
    }
    console.log(sum);

}
bombNumbers([1, 2, 2, 4, 2, 2, 2, 9],
    [4, 2]);
bombNumbers([1, 4, 4, 2, 8, 9, 1],
    [9, 3]);
bombNumbers([1, 1, 2, 1, 1, 1, 2, 1, 1, 1],
[2, 1]);