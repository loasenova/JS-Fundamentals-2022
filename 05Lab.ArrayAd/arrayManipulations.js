function arrayManipulations(arr){

    let arrOfNumbers = arr.shift().split(" ").map(Number);

    for(let command of arr){
        let action = command.split(" ")[0];
        let element = command.split(" ")[1];

        switch (action){
            case "Add":
                arrOfNumbers.push(element);
                break;
            case "Remove":
                arrOfNumbers = arrOfNumbers.filter(x => x != element);
                break;
            case "RemoveAt":
                arrOfNumbers = arrOfNumbers.filter((x,i) => i != element);
                break;
            case "Insert":
                let index = command.split(" ")[2];
                arrOfNumbers.splice(index,0,element);
                break;

        }
    }

    console.log(arrOfNumbers.join(" "));
}
arrayManipulations((['4 19 2 53 6 43',
'Add 3',
'Remove 2',
'RemoveAt 1',
'Insert 8 3']))