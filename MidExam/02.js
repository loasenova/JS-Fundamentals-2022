function coffeeLover(array){

    let coffeeTypes = array.shift().split(" ");
    //console.log(coffeeTypes);
    let commandsCount = Number(array.shift());
    //console.log(commandsCount);

    for(let i = 0; i < commandsCount; i++){
        let commands = array[i].split(" ");
        //console.log(commands);
        let command = commands[0];
        if(command === "Include"){
            coffeeTypes.push(commands[1]);
        }else if(command === "Remove"){
            if(commands[1] === "first"){
                coffeeTypes.splice(0,commands[2]);
            }else{
                coffeeTypes.splice(-commands[2]);
            }
            if(coffeeTypes.length <= commands[2]){
                break;
            }
        }else if(command === "Prefer"){
            if((commands[1] >= 0 && commands[1] <= coffeeTypes.length) && (commands[2] >= 0 && commands[2] <= coffeeTypes.length)){
                let tempIndex = coffeeTypes[commands[1]];
                coffeeTypes[commands[1]] = coffeeTypes[commands[2]];
                coffeeTypes[commands[2]] = tempIndex;
            }else{
                break;
            }
        }else if(command === "Reverse"){
            coffeeTypes = coffeeTypes.reverse();
        }
    }
    
    console.log(`Coffees:\n${coffeeTypes.join(" ")}`);

}
coffeeLover(["Arabica Liberica Charrieriana Magnistipula Robusta BulkCoffee StrongCoffee", "5", "Include TurkishCoffee", "Remove first 2", "Remove last 1", "Prefer 3 1", "Reverse"]);