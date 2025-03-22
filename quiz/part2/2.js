function meleeRangedGrouping(str) {
  //your code here
  const melee = [],
    ranged = [],
    result = [];
  const strSplitted = str.split(",");

  if (!str) {
    return result;
  }

  for (let i = 0; i < strSplitted.length; i++) {
    if (strSplitted[i].includes("Ranged")) {
      ranged.push(strSplitted[i].slice(0, -7));
    } else {
      melee.push(strSplitted[i].slice(0, -6));
    }
  }

  result.push(ranged, melee);
  return result;
}

// TEST CASE
console.log(
  meleeRangedGrouping(
    "Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged"
  )
);
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(
  meleeRangedGrouping("Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged")
);
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping("")); // []
