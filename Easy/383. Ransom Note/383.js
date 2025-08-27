/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  for (let char of ransomNote) {
    let index = magazine.indexOf(char);
    if (index === -1) {
      return false;
    }
    magazine = magazine.slice(0, index) + magazine.slice(index + 1);
  }
  return true;
};
