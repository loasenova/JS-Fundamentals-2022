function lastKnumSequence(n,k){

    let result = [1];

    for(let i = 1; i < n; i++){
       let lastK = result.slice(-k);
       let sum = 0;
       for(let curr of lastK){
            sum += curr;
       }
            result.push(sum);   
        
    }
    console.log(result.join(" "));
}
lastKnumSequence(6,3);