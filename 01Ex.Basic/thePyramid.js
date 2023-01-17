function thePyramid(base,increment){

    let steps = 1;
    let stones = 0;
    let marble = 0;
    let lapisLazuli = 0;
    let gold = 0;

    for(let i=base; i>=1; i-=2){
        if(i > 2){

            if(steps % 5 == 0){
                lapisLazuli += ((i*i) - ((i - 2)*(i - 2)))*increment;
            }else{
                marble += ((i*i) - ((i - 2)*(i - 2)))*increment;
            }

            steps++; 

            stones += ((i - 2)*(i - 2))*increment;
        }else{
            gold = (i*i)*increment;
        }
        
    }

    
    console.log(`Stone required: ${Math.ceil(stones)}`);
    console.log(`Marble required: ${Math.ceil(marble)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapisLazuli)}`);
    console.log(`Gold required: ${Math.ceil(gold)}`);
    console.log(`Final pyramid height: ${Math.floor(steps*increment)}`);
}
thePyramid(23,0.5)