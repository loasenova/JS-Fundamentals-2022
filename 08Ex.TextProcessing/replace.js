function replace(text){

    let unique = "";
    for(let i = 0; i < text.length; i++){
        let currChar = text.charAt(i);
        //console.log(currChar);
        let nextChar = text.charAt(i + 1);
        if(currChar !== nextChar){
            unique += currChar;
        }
    }
    console.log(unique);
}
replace('aaaaabbbbbcdddeeeedssaa');
replace('qqqwerqwecccwd');