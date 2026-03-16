## method array

1. arrayForEach(callback(currenValue, index, array), thisArg?)
thisArg → nilai this di dalam callback (opsional)

example : 
```js
const fruits = ["apple", "banana", "cherry"];

fruits.forEach(function(item, index, arr) {
  console.log(`${index} => ${item} (dari ${arr})`);
});
// 0 => apple (dari apple,banana,cherry)
// 1 => banana ...
```

2. array.map(callback(currentValue, index, array) thisArg?)
Sama dengan forEach, tapi mengembalikan array baru hasil transforma

example :
```js
const numbers = [1, 2, 3];
const doubled = numbers.map((num, index) => num * index);

console.log(doubled); // [0, 2, 6]
```

3. array.filter(callback(currentValue, index, array) thisArg? )
Sama parameternya dengan map, tapi hasilnya hanya elemen yang true pada kondisi.

examaple :
```js
const scores = [50, 70, 90];
const passed = scores.filter((val, index, arr) => val >= 70);

console.log(passed); // [70, 90]
```

4. array.reduce/reduceRight(callback(accumulator, currenValue, array))
Menggabungkan semua elemen array menjadi satu nilai (number, object, string, dll).

example :
```js
const numbers = [1, 2, 3, 4];

const sum = numbers.reduceRight((acc, val, idx) => {
  console.log(`Iterasi ${idx}: acc=${acc}, val=${val}`);
  return acc + val;
}, 0);

console.log(sum); // 10
```

5. sort(compareFn(a, b))
Argumen compareFn:
a, b → dua item yang dibandingkan.
return < 0 → a sebelum b
return > 0 → a setelah b
return 0 → posisi tidak berubah

```js
const nums = [40, 10, 30, 20];
nums.sort((a, b) => a - b); // ascending
console.log(nums); // [10,20,30,40]
```

6. includes(valueToFind, fromIndex = 0)
Argumen:
valueToFind → nilai yang dicari
fromIndex → mulai dari index berapa

```js
const fruits = ["apple","banana","cherry"];
console.log(fruits.includes("banana")); // true
```

7. slice(start, end)
Argumen:
start → index awal (inclusive)
end → index akhir (exclusive)

```js
const arr = [10,20,30,40,50];
console.log(arr.slice(1,4)); // [20,30,40]
```

8. splice(start, deleteCount, ...items)
Argumen:
start → index mulai
deleteCount → berapa item dihapus
items → item baru (opsional)

```js
const arr = [1,2,3,4];
arr.splice(2,1,99,100);
console.log(arr); // [1,2,99,100,4]
```