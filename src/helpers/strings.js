exports.pushString = function (string, itemToAdd) {
  let str = [...string];
  str.push(itemToAdd);
  str = str.join("");
  return str;
};

exports.spliceString = function (string, start, removeCt, itemToAdd) {
  let str = [...string];
  str.splice(start, removeCt, itemToAdd);
  str.join("");
  return str;
};
