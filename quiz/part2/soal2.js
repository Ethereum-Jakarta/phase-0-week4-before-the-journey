// ## Soal 2
// ```js
/*
Diberikan function meleeRangedGrouping yang menerima 1 parameter berupa string, implementasikan meleeRangedGrouping agar dapat menghasilkan multidimensional array seperti yang diminta.

Format string yang diberikan adalah: <nama_hero>-<tipe_hero>,<nama_hero>-<tipe-hero>, ...

Output yang diharapkan: [ [ <daftar_hero_dengan_tipe_ranged> ], [ <daftar_hero_dengan_tipe_melee> ] ]

Jika input adalah string kosong ('') maka return array kosong
*/

function meleeRangedGrouping (str) {
  //your code here
    let hasilArr = [];

    if (str.length > 0)
    {
        hasilArr.push([], []);
        for (let i = 0; i < str.length; i++)
        {
            if (str.charAt(i) === '-')
            {
                let temp = '';
                for (let j = i - 1; j >= 0; j--)
                {
                    if (str.charAt(j) === ',')  
                    {
                        break;
                    }
    
                    temp += str.charAt(j);
                }

                temp = temp.split('').reverse().join('');

                // temp = temp.slice(temp.length);
    
                if (str.charAt(i + 1) === 'R')
                {
                    hasilArr[0].push(temp);
                }
                else
                {
                    hasilArr[1].push(temp);
                }
            }
        }
    }
    
    return hasilArr;
}

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []