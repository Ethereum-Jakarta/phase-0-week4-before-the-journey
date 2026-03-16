/*
Diberikan function meleeRangedGrouping yang menerima 1 parameter berupa string, implementasikan meleeRangedGrouping agar dapat menghasilkan multidimensional array seperti yang diminta.

Format string yang diberikan adalah: <nama_hero>-<tipe_hero>,<nama_hero>-<tipe-hero>, ...

Output yang diharapkan: [ [ <daftar_hero_dengan_tipe_ranged> ], [ <daftar_hero_dengan_tipe_melee> ] ]

Jika input adalah string kosong ('') maka return array kosong
*/

function meleeRangedGrouping (str) {
    if (str.length === 0) return [];
      let range = [];
      let melee = [];
      let result = [];
      str = str.split(",");
      for (i = 0; i <= str.length -1; i++){
        strs = str[i];
        if (strs.indexOf("Ranged") !== -1){
          strs = String(strs);
          strs = strs.split("-");
          range.push(strs[0])
        } else {
          strs = String(strs);
          strs = strs.split("-");
          melee.push(strs[0])
        }
      }
      result.push(range);
      result.push(melee);
      return result;
    }
    
    // TEST CASE
    
    console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
    // [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]
    
    console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
    // [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]
    
    console.log(meleeRangedGrouping('')); // []