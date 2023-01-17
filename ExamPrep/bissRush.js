function bossRush(input){
 
    let inputCount = input.shift();
    let pattern = /(\|)(?<name>[A-Z]+)\1:#(?<title>[A-Za-z]+ [A-Za-z]+)#/g;
    
    //console.log(inputCount);
        for (let i = 0; i < inputCount; i++){
            let match;
            if (input[i].match(pattern)){
                match = pattern.exec(input[i]);
                console.log(`${match.groups.name}, The ${match.groups.title}`)
                console.log(`>> Strength: ${match.groups.name.length}`)
                console.log(`>> Armor: ${match.groups.title.length}`)
            }else{
                console.log(`Access denied!`)
            }
        }
    
}
bossRush((['3',
'|PETER|:#Lead architect#',
'|GEORGE|:#High Overseer#',
'|ALEX|:#Assistant Game Developer#']));