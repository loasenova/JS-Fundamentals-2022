function piccolo(array){

    let result = new Set();

    for( let line of array){
        let cars = line.split(", ");
        //console.log(line);
        //console.log(cars[0]);
        //console.log(cars[1]);
        if(cars[0] === "IN"){
            result.add(cars[1]);
        }else{
            result.delete(cars[1]);
        }
    }

    if(result.size === 0){
        console.log("Parking lot is Empty")
    }else{
        let parking = Array.from(result).sort();
        for(let car of parking){
            console.log(car);
        }  
    }
    
}
piccolo(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'IN, CA9999TT',
'IN, CA2866HI',
'OUT, CA1234TA',
'IN, CA2844AA',
'OUT, CA2866HI',
'IN, CA9876HH',
'IN, CA2822UU']);