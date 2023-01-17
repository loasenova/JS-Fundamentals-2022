function schoolGrade(input){

    let map = new Map();

    for(let line of input){
        let tokens = line.split(" ");
        let name = tokens.shift();
        let grades = tokens.map(Number);

        if(!map.has(name)){
            map.set(name, []);
        }

        let existing = map.get(name);
        for(let grade of grades){
            existing.push(grade);
        }
    }

    let sorted = Array.from(map).sort();

    for(let [name, grades] of sorted){
        let avr = 0;
        for(let grade of grades){
            avr += grade;
        }
        avr /= grades.length;
        console.log(`${name}: ${avr.toFixed(2)}`);
    }
}
schoolGrade(['Lilly 4 6 6 5',
'Tim 5 6',
'Tammy 2 4 3',
'Tim 6 6']);