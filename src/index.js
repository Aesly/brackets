module.exports = function check(str, bracketsConfig) {
  // your solution
    let bracketsConfigMod = bracketsConfig.map(function(array){
      let stringFromArray = array[0] + array[1];
      return stringFromArray;
  });
  
  while (bracketsConfigMod.some(elem => str.indexOf(elem) >= 0)) {
      for (i = 0; i <= bracketsConfigMod.length - 1; i += 1) {
          while (str.indexOf(bracketsConfigMod[i]) >= 0) {
              str = str.replace(bracketsConfigMod[i], '');
          }
      }
  }
  
      if (str.length === 0) {
          return true;
      } else {
          return false;
      }
}
