function manOWar(array) {
 
    let PirateShip = array.shift().split('>').map(Number)
    let warShip = array.shift().split('>').map(Number)
    let health = array.shift().split().map(Number)
 
    let isValid = (index, arr) => index >= 0 && index < arr.length
    let isDead=false
 
    for (let line of array) {
        let [command, ...elements] = line.split(' ')   
        if (command === 'Retire') {
            break
        }
        else if (command === 'Fire') {
            let index = Number(elements[0])
            let damage = Number(elements[1])
            if (isValid(index, warShip)) {
 
                 warShip[index] -= damage
                if (warShip[index] <= 0) {
                    isDead=true
                    console.log(`You won! The enemy ship has sunken.`);
                    break
                }
            }
        } else if (command === 'Defend') {
            let index = Number(elements[0])
            let index2 = Number(elements[1])
            let damage = Number(elements[2])
 
            if (isValid(index, PirateShip)) {
                if (index2 < PirateShip.length && index2 >= 0) {
                    for (let i = index; i <= index2; i++) {
                        PirateShip[i] -= damage
                        if (PirateShip[i] <= 0) {
                            isDead=true
                            console.log(`You lost! The pirate ship has sunken.`);
                            break
                        }
                    }
 
                }
 
            }
        } else if (command === 'Repair') {
            let index = Number(elements[0])
            let index2 = Number(elements[1])
            if (isValid(index, PirateShip)) {
 
                if ((PirateShip[index] + index2) < health) {
 
                    PirateShip[index] += index2
                } else {
                    PirateShip[index] = health
                }
 
            }
 
        } else if (command === 'Status') {
 
            let sumWar = 0
            for (let k = 0; k < warShip.length; k++) {
                sumWar += warShip[k]
            }
 
            let countPirate=0
            let sumPirate=0
            for(let g=0; g<PirateShip.length;g++){
                sumPirate+=PirateShip[g]
                if(PirateShip[g]<health*0.2){
                    countPirate++
                }
            }
            console.log(`${countPirate} sections need repair.`);
 
        }
    }
if(!isDead){
   let pointsPirate= PirateShip.reduce((sum,el)=>Number(sum+el),0)
    console.log(`Pirate ship status: ${pointsPirate}`);
    let warPoints=warShip.reduce((sum,el)=>sum+el,0)
    console.log(`Warship status: ${warPoints}`);
}
 
}