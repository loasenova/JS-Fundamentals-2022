function centuriesToMin(centuries){

    let years = centuries * 100;
    let days = Math.trunc(years*365.2422);
    let hours = days*24;
    let min = hours*60;

    console.log(`${centuries} centuries = ${years} years = ${days} days = ${hours} hours = ${min} minutes`);

}
centuriesToMin(1);
centuriesToMin(5);