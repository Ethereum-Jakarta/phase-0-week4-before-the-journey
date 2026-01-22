function meleeRangedGrouping(str) {
  if (str.length === 0) {
    return [];
  }

  var arr = str.split(",");
  var ranged = [];
  var melee = [];

  for (var i = 0; i < arr.length; i++) {
    var heroData = arr[i].split("-");
    var nama = heroData[0];
    var tipe = heroData[1];

    if (tipe === "Ranged") {
      ranged.push(nama);
    } else if (tipe === "Melee") {
      melee.push(nama);
    }
  }

  return [ranged, melee];
}

console.log(
  meleeRangedGrouping(
    "Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged"
  )
);

console.log(
  meleeRangedGrouping("Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged")
);

console.log(meleeRangedGrouping(""));

[
  ["Razor", "Invoker", "Sniper"],
  ["Meepo", "Axe"],
];
