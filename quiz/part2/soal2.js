// Soal 2

/*
Diberikan function meleeRangedGrouping yang menerima 1 parameter berupa string, implementasikan meleeRangedGrouping agar dapat menghasilkan multidimensional array seperti yang diminta.

Format string yang diberikan adalah: <nama_hero>-<tipe_hero>,<nama_hero>-<tipe-hero>, ...

Output yang diharapkan: [ [ <daftar_hero_dengan_tipe_ranged> ], [ <daftar_hero_dengan_tipe_melee> ] ]

Jika input adalah string kosong ('') maka return array kosong
*/

function meleeRangedGrouping (str) {
  //your code here
  // Buat pengkondisian if seperti jika string kososng, kembalikan array kososng
  if(!str) return [];

 let result = [[], []];
 let hero = str.split(`,`);

 for(let i = 0; i < hero.length; i++) {
    let detail = hero[i].split(`-`);
    let nama_hero = detail[0];
    let tipe_hero = detail[1];

    if(tipe_hero === `Ranged`) {
        result[0].push(nama_hero);
    } else if(tipe_hero === `Melee`) {
        result[1].push(nama_hero);
    }
 }
 return result;
}

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []
