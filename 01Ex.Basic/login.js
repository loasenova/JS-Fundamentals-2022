function login(input){

    let userName  = input[0];
    let password = userName.split("").reverse().join("");
    let count = 0;
    for(let i = 1; i < input.length; i++){
        
        if(password === input[i]){
            console.log(`User ${userName} logged in.`);
            break;
        }else{
            count++;
            if(count > 3){
                console.log(`User ${userName} blocked!`);
            }else{
            console.log(`Incorrect password. Try again.`);
            }
        }  
    }
}
login(['sunny','rainy','cloudy','sunny','not sunny'])