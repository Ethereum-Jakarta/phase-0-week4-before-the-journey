/*
Diberikan function meleeRangedGrouping yang menerima 1 parameter berupa string, implementasikan meleeRangedGrouping agar dapat menghasilkan multidimensional array seperti yang diminta.

Format string yang diberikan adalah: <nama_hero>-<tipe_hero>,<nama_hero>-<tipe-hero>, ...

Output yang diharapkan: [ [ <daftar_hero_dengan_tipe_ranged> ], [ <daftar_hero_dengan_tipe_melee> ] ]

Jika input adalah string kosong ('') maka return array kosong
*/

function meleeRangedGrouping (str) {
    if (str === '') {
        return [];
    }

    let ranged = [];
    let melee = [];

    let hero = str.split(',');
    for (let i =0; i < hero.length; i++) {
        let heroData = hero[i].split('-');
        let heroNama = heroData[0];
        let heroTipe = heroData[1];

        if (heroTipe === 'Ranged') {
            ranged.push(heroNama);
        } else if (heroTipe === 'Melee') {
            melee.push(heroNama); 
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