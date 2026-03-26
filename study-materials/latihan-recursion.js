// Latihan 1
function factorial(n) {
    if (n === 0) {
        return 1;
    }
    return n * factorial(n - 1);
}

console.log(factorial(5));


// Latihan 2
function sumTo(n) {
    if (n === 1) {
        return 1;
    }
    return n + sumTo(n - 1);
}

console.log(sumTo(3));

// Latihan 3
function lengthRecursive(arr) {
    if (arr.length === 0) {
        return 0;
    }
    return 1 + lengthRecursive(arr.slice(1));
}

console.log(lengthRecursive([2,3,4,3,2,4]));

// Latihan 4
function maxRecursive(arr) {
    if (arr.length === 1) {
        return arr[0];
    }

    let maxRest = maxRecursive(arr.slice(1));
    return arr[0] > maxRest ? arr[0] : maxRest;
}



// Latihan 5
function reverseString(str) {
    if (str === '') {
        return ''; 
    }
    return reverseString(str.slice(1)) + str[0];
} 

console.log(reverseString('Permainan'));



