function spice(yield){

    let count = 0;
    let leaving = 0;

    while(yield >= 100){
        count++;
        leaving += yield - 26;
        yield -= 10;
    }

    console.log(count);
    if(count != 0){
        console.log(leaving - 26);
    }else{
        console.log(leaving);
    }
}
spice(111)