/*
Diberikan function meleeRangedGrouping yang menerima 1 parameter 
berupa string, implementasikan meleeRangedGrouping agar dapat 
menghasilkan multidimensional array seperti yang diminta.

Format string yang diberikan adalah: <nama_hero>-<tipe_hero>,
<nama_hero>-<tipe-hero>, ...

Output yang diharapkan: [ [ <daftar_hero_dengan_tipe_ranged> ], 
[ <daftar_hero_dengan_tipe_melee> ] ]

Jika input adalah string kosong ('') maka return array kosong

1. Cek apakah 
*/




function meleeRangedGrouping (str) {
    //your code here
    if (str === '') {
      return [];
    }
    
    let ranged = [];
    let melee = [];

    let heroes = str.split(',');

    for (let i = 0; i < heroes.length; i++) {
      let herodata = heroes[i].split('-');
      let name = herodata[0];
      let type = herodata[1];

      if (type === 'Ranged') {
        ranged.push(name);
      } else if (type === 'Melee') {
        melee.push(name);
      }
    }

    return [ranged, melee];
    
  }
  
  // TEST CASE
  
  console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
  // [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]
  
  console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
  // [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]
  
  console.log(meleeRangedGrouping('')); // []
  


