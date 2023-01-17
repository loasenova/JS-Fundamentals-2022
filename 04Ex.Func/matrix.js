function matrix(number){

    for(let row = 0; row < number; row++){
        let newLine = [];
        for(let col = 0; col < number; col++){
            newLine.push(number);

        }
        console.log(newLine.join(" "));
    }
}
matrix(2)