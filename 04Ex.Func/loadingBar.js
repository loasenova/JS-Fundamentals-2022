function loadingBar(percent){

    let loading = ["["];
    for(let i = 0; i < percent/10; i++){
        loading.push("%");
    }
    for(let j = percent/10; j < 10; j++){
        loading.push(".");
    }
    loading.push("]");

    if(percent === 100){
        console.log(`${percent}% Complete!`);
    }else{
        console.log(`${percent}% ${loading.join("")}`);
    }
    
    if(percent === 100){
        console.log(loading.join(""));
    }else{
        console.log("Still loading...");
    }
}
loadingBar(0);