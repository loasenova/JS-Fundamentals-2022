function cardGame(array){

    let result = {};
    let suits = {
        "C" : 1,
        "D" : 2,
        "H" : 3,
        "S" : 4

    };
    let faces = {
        1: 10,
        2: 2,
        3: 3,
        4: 4,
        5: 5,
        6: 6,
        7: 7,
        8: 8,
        9: 9,
        "J": 11,
        "Q": 12,
        "K": 13,
        "A": 14
          
    }; 

    for(let line of array){
        let [name, cards] = line.split(": ");
        cards = cards.split(", ");
        //console.log(name, cards);

        if(!result.hasOwnProperty(name)){

            result[name] = new Set();
        }

        for(let card of cards){
            result[name].add(card);
        }
    }

    for(let [name, cards] of Object.entries(result)){
        //console.log(name, cards)
        let power = 0;
        for(let card of cards){
            let facePower = faces[card[0]];
            let suitPower = suits[card.slice(-1)];
            power += facePower * suitPower;
        }

        console.log(`${name}: ${power}`);
    }

}
cardGame([
    'Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD'
    ]);