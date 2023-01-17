function messManager(input){

    let result = {};
    //let sendReceived = [];
    let counter = 0;
    let capacity = Number(input.shift());



    while(input[0] !== "Statistics"){    

        let tokens = input.shift().split('=');
        let command = tokens[0];

        if(command === 'Add'){

            let username = tokens[1];
            let send = Number(tokens[2]);
            let received = Number(tokens[3]);
            let total = send + received;

            if(!result[username]){
                
                result[username] = total;
                
            }
        }else if(command === 'Message'){

            let sender = tokens[1];
            let receiver = tokens[2];

            if(result.hasOwnProperty(sender) && result.hasOwnProperty(receiver)){
                result[sender] = Number(result[sender]) + 1;
                result[receiver] = Number(result[receiver]) + 1;

                if(result[sender] >= capacity){
                    console.log(`${sender} reached the capacity!`);
                    delete result[sender];
                }
                if(result[receiver] >= capacity){
                    console.log(`${receiver} reached the capacity!`);
                    delete result[receiver];
                }
            }
        }else if(command === 'Empty'){

            let username = tokens[1];

            if(result[username]){
                delete result[username];
            }
            
            if(username === 'All'){
                result = {};
            }
        }
    }


    for(let key in result){
        counter++;
    }
    console.log(`Users count: ${counter}`);


    for(let user in result){
        console.log(`${user} - ${result[user]}`);
    }
}


messManager((["10",
"Add=Berg=9=0",
"Add=Kevin=0=0",
"Message=Berg=Kevin",
"Add=Mark=5=4",
"Statistics"]));
console.log("______________");
messManager((["20",
"Add=Mark=3=9",
"Add=Berry=5=5",
"Add=Clark=4=0",
"Empty=Berry",
"Add=Blake=9=3",
"Add=Michael=3=9",
"Add=Amy=9=9",
"Message=Blake=Amy",
"Message=Michael=Amy",
"Statistics"]));
console.log("______________");
messManager((["12",
"Add=Bonnie=3=5",
"Add=Johny=4=4",
"Empty=All",
"Add=Bonnie=3=3",
"Statistics"]));