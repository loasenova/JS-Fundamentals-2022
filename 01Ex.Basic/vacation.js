function vacation(people, type, day){

    let studentsFridayPrice = 8.45;
    let studentsSaturdayPrice = 9.8;
    let studentsSundayPrice = 10.46;
    let businessFridayPrice = 10.9;
    let businessSaturdayPrice = 15.6;
    let businessSundayPrice = 16;
    let regularFridayPrice = 15;
    let regularSaturdayPrice = 20;
    let regularSundayPrice = 22.5;

    let studentDis = 0.15;
    let regularDis = 0.05;
    let price = 0;

    if(people >= 100 && type == "Business"){
        people -= 10;
    }

    if(type == "Students" && day == "Friday"){
        price = studentsFridayPrice * people;
        if(people >= 30){
            price = (studentsFridayPrice * people) - ((studentsFridayPrice * people) * studentDis);
        }
    }else if(type == "Students" && day == "Saturday"){
        price = studentsSaturdayPrice * people;
        if(people >= 30){
            price = (studentsSaturdayPrice * people) - ((studentsSaturdayPrice * people) * studentDis);
        }
    }else if(type == "Students" && day == "Sunday"){
        price = studentsSundayPrice * people;
        if(people >= 30){
            price =(studentsSundayPrice * people) - ((studentsSundayPrice * people) * studentDis);
        }
    }else if(type == "Regular" && day == "Friday"){
        price = regularFridayPrice * people;
        if(people >= 10 && people <= 20){
            price = (regularFridayPrice * people) - ((regularFridayPrice * people) * regularDis);
        }
    }else if(type == "Regular" && day == "Saturday"){
        price = regularSaturdayPrice * people;
        if(people >= 10 && people <= 20){
            price = (regularSaturdayPrice * people) - ((regularSaturdayPrice * people) * regularDis);
        }
    }else if(type == "Regular" && day == "Sunday"){
        price = regularSundayPrice * people;
        if(people >= 10 && people <= 20){
            price = (regularSundayPrice * people) - ((regularSundayPrice * people) * regularDis);
        }
    }else if(type == "Business" && day == "Friday"){
        price = businessFridayPrice * people;
    }else if(type == "Business" && day == "Saturday"){
        price = businessSaturdayPrice * people;
    }else if(type == "Business" && day == "Sunday"){
        price = businessSundayPrice * people;
    }

    console.log(`Total price: ${price.toFixed(2)}`);
}
vacation(30,
    "Students",
    "Sunday");
vacation(40,
    "Regular",
    "Saturday");