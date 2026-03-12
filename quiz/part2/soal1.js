
// Soal 1

/*
Diberikan function attack(), damageCalculation().

Function damageCalculation() akan menerima 2 parameter yaitu numberOfAttacks dan damagePerAttack
Function attack() akan menerima 1 parameter yaitu damage
[IMPLEMENTASI] Gunakan function damageCalculation() untuk menghitung damage yang diterima dan gunakan function attack() untuk mensimulasikan setiap attack dengan rumus damage - 2 disetiap attack.

[CONTOH] damageCalculation(3, 10) akan mengembalikan nilai 24

Karena attack akan dikurangi 2, maka setiap attack akan menghasilkan damage 8
*/

function attack (damage) {
  // Code disini
  // kurangi nilai damage sebanaya -2 dan kembalikan
  return damage - 2;
}

function damageCalculation (numberOfAttacks, damagePerAttack) {
  // Code disini
  // buat variable result untuk menyimpan hasil
  let result = 0;

  // buat for loop untuk memangil attack sebanyak numberOfAttacks
  for(let i = 0; i < numberOfAttacks; i++) {
    // pangil function attack dan masukan
    result += attack(damagePerAttack);
  }

  // return varaible result
  return result;
}

// TEST CASE
console.log(damageCalculation(9, 25)); // 207

console.log(damageCalculation(10, 4)); // 20

console.log(damageCalculation(5, 20)); // 90
