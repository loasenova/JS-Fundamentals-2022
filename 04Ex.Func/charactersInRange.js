function charactersInRange(char1, char2){

    let startChar = Math.min(char1.charCodeAt(0),char2.charCodeAt(0));
    let finishChar = Math.max(char2.charCodeAt(0),char1.charCodeAt(0));
    let arrayChars = [];

    for(let i = startChar + 1; i < finishChar; i++){
        arrayChars.push(String.fromCharCode(i));
    }
    console.log(arrayChars.join(" "));
}
charactersInRange("a","d");
charactersInRange('#',':');
charactersInRange('C','#')