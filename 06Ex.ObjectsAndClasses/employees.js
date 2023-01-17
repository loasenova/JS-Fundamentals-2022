function employees(array){

    let list = {};
    for(let employee of array){
        //console.log(employee);
            list.name = employee;
            list.personalNumber = Number(employee.length);
            console.log(`Name: ${list.name} -- Personal Number: ${list.personalNumber}`);
    }
}
employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ]);