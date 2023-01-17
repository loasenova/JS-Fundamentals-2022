function partyTime(array){

    let vip = new Set();
    let regular = new Set();

    while(array[0] != "PARTY"){
        let guest = array.shift();
        if(Number.isNaN(Number(guest[0]))){
            regular.add(guest);
        }else{
            vip.add(guest);
        }
    }

    for(let guest of array){
        vip.delete(guest);
        regular.delete(guest);
    }

    console.log(vip.size + regular.size);
    for(let guest of vip){
        console.log(guest);
    }
    for(let guest of regular){
        console.log(guest);
    }
}
partyTime(['7IK9Yo0h',
'9NoBUajQ',
'Ce8vwPmE',
'SVQXQCbc',
'tSzE5t0p',
'PARTY',
'9NoBUajQ',
'Ce8vwPmE',
'SVQXQCbc'
]);