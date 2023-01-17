function convertToJson(firstName, lastName, hairColor){

    let person = {
        name : firstName,
        lastName : lastName,
        hairColor : hairColor
    }

   // let objToJson = JSON.stringify(person);
    console.log(JSON.stringify(person));
}
convertToJson('George', 'Jones', 'Brown');
convertToJson('Peter', 'Smith', 'Blond');