function starEnigma(text){

    let messages = Number(text.shift());
    let pattern = /@([A-Z][a-z]+)[^@|!\-:>]*:\d+[^@|!\-:>]*!([AD])![^@|!\-:>]*->\d+/;
    let attacked = [];
    let destroyed = [];
    for(let i = 0; i < messages; i++){
        let encryptedMess = text[i];
        //console.log(encryptedMess);
        let count = encryptedMess
        .toLowerCase()
        .split("")
        .filter((char) => char === "s" || char === "t" || char === "a" || char === "r")
        .length;
        //console.log(count);
        let decryptedMess = encryptedMess
        .split("")
        .map((c) => String.fromCharCode(c.charCodeAt(0) - count))
        .join("");

        //console.log(decryptedMess);

        let matchReg = decryptedMess.match(pattern);
        if(matchReg){
            //console.log(matchReg);
            if(matchReg[2] === "A"){
                attacked.push(matchReg[1]);
            }else if(matchReg[2] === "D"){
                  destroyed.push(matchReg[1])
            }
        }
    }

    console.log(`Attacked planets: ${attacked.length}`);
    Object.entries(attacked)
    .sort((a,b) => a[1].localeCompare(b[1]))
    .forEach((p) => console.log(`-> ${p[1]}`));
    console.log(`Destroyed planets: ${attacked.length}`);
    Object.entries(destroyed)
    .sort((a,b) => a[1].localeCompare(b[1]))
    .forEach((p) => console.log(`-> ${p[1]}`));

    
}
starEnigma(['2',
'STCDoghudd4=63333$D$0A53333',
'EHfsytsnhf?8555&I&2C9555SR']);
starEnigma(['3',
    "tt(''DGsvywgerx>6444444444%H%1B9444",
    'GQhrr|A977777(H(TTTT',
    'EHfsytsnhf?8555&I&2C9555SR']);