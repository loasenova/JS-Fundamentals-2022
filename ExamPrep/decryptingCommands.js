function decryptingCommands(input){

    let text = input.shift();
    //console.log(text);
    //console.log(input[0]);

    while(input[0] !== "Finish"){

        let tokens = input.shift().split(" ");
        let command = tokens[0];
        //console.log(tokens);
        //console.log(command);

        if(command === "Replace"){

            let currChar = tokens[1];
            let newChar = tokens[2];
            if(text.includes(currChar)){
                text = text.split(currChar).join(newChar);
                console.log(text);
            }else{
                console.log(text);
            }
            
        }else if(command === "Cut"){

            let startIndex = Number(tokens[1]);
            let endIndex = Number(tokens[2]) + 1;

            if((startIndex >= 0 && startIndex < text.length) 
            && (endIndex >= 0 && endIndex < text.length)){

                let left = text.slice(0,startIndex);
                let right = text.slice(endIndex);
                text = left + right;
                console.log(text);
            }else{
                console.log("Invalid indices!");
            }

        }else if(command === "Make"){

            let style = tokens[1];
            if(style === "Upper"){
                text = text.toUpperCase();
                console.log(text);
            }else if(style === "Lower"){
                text = text.toLowerCase();
                console.log(text);
            }

        }else if(command === "Check"){

            let str = tokens[1];
            if(text.includes(str)){
                console.log(`Message contains ${str}`);
            }else{
                console.log(`Message doesn't contain ${str}`);
            }

        }else if(command === "Sum"){

            let startIndex = Number(tokens[1]);
            let endIndex = Number(tokens[2]) + 1;

            if((startIndex >= 0 && startIndex < text.length) 
            && (endIndex >= 0 && endIndex < text.length)){
                let substr = text.substring(startIndex,endIndex);
                //console.log(substr);
                let sum = 0;
                for(let char of substr){
                    sum += Number(char.charCodeAt());
                }
                console.log(sum);
            }else{
                console.log("Invalid indices!");
            }
        }
    }

}
decryptingCommands((["ILikeSoftUni",
"Replace I We",
"Make Upper",
"Check SoftUni",
"Sum 1 4",
"Cut 1 4",
"Finish"]));