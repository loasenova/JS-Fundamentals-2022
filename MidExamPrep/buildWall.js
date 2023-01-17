function buildAWall(arr) {
 
    let height = arr.map(Number);
    let crew = arr.length;
    let concreteAmount = [];
 
    while (crew !== 0) {
        let totalYards = 0;
        for (let i = 0; i < height.length; i++) {
            if (height[i] < 30) {
                totalYards += 195;
                height[i]++;
            }
            if (height[i] === 30) {
                crew--;
            }
        }
        concreteAmount.push(totalYards);
        let heightUnder30 = height.filter(x => x < 30);
        height = heightUnder30;
    }
 
    let sum = concreteAmount.reduce((sum, el) => {
        return sum + el;
    }, 0)
 
    let finalCost = sum * 1900;
 
    console.log(concreteAmount.join(', '));
    console.log(`${finalCost} pesos`);
}