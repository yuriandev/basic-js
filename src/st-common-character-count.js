import { NotImplementedError } from "../extensions/index.js";

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
export default function getCommonCharacterCount(s1, s2) {
  let count = 0;
  const arr = s2.split("");
  for (let i of s1) {
    let index = arr.findIndex((x) => x === i);
    if (index >= 0) {
      count++;
      arr.splice(index, 1);
    }
  }
  return count;
}
