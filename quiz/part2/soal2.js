/*
Diberikan function meleeRangedGrouping yang menerima 1 parameter berupa string, implementasikan meleeRangedGrouping agar dapat menghasilkan multidimensional array seperti yang diminta.

Format string yang diberikan adalah: <nama_hero>-<tipe_hero>,<nama_hero>-<tipe-hero>, ...

Output yang diharapkan: [ [ <daftar_hero_dengan_tipe_ranged> ], [ <daftar_hero_dengan_tipe_melee> ] ]

Jika input adalah string kosong ('') maka return array kosong
*/

function meleeRangedGrouping (str) {
    //your code here
    let arr = [];
    let result = [];
    let noSpc = '';
    for (let i = 0; i <= str.length; i++) {
      if (str[i] === ',' || str[i] === '-' || str[i] === undefined) {
        arr.push(noSpc);
        noSpc = '';
        continue;
      }
      noSpc += str[i];
    }
    let ranged = [];
    let melee = [];
    for (let i = 1; i < arr.length; i += 2) {
      if (arr[i] === 'Ranged') {
        ranged.push(arr[i - 1]);
      } else {
        melee.push(arr[i - 1]);
      }
    }
    if (ranged.length === 0 && melee.length === 0) return result;
    result.push(ranged, melee);
    return result;
  }
  
  // TEST CASE
  
  console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
  // [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]
  
  console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
  // [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]
  
  console.log(meleeRangedGrouping('')); // []