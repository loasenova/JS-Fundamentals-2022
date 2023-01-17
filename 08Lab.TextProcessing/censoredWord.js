function censoredWord(string, word){

    while(string.includes(word)){
        string = string.replace(word, '*'.repeat(word.length));
    }
    console.log(string);
}
censoredWord('A small sentence with some words', 'small');