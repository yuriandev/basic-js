import { NotImplementedError } from "../extensions/index.js";

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
export default function encodeLine(str) {
  let qty = 1;
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      qty++;
    } else {
      result += qty + str[i];
      qty = 1;
    }
  }
  return result.replace(/1/g, "");
}
