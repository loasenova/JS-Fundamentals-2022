function revealWords(words, sentance){

    words = words.split(", ");
    //console.log(words);
    for(let word of words){
        sentance = sentance.replace("*".repeat(word.length), word);
    }
    console.log(sentance);
}
revealWords('great',
'softuni is ***** place for learning new programming languages');
revealWords('great, learning',
'softuni is ***** place for ******** new programming languages');