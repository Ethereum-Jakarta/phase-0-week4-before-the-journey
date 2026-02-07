/*
Diberikan function meleeRangedGrouping yang menerima 1 parameter berupa string, implementasikan meleeRangedGrouping agar dapat menghasilkan multidimensional array seperti yang diminta.

Format string yang diberikan adalah: <nama_hero>-<tipe_hero>,<nama_hero>-<tipe-hero>, ...

Output yang diharapkan: [ [ <daftar_hero_dengan_tipe_ranged> ], [ <daftar_hero_dengan_tipe_melee> ] ]

Jika input adalah string kosong ('') maka return array kosong
*/

function meleeRangedGrouping (str) {
  //your code here
  const hero = str.split(",");
  let pembagian = [];
  let [nama, tipe] = [];
  
  for (let i = 0; i < hero.length; i++) {
    [nama, tipe] = hero[i].split("-");
    pembagian.push([nama, tipe])
  }

  let grup = [[], []];
  for (let i = 0; i < pembagian.length; i++) {
    if (pembagian[i][1] === "Ranged") {
      grup[0].push(pembagian[i][0]);
    } else if (pembagian[i][1] === "Melee") {
      grup[1].push(pembagian[i][0]);
    }
  }

  if (str.length !== 0) {
    return grup;
  } else {
    return []
  }
}

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []