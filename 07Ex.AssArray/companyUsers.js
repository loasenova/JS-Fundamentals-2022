function companyUsers(array){

    let result = {};

    for(let line of array){
        let [company, id] = line.split("->");
        //console.log(company, id);
    

        if(!result.hasOwnProperty(company)){
            result[company] = [];
        }

        if(!result[company].includes(id)){
            result[company].push(id);
        }
    } 
    
    let sorted = Object.entries(result).sort((a,b) => a[0].localeCompare(b[0]));

    for(let [company, id] of sorted){
        console.log(company);
        for(let idNo of id){
            console.log(`--${idNo}`);
        }
    }
}
companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345'
    ]);

companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> CC12344',
    'Lenovo -> XX23456',
    'SoftUni -> AA12345',
    'Movement -> DD11111'
    ]);