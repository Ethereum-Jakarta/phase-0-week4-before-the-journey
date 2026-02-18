function attack(damage) {
  //code disini
  return damage - 2;
}

function damageCalculation(numberOfAttacks, damagePerAttack) {
  // code disini
  if (numberOfAttacks < 1) return 0;
  const singleAttack = attack(damagePerAttack);
  return singleAttack * numberOfAttacks;
}

// TEST CASE
console.log(damageCalculation(9, 25)); // 207
console.log(damageCalculation(10, 4)); // 20
console.log(damageCalculation(5, 20)); // 90
