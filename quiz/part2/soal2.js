function meleeRangedGrouping (str) {
    if (!str?.length) return []

    var groups = [[], []]
    var heroes = ""

    for (var i = 0; i < str.length; i++) {
        heroes += str[i]

        if (str[i + 1] === "-" && str[i + 2] === "R") {
            groups[0].push(heroes)
            heroes = ""
            i += 8
        }

        if (str[i + 1] === "-" && str[i + 2] === "M") {
            groups[1].push(heroes)
            heroes = ""
            i += 7
        }
    }

    return groups
}

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []
