function biscuitFactory(input) {
      let numberOfBiscuitsPerDay = Number(input[0]);
      let countOfWorkers = Number(input[1]);
      let numberOfBiscuitsCompetingFactory = Number(input[2]);
    
      let sumBiscuits = 0;
    
      for (let index = 1; index <= 30; index++) {
        let currentDayBiscuit = numberOfBiscuitsPerDay * countOfWorkers;
        if (index % 3 === 0) {
          currentDayBiscuit = Math.floor(currentDayBiscuit * 0.75);
        }
    
        sumBiscuits += currentDayBiscuit;
      }
    
      console.log(`You have produced ${sumBiscuits} biscuits for the past month.`);
    
      let difference = sumBiscuits - numberOfBiscuitsCompetingFactory;
      let percentage = (difference / numberOfBiscuitsCompetingFactory) * 100;
    
      if (difference > 0) {
        console.log(`You produce ${percentage.toFixed(2)} percent more biscuits.`);
      } else {
        console.log(`You produce ${Math.abs(percentage).toFixed(2)} percent less biscuits.`);
      }
    }
    biscuitFactory(["78", "8", "16000"]);
    console.log("---");
    biscuitFactory(["65", "12", "26000"]);
    console.log("---");
    biscuitFactory(["163", "16", "67020"]);