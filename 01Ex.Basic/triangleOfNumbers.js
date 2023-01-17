function triangleOfNumbers(num){

    let string = "";
    if(num >= 1 && num <= 20){
        for(let i = 1; i <= num; i++){
            for(let j = 1; j <= i; j++){
                string += i + " ";
            }
            string += "\n";
        }
        console.log(string);
    } 
} 

triangleOfNumbers(5);