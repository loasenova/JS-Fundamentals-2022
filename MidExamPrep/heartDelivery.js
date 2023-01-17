function heartDelivery(array){

    let houses = array.shift().split("@").map(Number);
    let cupid = 0;

    while(array[0] != "Love!"){

        let commands = array.shift().split(" ");
        let jump = Number(commands[1]);

        cupid += jump;

        if(cupid >= houses.length){
            cupid = 0;
        }

        if(houses[cupid] == 0){
            console.log(`Place ${cupid} already had Valentine's day.`);
        }else{
            houses[cupid] -= 2;
            if(houses[cupid] == 0){
                console.log(`Place ${cupid} has Valentine's day.`);
            }
        }
    }

    let missed = 0;
    for(let house of houses){
        if(house > 0){
            missed++;
        }
    }

    console.log(`Cupid's last position was ${cupid}.`);
    if(missed > 0){
        console.log(`Cupid has failed ${missed} places.`);
    }else{
        console.log("Mission was successful.");
    }
}
heartDelivery(["10@10@10@2",
"Jump 1",
"Jump 2",
"Love!"]);
heartDelivery(["2@4@2",
"Jump 2",
"Jump 2",
"Jump 8",
"Jump 3",
"Jump 1",
"Love!"]);