const { DiceRoll } = require("rpg-dice-roller/lib/umd/bundle.js");

class Rpg {
  static diceRoll(input) {
    const roll = new DiceRoll(input);
    const { output } = roll;
    return output;
  }
}

module.exports = Rpg;
