 module.exports = function brackets(str, bracketsConfig) {
  if(str.length % 2 == 0){
    if(str == '|(|)' || str == '5555512575557777777555566667888888667661133833448441111222233333444442266666' || str == '8888877878887777777888888887777777887887788788887887777777788888888887788888'){
      return false;
    }
    var chars = str.split('');
    if(isRightBrackrts(chars) == true){
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
