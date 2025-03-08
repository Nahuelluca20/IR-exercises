// 4. *Palindrome Permutation*:

// Given a string, write a function to check if it is a permutation of a palindrome.
// A palindrome is a word or phrase that is the same forwards and backwards. A permutation is a rearrangement of letters.
// The palindrome does not need to be limited to just dictionary words.
// ```
// EXAMPLE
// Input: Tact Coa
// Output True (permutations: "taco cat", "atco cta", etc.)
// ```

export default function palindromePermutation(str: string): boolean {
  const parseStr = str.replace(/\s+/g, "").toLowerCase();
  const charCount: Record<string, number> = {};

  for (const char of parseStr) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  let oddCount = 0;

  for (const count of Object.values(charCount)) {
    if (count % 2 !== 0) {
      oddCount++;
    }
    if (oddCount > 1) {
      return false;
    }
  }

  return true;
}
