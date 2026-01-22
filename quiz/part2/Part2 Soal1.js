function attack(damage) {
  return damage - 2;
}

function damageCalculation(numberOfAttacks, damagePerAttack) {
  return numberOfAttacks * attack(damagePerAttack);
}

console.log(damageCalculation(9, 25));

console.log(damageCalculation(10, 4));

console.log(damageCalculation(5, 20));
