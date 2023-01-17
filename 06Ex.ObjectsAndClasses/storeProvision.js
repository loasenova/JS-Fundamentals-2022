function storeProvision(currStock, orderedStock){

    let stocks = {};
    for(let i = 0; i < currStock.length; i += 2){
        let currProduct = currStock[i];
        stocks[currProduct] = Number(currStock[i +1]);
        //console.log(stocks);
    }
        for(let j = 0; j < orderedStock.length; j +=2){
            let currProduct = orderedStock[j];
            if(!stocks.hasOwnProperty(currProduct)){
                stocks[currProduct] = 0;
            }
            stocks[currProduct] += Number(orderedStock[j+1]);
        }
    for(let product in stocks){
        console.log(`${product} -> ${stocks[product]}`)
    }    

}
storeProvision([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
    'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]);