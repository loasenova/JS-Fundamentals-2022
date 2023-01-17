function wordsTracker(array){

    let result = {};
    let words = array.shift().split(" ");
    //console.log(words); 
    //console.log(array);
    for(let word of words){
        result[word] = 0;
    }
    for(let word of array){
        if(result.hasOwnProperty(word)){
            result[word]++;
        }
    }

    let entries = Object.entries(result);
    entries = entries.sort((a,b) => b[1] - a[1]);

    for(let [key, value] of entries){
        console.log(key, '-', value);
    }
}
wordsTracker([
    'this sentence', 
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurances', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
    ])