const cipherFormula = (offset, text) => {
  if (typeof offset !== 'number') throw new TypeError();
  if (typeof text !== 'string') throw new TypeError();

  let result = '';
  for (let i = 0; i < text.length; i += 1) {
    let letterPosition = text[i].charCodeAt();

    if (letterPosition >= 48 && letterPosition <= 57) {
      letterPosition += offset % 10;

      if (letterPosition > 57) letterPosition -= 10;
      if (letterPosition < 48) letterPosition += 10;
    }

    if (letterPosition >= 65 && letterPosition <= 90) {
      letterPosition += offset % 26;

      if (letterPosition > 90) letterPosition -= 26;
      if (letterPosition < 65) letterPosition += 26;
    }

    if (letterPosition >= 97 && letterPosition <= 122) {
      letterPosition += offset % 26;

      if (letterPosition > 122) letterPosition -= 26;
      if (letterPosition < 97) letterPosition += 26;
    }

    result += String.fromCharCode(letterPosition);
  }

  return result;
};

const cipher = {
  encode(userOffset, messageToEncode) {
    const encodedMessage = cipherFormula(userOffset, messageToEncode);
    return encodedMessage;
  },
  decode(userOffset, messageToDecode) {
    const decodedMessage = cipherFormula(-userOffset, messageToDecode);
    return decodedMessage;
  },
};

export default cipher;
