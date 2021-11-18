const countDuplicates = (str) => {
    lowerStr = str.toLowerCase();
    countObj = {};
    let result = 0;
    for (const char of lowerStr){
        countObj[char]?
        countObj[char]++:
        countObj[char] = 1;
    }
    for (const char in countObj){
        if (countObj[char] > 1) {
            result++
        }
    }
    return result;
}

let test = "ABBA"


console.log(countDuplicates(test))