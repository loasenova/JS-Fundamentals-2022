function special(n){

    for(let num = 1; num <= n; num++){
        num = String(num);
        let sum = 0;

        for(let i = 0; i < num.length; i++){
            sum += Number(num[i]);
        }

    
        let isAmazing = false;

            if(sum == 5 || sum == 7 || sum == 11){
                isAmazing = true;  
            }
        

            if(isAmazing){
                console.log(`${num} -> True`);

            }else{
                console.log(`${num} -> False`);
            } 
        }  
    }  


special(15);