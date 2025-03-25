
function meleeRangedGrouping (str) {
    str = str.split(',')
    let ranged = [], melee = [];
    for (let i = 0; i < str.length; i++) {
        let selection = str[i].split('-');
        if (selection[1] === 'Ranged') {
            ranged.push(selection[0])
        } else if (selection[1] === 'Melee') {
            melee.push(selection[0])
        }
    }

    if (str.length === 0) return []
    return [ranged, melee]
  }
  
  // TEST CASE
  
  console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
  // [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]
  
  console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
  // [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]
  
  console.log(meleeRangedGrouping('')); // []
  