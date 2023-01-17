function messageManager2(input){
    let array = {};
    let sendRec = [];
    let counter = 0;
    let capacity = Number(input.shift());
 
    for(let lines of input){
        let [ command, username, send, received ] = lines.split('=');
        if(command === 'Add'){
            if(!array[username]){
                sendRec = [];
                array[username] = sendRec;
                sendRec.push(send, received);
            }
        } else if(command === 'Message'){
            if(array.hasOwnProperty(username) && array.hasOwnProperty(send)){
                array[username][0] = Number(array[username][0]) + 1;
                array[send][0] = Number(array[send][0]) + 1;
                if(array[username][0]+Number(array[username][1]) >= capacity){
                    console.log(`${username} reached the capacity!`);
                    delete array[username];
                }
                if(array[send][0]+Number(array[send][1]) >= capacity){
                    console.log(`${send} reached the capacity!`);
                    delete array[send];
                }
            }
        } else if(command === 'Empty'){
            if(array[username]){
                delete array[username];
            } else if(username === 'All'){
                array = {
                };
            }
        }
    }
 
    for(let key in array){
        counter++;
    }
    console.log(`Users count: ${counter}`);
       let printed= Object.entries(array).forEach((element) => {
            console.log(`${element[0]} - ${Number(element[1][0]) + Number(element[1][1])}`);
        })
 
}
messageManager2(["20",
"Add=Mark=3=9",
"Add=Berry=5=5",
"Add=Clark=4=0",
"Empty=Berry",
"Add=Blake=9=3",
"Add=Michael=3=9",
"Add=Amy=9=9",
"Message=Blake=Amy",
"Message=Michael=Amy",
"Statistics"]);