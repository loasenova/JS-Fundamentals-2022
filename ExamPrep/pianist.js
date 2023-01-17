function pianist(input){

    let pieces = Number(input.shift());
    //console.log(pieces);
    let result = {};

    for(let i = 0; i < pieces; i++){

        let token = input.shift().split("|");
        let piece = token[0];
        let composer = token[1];
        let key = token[2];

        result[piece] = [composer, key];
    }

    while(input[0] !== "Stop"){

        let tokens = input.shift().split("|");
        //console.log(tokens);
        let command = tokens[0];

        if(command === "Add"){

            let piece = tokens[1];
            let composer = tokens[2];
            let key = tokens[3];

            if(!result.hasOwnProperty(piece)){
                result[piece] = [composer, key];
                console.log(`${piece} by ${composer} in ${key} added to the collection!`);
            }else{
                console.log(`${piece} is already in the collection!`);
            }
        }else if(command === "Remove"){

            let piece = tokens[1];
            if(result.hasOwnProperty(piece)){
                delete result[piece];
                console.log(`Successfully removed ${piece}!`);
            }else{
                console.log(`Invalid operation! ${piece} does not exist in the collection.`);
            }
        }else if(command === "ChangeKey"){

            let piece = tokens[1];
            let newKey = tokens[2];
            if(result.hasOwnProperty(piece)){
                result[piece][1] = newKey;
                console.log(`Changed the key of ${piece} to ${newKey}!`);
            }else{
                console.log(`Invalid operation! ${piece} does not exist in the collection.`);
            }
        }
    }

    for(let obj in result){
        console.log(`${obj} -> Composer: ${result[obj][0]}, Key: ${result[obj][1]}`);
    }
}
pianist([
    '3',
    'Fur Elise|Beethoven|A Minor',
    'Moonlight Sonata|Beethoven|C# Minor',
    'Clair de Lune|Debussy|C# Minor',
    'Add|Sonata No.2|Chopin|B Minor',
    'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
    'Add|Fur Elise|Beethoven|C# Minor',
    'Remove|Clair de Lune',
    'ChangeKey|Moonlight Sonata|C# Major',
    'Stop'  
  ]);