function minerTask(array){

    let result = {};

    for(let index = 0; index < array.length; index+=2){

        //console.log(array[index]);
        let resourse = array[index];
        let quantity = array[index+1];
        quantity = Number(quantity);
        if(!result.hasOwnProperty(resourse)){
            result[resourse] = quantity;
        }else{
            result[resourse] += quantity;
        }
        
    }

    for(let [resourse, quantity] of Object.entries(result)){
        console.log(`${resourse} -> ${quantity}`);
    }

}
minerTask([
    'Gold',
    '155',
    'Silver',
    '10',
    'Copper',
    '17'
    ]);
minerTask([
    'gold',
    '155',
    'silver',
    '10',
    'copper',
    '17',
    'gold',
    '15'
    ]);