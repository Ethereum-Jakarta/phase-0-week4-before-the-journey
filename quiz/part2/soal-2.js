/*
Diberikan function meleeRangedGrouping yang menerima 1 parameter berupa string, 
implementasikan meleeRangedGrouping agar dapat menghasilkan multidimensional array seperti yang diminta.

Format string yang diberikan adalah: <nama_hero>-<tipe_hero>,<nama_hero>-<tipe-hero>, ...

Output yang diharapkan: [ [ <daftar_hero_dengan_tipe_ranged> ], [ <daftar_hero_dengan_tipe_melee> ] ]

Jika input adalah string kosong ('') maka return array kosong
*/

function meleeRangedGrouping(str) {
    //your code here
    if(str.length === 0) return [];
    const data = str.split(',');
    const dataHero = [];
    const dataTipe = [];
    for (let i = 0; i < data.length; i++) {
        const element = data[i];
        dataHero.push(element.split('-')[0])
        dataTipe.push(element.split('-')[1])
    }

    let group = {};
    for (let i = 0; i < dataTipe.length; i++) {
        const element = dataTipe[i];
        if(Object.keys(group).length === 0) {
            group = {
                [element]: []
            }
        } else {
            group = {
                ...group,
                [element]: [] 
            }
        }
    }

    const newGroup = [];
    for (let i = 0; i < Object.keys(group).length; i++) {
        const element1 = Object.keys(group)[i];
        for (let j = 0; j < dataTipe.length; j++) {
            const element2 = dataTipe[j];
            if(element1 === element2) {
                group[element1].push(dataHero[j])
            }
        }
        newGroup.push(group[element1])
    }
    return newGroup
}

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

// console.log(meleeRangedGrouping('')); // []