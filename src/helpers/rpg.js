class Rpg {
  static diceRoll(roll) {
    const dice = roll.split("d");
    const amount = parseInt(dice[0]);
    const sides = parseInt(dice[1]);
    let count = 1;
    let value = "";
    
    while (count <= amount) {
      value += Math.floor(Math.random() * (sides) + 1).toString();
      if (count !== amount) value += " ";
      count++;
    }
    return value;
  }
}

module.exports = Rpg;
