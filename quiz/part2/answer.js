// console.log("Soal ke-1:");
// function attack(damage) {
//     return damage - 2;
// }

// function damageCalculation(numbersOfAttacks, damagePerAttack) {
//     return numbersOfAttacks * attack(damagePerAttack)
// }

// console.log(damageCalculation(9, 25)); // 207

// console.log(damageCalculation(10, 4)); // 20

// console.log(damageCalculation(5, 20)); // 90

console.log("Soal ke-2:");
function meleeRangedGrouping(str) {
    if (str.length === 0) {
        return [];
    }

    let hero = str.split(",");
    let ranged = [];
    let melee = []
    // console.log(hero)
    for (let i = 0; i < hero.length; i++) {
        // console.log("looping ke-1:", hero[i].split("-"))
        let type = hero[i].split("-");

        if (type[1] === "Ranged") {
            ranged.push(type[0])
        } else {
            melee.push(type[0]);
        }
    }
    return [ranged, melee];
}

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []