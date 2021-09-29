import { NotImplementedError } from "../extensions/index.js";

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
export default function deleteDigit(n) {
  let arr = Array.from(String(n)).map((letter) => Number(letter));
  return Math.max(
    ...arr.map((el, i) => {
      let r = Object.assign([], arr);
      r.splice(i, 1);
      return Number(r.join(""));
    })
  );
}
