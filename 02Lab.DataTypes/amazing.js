function amazing(num){

    num = String(num);
    let sum = 0;

    for(let i = 0; i < num.length; i++){
        sum += Number(num[i]);
    }

    let res = String(sum);
    let isAmazing = false;

    for(let j = 0; j < res.length; j++){
        if(res[j] == '9'){
            isAmazing = true;  
        }
    }

        if(isAmazing){
            console.log(`${num} Amazing? True`);

        }else{
            console.log(`${num} Amazing? False`);
        }     

}
amazing(999);
