class Rpg {
  static diceRoll(roll, modifier = "") {
    // initial input
    const dice = roll.split("d");
    const amount = parseInt(dice[0]);
    const sides = parseInt(dice[1]);
    // modifier
    const mod =  parseInt(modifier) || "";
    let count = 1;
    let value = 0;
    let output = "";

    while (count <= amount) {
      value = Math.floor(Math.random() * sides + 1);
      if (mod !== "") value = `${value} +(${mod}) = ${value + mod}`;
      // if (mod !== "") value = `${value} +(${mod}) = ${value + mod}`;
      output += value;
      if (count !== amount) output += ", ";
      count++;
    }
    return output;
  }
}

module.exports = Rpg;
