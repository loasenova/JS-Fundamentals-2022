function arrayModifier(array){

    let arrayNum = array.shift().split(" ").map(Number);

    for(let command of array){

        let curCommand = command.split(" ");

        if(curCommand[0] === "end"){
            break;
        }else if(curCommand[0] === "swap"){
            let y = arrayNum[curCommand[1]];
            arrayNum[curCommand[1]] = arrayNum[curCommand[2]];
            arrayNum[curCommand[2]] = y;

        }else if(curCommand[0] === "multiply"){
            let result = arrayNum[curCommand[1]] * arrayNum[curCommand[2]]
            arrayNum[curCommand[1]] = result;

        }else if(curCommand[0] === "decrease"){
            arrayNum = arrayNum.map((x) => x - 1);
        }
    }
   console.log(arrayNum.join(", "));
}
arrayModifier([
    '23 -2 321 87 42 90 -123',
    'swap 1 3',
    'swap 3 6',
    'swap 1 0',
    'multiply 1 2',
    'multiply 2 1',
    'decrease',
    'end'
  ]);
arrayModifier([
    '1 2 3 4',
    'swap 0 1',
    'swap 1 2',
    'swap 2 3',
    'multiply 1 2',
    'decrease',
    'end'
  ]);