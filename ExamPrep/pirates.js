function pirates(input){

    let targets = {};
    let linesOfInput = input.shift();

    while(linesOfInput != "Sail"){

        let lines = linesOfInput.split("||");
        //console.log(lines);
        let city = lines[0];
        let population = lines[1];
        let gold = lines[2];

        if(!targets.hasOwnProperty(city)){
            targets[city] = [Number(population), Number(gold)];
        }else{
            targets[city][0] += Number(population);
            targets[city][1] += Number(gold);
        }
        linesOfInput = input.shift();
    }
    //console.log(targets);
    linesOfInput = input.shift();

    while(linesOfInput != "End"){
        let lines = linesOfInput.split("=>");
        let command = lines[0];
        let city = lines[1];
        let people = lines[2];
        let gold = lines[3]; 

        if(command === "Plunder"){

            targets[city][0] -= Number(people);
            targets[city][1] -= Number(gold);
            console.log(`${city} plundered! ${gold} gold stolen, ${people} citizens killed.`);

            if(targets[city][0] <= 0 || targets[city][1] <= 0){

                delete targets[city];
                console.log(`${city} has been wiped off the map!`);
            }
        }else if(command === "Prosper"){

            let amountOfGold = Number(people);
            if(amountOfGold > 0){
                targets[city][1] += amountOfGold;
                console.log(`${amountOfGold} gold added to the city treasury. ${city} now has ${targets[city][1]} gold.`)
            }else{
                console.log("Gold added cannot be a negative number!");
            }
        }

        linesOfInput = input.shift();
    }

    let settlements = Object.keys(targets).length;
    if(settlements > 0){
        console.log(`Ahoy, Captain! There are ${settlements} wealthy settlements to go to:`);
        for(let obj in targets){
            console.log(`${obj} -> Population: ${targets[obj][0]} citizens, Gold: ${targets[obj][1]} kg`);
        }
    }else{
        console.log(`Ahoy, Captain! All targets have been plundered and destroyed!`);
    }
}
pirates((["Tortuga||345000||1250",
"Santo Domingo||240000||630",
"Havana||410000||1100",
"Sail",
"Plunder=>Tortuga=>75000=>380",
"Prosper=>Santo Domingo=>180",
"End"]));
pirates((["Nassau||95000||1000",
"San Juan||930000||1250",
"Campeche||270000||690",
"Port Royal||320000||1000",
"Port Royal||100000||2000",
"Sail",
"Prosper=>Port Royal=>-200",
"Plunder=>Nassau=>94000=>750",
"Plunder=>Nassau=>1000=>150",
"Plunder=>Campeche=>150000=>690",
"End"]));