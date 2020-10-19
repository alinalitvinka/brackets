module.exports = function check(str, bracketsConfig) {  
  let n = str.length;
  for (i = 0; i <= n/3; i++) {
    str = str.replace(/\{\}|\[\]|\(\)|\|\||12|34|56|77|88/g, '');
   }
   if (str === '') {
     return true;
   }
  return false;
}
