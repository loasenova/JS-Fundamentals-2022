function bonusSystem(input){
 
    let studentCount = Number(input.shift());
    let lecturesCount = Number(input.shift());
    let initialBonus  = Number(input.shift());
    let attendaceOfEachStudent = input.map(Number)
    let maxBonus = 0
    let maxLecures = 0
 
    for(let i = 0; i < studentCount; i++){
        let currentLecture =(attendaceOfEachStudent[i]);
        
    
        let currentBonus = currentLecture / lecturesCount * (5 + initialBonus);
        if(currentBonus > maxBonus){
            maxBonus = currentBonus;
            maxLecures = attendaceOfEachStudent[i];
            
            
        }
        
    }
    
    console.log(`Max Bonus: ${Math.ceil(maxBonus)}.`);
    console.log(`The student has attended ${maxLecures} lectures.`)
 
}