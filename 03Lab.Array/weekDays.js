function weekDays(day){

    if(day < 1 || day > 7){
        console.log('Invalid day!');
    }else{
    let index = day - 1;
    let days = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
    console.log(days[index]); 
    }
}
weekDays(5)