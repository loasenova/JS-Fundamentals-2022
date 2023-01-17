function oddOccur(array){

    let result = {};

    let words = array.split(" ");
    //console.log(words);

    for(let word of words){
        word = word.toLocaleLowerCase();
        if(result.hasOwnProperty(word)){
            result[word]++;
        }else{
            result[word] = 1;
        }    
    }

    let filtered = Object.entries(result).filter(([word, count]) => {
        if(count % 2 == 1){
            return true;
        }else{
            return false;
        }
    });
 
    console.log(filtered.map(entry => entry[0]).join(" "));
    
}
oddOccur('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');