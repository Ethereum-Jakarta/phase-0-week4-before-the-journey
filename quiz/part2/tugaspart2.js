/*
Diberikan function attack(), damageCalculation().

Function damageCalculation() akan menerima 2 parameter yaitu numberOfAttacks dan damagePerAttack
Function attack() akan menerima 1 parameter yaitu damage
[IMPLEMENTASI] Gunakan function damageCalculation() untuk menghitung damage yang diterima 
dan gunakan function attack() untuk mensimulasikan setiap attack dengan rumus damage - 2 disetiap attack.

[CONTOH] damageCalculation(3, 10) akan mengembalikan nilai 24

Karena attack akan dikurangi 2, maka setiap attack akan menghasilkan damage 8
*/

function attack (damage) {
  // Code disini

  return damage - 2 
}

function damageCalculation (numberOfAttacks, damagePerAttack) {
  // Code disini
  let damagePerAttack1 = attack(damagePerAttack);

  return numberOfAttacks * damagePerAttack1;
}

// TEST CASE
console.log(damageCalculation(9, 25)); // 207

console.log(damageCalculation(10, 4)); // 20

console.log(damageCalculation(5, 20)); // 90

/*
Diberikan function meleeRangedGrouping yang menerima 1 parameter berupa string, implementasikan meleeRangedGrouping agar dapat menghasilkan multidimensional array seperti yang diminta.

Format string yang diberikan adalah: <nama_hero>-<tipe_hero>,<nama_hero>-<tipe-hero>, ...

Output yang diharapkan: [ [ <daftar_hero_dengan_tipe_ranged> ], [ <daftar_hero_dengan_tipe_melee> ] ]

Jika input adalah string kosong ('') maka return array kosong
*/

function meleeRangedGrouping (str) {
  //your code here

  if (str.length == 0 ) {
    return []
  }

  let jadikanAray = str.split(",")
  // console.log(jadikanAray);

  let ranged = []
  let mele = []

  for (let i = 0; i < jadikanAray.length; i++) {
    let kelas = jadikanAray[i].split("-")

    if ( kelas.length == "2") {
      let hero = kelas[0]
      let tipeHero = kelas[1]

      if (tipeHero == "Ranged") {
        ranged.push(hero);
      }else if (tipeHero == "Melee") {
        mele.push(hero)
      }else {
        if (i < jadikanAray.length) {
        penyimpanan.push(ranged)
        penyimpanan.push(mele)
      }}
    }
  }

  return [ranged,mele];
}

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// // [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []
