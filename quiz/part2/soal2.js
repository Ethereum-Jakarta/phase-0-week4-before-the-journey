function meleeRangedGrouping(str) {
  if (!str) return [];
  const ranged = [];
  const melee = [];
  const heroes = str.split(",");
  for (let i = 0; i < heroes.length; i++) {
    const [name, type] = heroes[i].split("-");
    if (type === "Ranged") {
      ranged.push(name);
    } else if (type === "Melee") {
      melee.push(name);
    }
  }
  return [ranged, melee];
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
