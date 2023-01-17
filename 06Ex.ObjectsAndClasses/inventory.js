function inventory(array){

    let heroes =[];
    for(let hero of array){
        let heroName = hero.split(" / ")[0];
        //console.log(heroName);
        //console.log(hero)
        let heroLevel = Number(hero.split(" / ")[1]);
        //console.log(heroLevel);
        let heroItems = hero.split(" / ")[2];
        //console.log(heroItems);
        heroes.push({
            name: heroName,
            level: heroLevel,
            items: heroItems
        });
    }
    heroes.sort((a,b) => a.level - b.level);
    for(let hero of heroes){
        console.log(`Hero: ${hero.name}\nlevel => ${hero.level}\nitems => ${hero.items}`);
    }
}
inventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
    ]);