function meleeRangedGrouping (str) {
    if (!str) {
        return [];
    }

    let rangedArr = [];
    let meleeArr = [];

    let arr = str.split(',');

    for (let i = 0; i <= arr.length - 1; i++) {
        let [hero, type] = arr[i].split('-');
        if (type === 'Ranged') {
            rangedArr.push(hero);
        } else if (type === 'Melee') {
            meleeArr.push(hero);
        }
    }

    let finalResult = [rangedArr, meleeArr];
    return finalResult;

  }
  
  // TEST CASE
  
  console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
  // [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]
  
  console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
  // [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]
  
  console.log(meleeRangedGrouping('')); // []