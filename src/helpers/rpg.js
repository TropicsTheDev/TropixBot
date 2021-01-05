const { DiceRoll } = require("rpg-dice-roller/lib/umd/bundle.js");
const { pushString, spliceString } = require("../helpers/strings");

class Rpg {
  static diceRoll(input, spec = null) {
    let roll = null;
    let targetIndex = -1;
    switch (spec) {
      case "--adv":
        targetIndex = input.lastIndexOf("+") || input.lastIndexOf("-");
        if (targetIndex !== -1) {
          input = spliceString(input, targetIndex - 1, 0, "k1");
        } else {
          input = pushString(input, "k1");
        }
        break;
      case "--dis":
        targetIndex = input.lastIndexOf("+") || input.lastIndexOf("-");
        if (targetIndex !== -1) {
          input = spliceString(input, targetIndex - 1, 0, "kl1");
        } else {
          input = pushString(input, "kl1");
        }
        break;
      default:
        break;
    }
    roll = new DiceRoll(input);
    const { output } = roll;
    return output;
  }
}

module.exports = Rpg;
