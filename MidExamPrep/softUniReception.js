function softUniReception(array){

    let first = Number(array[0]);
    let second = Number(array[1]);
    let third = Number(array[2]);
    let students = Number(array[3]);

    let employeeEfficiencyPerHour = first + second + third;

    let count = 0;
    while(students > 0){
        count++;
        if(count % 4 != 0){
            students -= employeeEfficiencyPerHour;
        }
        
    }

    console.log(`Time needed: ${count}h.`);
}
softUniReception(['5','6','4','20']);
softUniReception(['1','2','3','45']);
softUniReception(['3','2','5','40']);