function chatLogger(array){

    let newArr = [];

    for(let i = 0; i < array.length; i++){
        let commands = array[i].split(" ");
        let command = commands[0];

        if(command === "Chat"){
            newArr.push(commands[1]);
        }else if(command === "Delete"){
            if(newArr.indexOf(commands[1]) >= 0){
                newArr.splice(newArr.indexOf(commands[1]),1);
            }
        }else if(command === "Edit"){
            if(newArr.indexOf(commands[1]) >= 0){
                newArr.splice(newArr.indexOf(commands[1]),1,commands[2]);
            }
        }else if(command === "Pin"){
            if(newArr.indexOf(commands[1]) >= 0){
                let pin = newArr.splice(newArr.indexOf(commands[1]),1).toString();
                newArr.push(pin);
            }
        }else if(command === "Spam"){
            for(let i = 1; i < commands.length; i++){
                newArr.push(commands[i]);
            }
        }else if(command === "end"){
            break;
        }
    }

    console.log(newArr.join("\n"))
}
chatLogger(["Chat Hello", "Chat darling", "Edit darling Darling", "Spam how are you", "Delete Darling", "end"]);
chatLogger(["Chat John",
    "Spam Let's go to the zoo",
    "Edit zoo cinema",
    "Chat tonight",
    "Pin John",
    "end"])