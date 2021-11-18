const margedStr = (str1, str2) => {
    let newStr = str1 + str2;
    const arr = newStr.split("");
    let result = "";
    arr.sort();
    const reducer = (prevVal, curVal) => {
        if(!prevVal.includes(curVal)){
            prevVal.push(curVal)
        }
        return prevVal
    }


    const resultArr = arr.reduce(reducer,[])
    return resultArr.join("");
}

console.log(margedStr("ddddccc","aaazzzz"))