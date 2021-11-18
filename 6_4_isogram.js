const isIsogram = (str) => {
    const arr = str.toLowerCase().split("");
    arr.sort();
    let prev = arr[0];
    for ( let i = 1; i < arr.length; i++ ){
        console.log(arr[i])
        if ( arr[i] === prev) {
            return false;
        }
        prev = arr[i];
    }
    return true; 
}

console.log(isIsogram("Ddermatolgypp"));