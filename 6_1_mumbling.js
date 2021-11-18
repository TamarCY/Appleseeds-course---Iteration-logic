
// abcd => A-Bb-Ccc-Dddd
const accum = (str) => {
    let result = "";
    let arr = str.split("");
    console.log(arr[0]);
    arr.forEach((element, index) => {
        let currChar = element [0];
        result += (currChar.toUpperCase());
        currChar = currChar.toLowerCase();
        for (let i = 0; i < index; i++){
            result += currChar;
        }
        if (index < str.length - 1){
            result += '-';
        }
    });
    return result;
}

console.log(accum("RqaEzty"))

