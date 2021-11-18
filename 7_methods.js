let arr = ["c", "Big", "true", "33", "Dog", "El"]

const usingForEach = (array) => {
let result = "";
 array.forEach(element => {
    result+= element + "@"
})
    return result
}

console.log(usingForEach(arr))

const usingFilter = (arr) => arr.filter((word)=>(word[0].toUpperCase() === word[0]))

console.log(usingFilter(arr))


const usingMap = (arr) => {
    const result = arr.map(element => (element.length > 2? element: element.toUpperCase()+"!"))
    return result
}


console.log (usingMap(arr))
