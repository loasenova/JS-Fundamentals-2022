function towns(array){

    let cities = {};
    for(let city of array){
        let town = city.split(" | ");
       // console.log(town);
        cities.town = town[0];
        cities.latitude = Number(town[1]).toFixed(2);
        cities.longitude = Number(town[2]).toFixed(2);
        console.log(cities);
    }
    
}
towns(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625']);