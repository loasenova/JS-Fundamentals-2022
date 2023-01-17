function countString(string, word){

    let words = string.split(" ");
    //console.log(words);
    let count = 0;
    for(let str of words){
        if(str === word){
            count++;
        }
    }
    console.log(count);
}
countString('This is a word and it also is a sentence',
'is');