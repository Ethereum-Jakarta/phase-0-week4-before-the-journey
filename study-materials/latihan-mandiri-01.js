//1. Bikin `sumDigits(n)` yang jumlahkan semua digit.Contoh: `sumDigits(1234)` → 10
function sumDigits(num){
    let numString = String(num);
    if(numString.length <= 1 ){
        return num;
    }
    return Number(String(num)[0]) + sumDigits(Number(numString.slice(1)));
}
console.log(sumDigits(1234));

//2. Bikin `countDown(n)` yang print n sampai 0 secara rekursif
function countDown(n){
    console.log(n);
    if(n>0){
        countDown(n-1);
    }
}
countDown(10)

//3. Bikin `flattenArray(arr)` yang ratakan nested array pakai recursion
function flattenArray(arr){
    let retArr = [];
    arr.forEach(element => {
        if(Array.isArray(element)){
            retArr = [...retArr, ...flattenArray(element)]; //kalau ternyata element disini masih array, kita pecah lalu merge dengan array utama
        }
        else{
            retArr.push(element); //kalau element disini data primer langsung aja push
        }
    });
    return retArr;
}
console.log(flattenArray([[1, 2, [1, 3]], 3, 4]));
console.log(flattenArray([
    [
        [4, 5, 6],
        [9, 1, 2, 10],
        [9, 4, 3]
    ],
    [
        [4, 14, 31],
        [9, 10, 18, 12, 20],
        [1, 4, 90]
    ],
    [
        [2, 5, 10],
        [3, 4, 5],
        [2, 4, 5, 10]
    ]
]))


//4. Bikin `power(base, exp)` tapi yang handle exponent negatif juga
function power(base, exponent) {
    if (exponent === 0) return 1;  // base case: apapun^0 = 1
    else if(exponent >=0){
        return base * power(base, exponent - 1);
    }
    else{
        return 1 / (base * power(base, -exponent - 1));
    }
}
console.log(power(2,-5));