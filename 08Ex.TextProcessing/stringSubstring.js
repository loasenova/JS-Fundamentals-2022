function stringSubstring(specialWord, text){

    let words = text.split(" ");
    //console.log(text);
    for(let word of words){
        if(specialWord.toLowerCase() === word.toLowerCase()){
            console.log(specialWord);
            return;
        }
    }

    console.log(`${specialWord} not found!`)
}
stringSubstring('javascript','JavaScript is the best programming language');
stringSubstring('python',
'JavaScript is the best programming language');