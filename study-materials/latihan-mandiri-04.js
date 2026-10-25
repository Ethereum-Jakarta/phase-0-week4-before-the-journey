//1. Bikin `myReduce(arr, callback, initialValue)` yang kerja kayak `.reduce()`
let myReduce = function (arr, callback, initialValue){
    let accumulator = initialValue;
    for(let i = 0; i < arr.length; i++){
        accumulator = callback(accumulator, arr[i]);
    }
    return accumulator;
}
let sumAll = function(accumulator,currentValue){
    return accumulator + currentValue;
}
let multiplyAll = function(accumulator, currentValue){
    return accumulator *currentValue;
}
let testArr = [1,2,3,4]
console.log(myReduce(testArr, sumAll, 0));
console.log(myReduce(testArr, multiplyAll, 1));



//2. Bikin function `operasi(a, b, callback)` yang nerima 2 angka dan callback. Test dengan callback tambah, kurang, kali, bagi
let operasi = function (a, b, callback){
    return callback(a,b);
}
let functionTambah = function(x,y){
    return x+y;
}
let functionKurang = function(x,y) {
    return x-y;
}
let functionKali = function(x,y) {
    return x*y;
}
let functionBagi = function(x,y){
    return x/y;
}
console.log(operasi(12, 4, functionTambah));
console.log(operasi(12, 4, functionKurang));
console.log(operasi(12, 4, functionKali));
console.log(operasi(12, 4, functionBagi));


//3. Bikin function `bikinGreeter(spikeSkill)` yang return function greeting. Contoh: `bikinGreeter("Halo")("Andi")` → "Halo, Andi!"
let bikinGreeter = function(pembuka){
    return function(nama){
        console.log(`${pembuka}, ${nama}`);
    }
}
bikinGreeter("Halo")("Andi")


//4. Bikin `compose(fn1, fn2)` yang return function baru: `compose(double, addOne)(5)` → `double(addOne(5))` → 12
let compose = function(fn1,fn2){
    console.log(fn1(2));
    console.log(fn2(3))
    return function(num){
        return fn1(fn2(num));
    };
}
let double = function (num) {return 2*num};
let addOne = function (num) {return num+1};
console.log(compose(double, addOne)(4));