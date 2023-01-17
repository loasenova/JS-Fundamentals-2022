function houseParty(array){

    let guestList = [];
    for(let command of array){
        let curCommand = command.split(" ");
        let name = curCommand[0];
        if(curCommand.length === 3){
            if(guestList.includes(name)){
                console.log(`${name} is already in the list!`)
            }else{
                guestList.push(name);
            }   
        }else{
            if(guestList.includes(name)){
                guestList.splice(name.indexOf(),1);
            }else{
                console.log(`${name} is not in the list!`);
            }
        }
    }
    console.log(guestList.join("\n"))
}
houseParty(['Allie is going!',
'George is going!',
'John is not going!',
'George is not going!']);
houseParty(['Tom is going!',
'Annie is going!',
'Tom is going!',
'Garry is going!',
'Jerry is going!']);