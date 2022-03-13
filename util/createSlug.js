const validCharacter = (char) => {
  const badChars = [58, 59, 60, 61, 62, 63, 64, 90, 91, 92, 93, 94, 95, 96];

  for (let i = 0; i < badChars.length; i++) {
    if (char == badChars[i]) {
      return false;
    }
  }
  return true;
};

const createSlug = () => {
  // ascii alphabet 65 -> 122 inclusive
  // numbers 48 - 57 inclusive

  // avoid [0, 47] u [58, 64] u [90, 96] u [123+)

  let output = [];

  while (output.length < 4) {
    let valid = false;
    let character;

    while (!valid) {
      character = Math.ceil(Math.random() * (122 - 47)) + 47;
      valid = validCharacter(character);
    }
    output.push(String.fromCharCode(character));
  }
  return output.join("");
};

module.exports = createSlug;
