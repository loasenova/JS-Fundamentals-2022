function furniture(text){

    let totalSum = 0;
    
    console.log("Bought furniture:");

    for(let line of text){
        //console.log(line);
        if(line === "Purchase"){
            break;
        }
        let pattern = />>(?<name>[A-Za-z\s]+)<<(?<price>\d+(.\d+)?)!(?<quantity>\d+)/g;
        let result = pattern.exec(line);
        //console.log(result);
        if(result !== null){
            totalSum += Number(result.groups.price) * Number(result.groups.quantity);
            console.log(result.groups.name);
        }
    }
    console.log(`Total money spend: ${totalSum.toFixed(2)}`);
}
furniture(['>>Sofa<<312.23!3',
'>>TV<<300!5',
'>Invalid<<!5',
'Purchase']);