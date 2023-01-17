function adressBook(input){

    let result = {};

    for(let line of input){
        let [name, addres] = line.split(":");
        result[name] = addres;
    }

    for(let name of Object.keys(result).sort()){
        console.log(name, "->", result[name]);
    }
}
adressBook(['Tim:Doe Crossing',
'Bill:Nelson Place',
'Peter:Carlyle Ave',
'Bill:Ornery Rd']);
console.log("_______");
adressBook(['Bob:Huxley Rd',
'John:Milwaukee Crossing',
'Peter:Fordem Ave',
'Bob:Redwing Ave',
'George:Mesta Crossing',
'Ted:Gateway Way',
'Bill:Gateway Way',
'John:Grover Rd',
'Peter:Huxley Rd',
'Jeff:Gateway Way',
'Jeff:Huxley Rd']);
