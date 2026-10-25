/*
Diberikan function meleeRangedGrouping yang menerima 1 parameter berupa string, implementasikan meleeRangedGrouping agar dapat menghasilkan multidimensional array seperti yang diminta.

Format string yang diberikan adalah: <nama_hero>-<tipe_hero>,<nama_hero>-<tipe-hero>, ...

Output yang diharapkan: [ [ <daftar_hero_dengan_tipe_ranged> ], [ <daftar_hero_dengan_tipe_melee> ] ]

Jika input adalah string kosong ('') maka return array kosong
*/

function meleeRangedGrouping(str) {
    //your code here
    let retArr = [];
    let meleeArr = [];
    let rangedArr = [];
    let strArr = str.split(",");
    for (let item of strArr) {
        if (item.split('-')[1] == 'Ranged') {
            rangedArr.push(item.split('-')[0]);
        }
        else if (item.split('-')[1] == 'Melee') {
            meleeArr.push(item.split('-')[0]);
        }
    }
    if(str == ''){
        return retArr;
    }
    else{
        retArr.push(rangedArr);
        retArr.push(meleeArr);
        return retArr;
    }

}

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []