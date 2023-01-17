function cookingMasterclass(array){

    let budget = Number(array[0]);
    let students = Number(array[1]);
    let flourPrice = Number(array[2]);
    let eggPrice = Number(array[3]);
    let apronPrice = Number(array[4]);

    let eggsPerStudent = eggPrice * 10;
    let percent = Number(Math.ceil(students * 1.2));
    let apronPercent = apronPrice * percent;
    let eggsForEverybody = eggsPerStudent * students;

    let discount = 0;

    for(let i = 1; i <= students; i++){
        if(i % 5 == 0){
            discount++;
        }
    }

    let flour = (flourPrice * students) - (flourPrice * discount);

    totalPrice = flour + eggsForEverybody + apronPercent;
    
    if(budget >= totalPrice){
        console.log(`Items purchased for ${totalPrice.toFixed(2)}$.`)
    }else{
        let diff = Math.abs(budget - totalPrice);
        console.log(`${diff.toFixed(2)}$ more needed.`);
    }
}
cookingMasterclass([50, 2, 1.0, 0.10, 10.0]);

