function wordOccur(input){

    let result = {};

    for(let word of input){
        
        if(!result.hasOwnProperty(word)){
            result[word] = 1;
        }else{
            result[word]++;
        }
    }

    let entries = Object.entries(result);
    entries.sort((a,b) => b[1] - a[1]);
    for(let [word, count] of entries){
        console.log(`${word} -> ${count} times`);
    }

}
wordOccur(["Here", 
"is", 
"the", 
"first", 
"sentence", 
"Here", 
"is", 
"another", 
"sentence", 
"And", 
"finally", 
"the", 
"third", 
"sentence"]);