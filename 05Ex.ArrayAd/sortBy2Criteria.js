function sortBy2Criteria(array){

    let lengthSort = array.sort((a, b) => a.length - b.length || a.localeCompare(b));
    console.log(lengthSort.join("\n"))

}
sortBy2Criteria(['alpha', 'beta', 'gamma']);
sortBy2Criteria(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']);