function huntingGames(array) {
 
    let arrToNum = array.map(Number)
 
    let daysOfTheAdventure = arrToNum.shift()
    let numberOfPlayers = arrToNum.shift()
    let groupsEnergy = arrToNum.shift()
    let waterPerDayForOnePerson = arrToNum.shift()
    let foodPerDayForOnePerson = arrToNum.shift()
 
    let totalWater = daysOfTheAdventure * numberOfPlayers * waterPerDayForOnePerson
    let totalFood = daysOfTheAdventure * numberOfPlayers * foodPerDayForOnePerson
    let daysCount = 0 // това или i да взема за всеки втори ден като пият вода
    let isEnergyEmpty = false
 
    for (let i = 0; i < daysOfTheAdventure; i++) { // i <= daysOfTheAdventure??????
        groupsEnergy -= arrToNum[i]
        daysCount++
 
        if(groupsEnergy <= 0 ){
            isEnergyEmpty = true
            break
        }
 
        if (daysCount % 2 === 0) {
            totalWater *= 0.70
            groupsEnergy *= 1.05
        }
 
        if (daysCount % 3 === 0) {
            let currentFood = totalFood / numberOfPlayers
            totalFood -= currentFood
            groupsEnergy *= 1.1
        }
    }
 
 
 
    if(groupsEnergy > 0){
        console.log(`You are ready for the quest. You will be left with - ${groupsEnergy.toFixed(2)} energy!`)
    }
 
    if(isEnergyEmpty === true){
        console.log(`You will run out of energy. You will be left with ${totalFood.toFixed(2)} food and ${totalWater.toFixed(2)} water.`)
    }
 
}
huntingGames(["10",
"7",
"5035.5",
"11.3",
"7.2",
"942.3",
"500.57",
"520.68",
"540.87",
"505.99",
"630.3",
"784.20",
"321.21",
"456.8",
"330"])
 
huntingGames(["12",
"6",
"4430",
"9.8",
"5.5",
"620.3",
"840.2",
"960.1",
"220",
"340",
"674",
"365",
"345.5",
"212",
"412.12",
"258",
"496"])