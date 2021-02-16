module.exports = function check(str, bracketsConfig) {
  let res = str;
  let exitFlag = false;

  function findBrackets(tempStr) {
    bracketsConfig.forEach(el => {
      const sConfig = el.join('');

      if(tempStr.includes(sConfig)) {
        res = tempStr.split(sConfig).join('');
      }
    })

    if(res === tempStr) {
      exitFlag = true;
    }
  }
  
  while(!exitFlag) {
    findBrackets(res);
  }

  if(res === '') {
    return true
  } 

  return false
}