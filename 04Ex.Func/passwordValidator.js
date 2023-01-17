function password(charPass){

    function lengthChech(pass){
        if(pass.length >= 6 && pass.length <= 10){
            return true;
        }else{
            return false;
        }
    }

    function charactersCheck(pass){
        for(let i = 0; i < pass.length; i++){
            if(!((pass[i]).charCodeAt(0) >= 48 && (pass[i]).charCodeAt(0) <= 57) &&
               !((pass[i]).charCodeAt(0) >= 65 && (pass[i]).charCodeAt(0) <= 90) &&
               !((pass[i]).charCodeAt(0) >= 97 && (pass[i]).charCodeAt(0) <= 122)){
                    return false;
                }     
               }
            return true;
    }    


    function twoDigitsCheck(pass){
        let count = 0;
        for(let i = 0; i < pass.length; i++){
            if((pass[i]).charCodeAt(0) >= 48 && (pass[i]).charCodeAt(0) <= 57){
                count++;
            } 
        }
        if(count >= 2){
            return true;
        }else{
            return false;
        }
    }

    let validLengthChech = lengthChech(charPass);
    let validCharactersCheck = charactersCheck(charPass);
    let validTwoDigitsCheck = twoDigitsCheck(charPass);

    if(!validLengthChech){
        console.log("Password must be between 6 and 10 characters");
    }
    if(!validCharactersCheck){
        console.log("Password must consist only of letters and digits");
    }
    if(!validTwoDigitsCheck){
        console.log("Password must have at least 2 digits");
    }
    if(validLengthChech && validCharactersCheck && validTwoDigitsCheck){
        console.log("Password is valid");
    }

}
password("login");
password('MyPass123');
password('Pa$s$s');