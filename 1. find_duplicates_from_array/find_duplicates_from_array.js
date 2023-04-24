/**
 * returns duplicates from an array 
 */
function findDuplicates(inputArray) {
    let inputHashMap = {};
    let dupplicates = [];

    for (let i=0; i < inputArray.length; i++) {
        if (inputHashMap[inputArray[i]]) {
            dupplicates.push(inputArray[i]);
        } else {
            inputHashMap[inputArray[i]] = inputArray[i];
        }
    }

    return dupplicates;
}

const testData = [[4,3,2,7,8,2,3,1], [1,1,2], [1]]
// invoking solution for each test data item
testData.forEach(d => {
    console.log(findDuplicates(d));
})