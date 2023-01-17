function heroes(input){

    let heroesCount = Number(input.shift());
    //console.log(heroesCount);
    let heroes = {};

    for(let i = 0; i < heroesCount; i++){

        let token = input.shift().split(' ');
        let name = token[0];
        let hp = Number(token[1]);
        let mp = Number(token[2]);
        //console.log(token);
        heroes[name] = {
            hp,
            mp
        };
    }

    //console.log(hero);

    while(input[0] !== "End"){

        let tokens = input.shift().split(" - ");
        //console.log(tokens);
        let command = tokens[0];
        let name = tokens[1];
        let p1 = Number(tokens[2]);
        let p2 = tokens[3];

        let hero = heroes[name];
        
        if(command === "CastSpell"){
            if(hero.mp >= p1){
                hero.mp -= p1;
                console.log(`${name} has successfully cast ${p2} and now has ${hero.mp} MP!`)
            }else{
                console.log(`${name} does not have enough MP to cast ${p2}!`);
            }
        }else if(command === "TakeDamage"){
            hero.hp -= p1;
            if(hero.hp <= 0){
                delete heroes[name];
                console.log(`${name} has been killed by ${p2}!`)
            }else{
                console.log(`${name} was hit for ${p1} HP by ${p2} and now has ${hero.hp} HP left!`) }
        }else if(command === "Recharge"){
            let mp = Math.min(p1,(200 - hero.mp)); 
            hero.mp += mp;
            console.log(`${name} recharged for ${mp} MP!`);
        }else if(command === "Heal"){
            let hp = Math.min(p1,(100 - hero.hp)); 
            hero.hp += hp;
            console.log(`${name} healed for ${hp} HP!`)
        }
   }

   for(let heroData of Object.entries(heroes)){
       let name = heroData[0];
       let hero = heroData[1];
       console.log(name);
       console.log(`  HP: ${hero.hp}`);
       console.log(`  MP: ${hero.mp}`);
   }

}
heroes(["2",
    "Solmyr 85 120",
    "Kyrre 99 50",
    "Heal - Solmyr - 10",
    "Recharge - Solmyr - 50",
    "TakeDamage - Kyrre - 66 - Orc",
    "CastSpell - Kyrre - 15 - ViewEarth",
    "End"]);