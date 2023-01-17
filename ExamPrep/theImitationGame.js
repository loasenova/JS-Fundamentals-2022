function theImitationGame(input){

    let text = input.shift();

    while(input[0] != "Decode"){

        let tokens = input.shift().split("|");
        let command = tokens[0];
        let p1 = tokens[1];
        let p2 = tokens[2];
        //console.log(command, p1, p2);

        if(command === "Move"){
            p1 = Number(p1);
            let lettersToMove = text.slice(0, p1);
            let currText = text.slice(p1);
            text = currText + lettersToMove;
            //console.log(text);
        }else if(command === "Insert"){
            p1 = Number(p1);
            let left = text.slice(0,p1);
            let right = text.slice(p1);
            text = left + p2 + right;
            // console.log(text); 
        }else if(command === "ChangeAll"){
            //let result
            text = text.split(p1).join(p2);
            //text = result;
            //console.log(text);
        }
    }
    console.log(`The decrypted message is: ${text}`);
}
theImitationGame([
    'zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3',
    'Decode'
  ]);
theImitationGame([
    'owyouh',
    'Move|2',
    'Move|3',
    'Insert|3|are',
    'Insert|9|?',
    'Decode'
  ]);