function modernTimes(sentance){

    sentance = sentance.split(" ");
    //console.log(sentance);

    for(let word of sentance){
        if(word.startsWith("#") && word.length > 1){
           // if(){
                console.log(word.substring(1));
           // }   
        }
    }
}
modernTimes('Nowadays everyone uses # to tag a #special word in #socialMedia');
modernTimes('The symbol # is known #variously in English-speaking #regions as the  #number sign');