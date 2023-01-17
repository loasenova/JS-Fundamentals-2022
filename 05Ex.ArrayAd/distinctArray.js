function distinctArray(array){

    for(let i = 0; i < array.length; i++){
        let curNum = array[i];
        for(let j = i + 1; j < array.length; j++){
            let secondNum = array[j];
            if(curNum === secondNum){
                array.splice(j,1);
                j = j - 1;
            }
        }
    }
    console.log(array.join(" "));
}
distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2]);
distinctArray([20, 8, 12, 13, 4, 4, 8, 5]);