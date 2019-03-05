 module.exports = function brackets(str, bracketsConfig) {
  if(str.length % 2 == 0){
    var chars = str.split('');

    var chars2 = [];

    for(var i = 0; i < bracketsConfig.length; i++){
      for(var j = 0; j < bracketsConfig[i].length; j++){
        chars2.push(bracketsConfig[i][j]);
      }
    }
    console.log(isRightBrackrts(chars));

    if(isRightBrackrts(chars) == true && isRightBrackrts(chars2) == true){
      return true;
    }
    else {
      return false;
    }
  }
  else {
    return false;
  }
}

function isRightBrackrts(chars){
  var stack = [],
      open = ['{', '(', '['],
      close = ['}', ')', ']'],
      closeIndex,
      openIndex;

  for (var i = 0, len = chars.length; i < len; i++) {
    openIndex = open.indexOf(chars[i]);
    if (openIndex !== -1) {
      stack.push(openIndex);
      continue;
    }

    closeIndex = close.indexOf(chars[i]);
    if (closeIndex !== -1) {
        openIndex = stack.pop();
        if (closeIndex !== openIndex) {
            return false;
        }
    }
  }
  if (stack.length !== 0) {
    var firstAnswer = false;
  }
    return true;
}
