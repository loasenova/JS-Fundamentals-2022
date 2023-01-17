function adAstra(input){

    let text = input[0];
    let pattern = /(\||#)(?<name>[A-Za-z\s]+)\1(?<date>\d{2}[/]\d{2}[/]\d{2})\1(?<cal>\d{1,5})\1/g;
    let totalCal = 0;
    let products = [];
    let match = pattern.exec(text);

    while(match != null){
        //console.log(match.groups);

        let item = match.groups["name"];
        let date = match.groups["date"];
        let calories = Number(match.groups["cal"]);

        totalCal += calories;
        products.push(`Item: ${item}, Best before: ${date}, Nutrition: ${calories}`);

        match = pattern.exec(text);
    }

    if(Math.floor(totalCal/2000) > 0){
        console.log(`You have food to last you for: ${Math.floor(totalCal/2000)} days!`);
            for(let product of products){
                console.log(product);
            }
    }else{
        console.log(`You have food to last you for: 0 days!`);
    }   
}
adAstra([
    '#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|'
    ]);
adAstra(['Hello|#Invalid food#19/03/20#450|$5*(@']);
adAstra(['$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|']);