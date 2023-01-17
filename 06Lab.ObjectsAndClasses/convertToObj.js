function convertToObj(jsonString){

    let jsonToObj = JSON.parse(jsonString);

    //return jsonToObj;

    for(let key of Object.keys(jsonToObj)){
        console.log(`${key}: ${jsonToObj[key]}`);
    }
}
convertToObj('{"name": "George", "age": 40, "town": "Sofia"}');
convertToObj('{"name": "Peter", "age": 35, "town": "Plovdiv"}');