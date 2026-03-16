/*
Diberikan function meleeRangedGrouping yang menerima 1 parameter berupa string, implementasikan meleeRangedGrouping agar dapat menghasilkan multidimensional array seperti yang diminta.

Format string yang diberikan adalah: <nama_hero>-<tipe_hero>,<nama_hero>-<tipe-hero>, ...

Output yang diharapkan: [ [ <daftar_hero_dengan_tipe_ranged> ], [ <daftar_hero_dengan_tipe_melee> ] ]

Jika input adalah string kosong ('') maka return array kosong
*/

function meleeRangedGrouping(str) {
  //your code here
  let temp = str.split(",");
  let result = [];
  let ranged = [];
  let melee = [];

  for (let i = 0; i < temp.length; i++) {
    let hasil = temp[i].split("-");
    let counts = {};
    hasil.forEach((x) => {
      counts[hasil[1]] = hasil[0];
    });
    if (counts.Ranged) {
      ranged.push(counts.Ranged);
    } else {
      melee.push(counts.Melee);
    }
  }
  result.push(ranged);
  result.push(melee);
  return str.length > 0 ? result : [];
}

// TEST CASE

console.log(
  meleeRangedGrouping(
    "Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged"
  )
);
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(
  meleeRangedGrouping("Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged")
);
// // [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping("")); // []
