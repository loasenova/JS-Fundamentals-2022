function train(array){

    let wagonPassengers = array.shift().split(" ").map(Number);
    let maxCapacity = Number(array.shift());
    for(let command of array){
        let curCommand = command.split(" ");
        if(curCommand[0] === "Add"){
            wagonPassengers.push(curCommand[1]);
        }else{
            for(let i = 0; i < wagonPassengers.length; i++){
                if(Number(curCommand[0]) + wagonPassengers[i] <= maxCapacity){
                    wagonPassengers[i] += Number(curCommand[0]);
                    break;
                }
            }
            
        }
    }
    console.log(wagonPassengers.join(" "));

}
train(['32 54 21 12 4 0 23',
'75',
'Add 10',
'Add 0',
'30',
'10',
'75'])