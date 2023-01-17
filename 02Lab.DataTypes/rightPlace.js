function rightPlace(str1, char, str2){

    let res = '';
    for(let i = 0; i < str1.length; i++){
        if(str1[i] != '_'){
            res += str1[i]
        }else{
            res += char;
        }
    }
    if(res == str2){
        console.log('Matched');
    }else{
        console.log('Not Matched');
    }
}
rightPlace('Str_ng', 'I', 'Strong');
rightPlace('Str_ng', 'i', 'String');
