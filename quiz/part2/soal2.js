/*
Diberikan function meleeRangedGrouping yang menerima 1 parameter berupa string, implementasikan meleeRangedGrouping agar dapat menghasilkan multidimensional array seperti yang diminta.

Format string yang diberikan adalah: <nama_hero>-<tipe_hero>,<nama_hero>-<tipe-hero>, ...

Output yang diharapkan: [ [ <daftar_hero_dengan_tipe_ranged> ], [ <daftar_hero_dengan_tipe_melee> ] ]

Jika input adalah string kosong ('') maka return array kosong
*/

function meleeRangedGrouping(str) {
  //your code here
  if (str === "") return [];
  const arr = str.split(",");
  //   return arr;
  let groupedHero = {};
  for (let weapon of arr) {
    let [, hero, category] = weapon.match(/(.+)-(.+)/);
    if (!groupedHero[category]) {
      groupedHero[category] = [];
    }
    groupedHero[category].push(hero);
  }
  return Object.values(groupedHero);
}

// TEST CASE

console.log(
  meleeRangedGrouping(
    "Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged"
  )
);
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

// console.log(
//   meleeRangedGrouping("Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged")
// );
// // [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

// console.log(meleeRangedGrouping("")); // []
