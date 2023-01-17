function bar(text){

    let total = 0;
    for(let line of text){

        let pattern = /%(?<name>[A-Z][a-z]+)%[^|$%.]*<(?<product>\w+)>[^|$%.]*?\|(?<quantity>\d+)\|[^|$%.]*?(?<price>\d+(.\d+)?)\$/g;
        let result = pattern.exec(line);
        //console.log(result.groups);
        if(result !== null){
            let totalPrice = Number(result.groups.quantity) * Number(result.groups.price);
            console.log(`${result.groups.name}: ${result.groups.product} - ${totalPrice.toFixed(2)}`);
            total += totalPrice;
        }else if(line === "end of shift"){
            console.log(`Total income: ${total.toFixed(2)}`);
        }
    }

}
bar(['%George%<Croissant>|2|10.3$',
'%Peter%<Gum>|1|1.3$',
'%Maria%<Cola>|1|2.4$',
'end of shift']);
bar(['%InvalidName%<Croissant>|2|10.3$',
'%Peter%<Gum>1.3$',
'%Maria%<Cola>|1|2.4',
'%Valid%<Valid>valid|10|valid20$',
'end of shift']);