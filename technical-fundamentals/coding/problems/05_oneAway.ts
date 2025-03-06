// 5. *One Away*:

// There are three types of edits that can be performed on strings:
// insert a character, remove a character, or replace a character.
// Given two strings, write a function to check if they are one edit (or zero edits) away.

// think the problem
// aa / ab -> true
// aa / aab -> true
// aa / a -> true
// "" / a -> true

// First Solutioon
export default function isOneAway(str1: string, str2: string): boolean {
  if (str1 === str2) return true;

  const len1 = str1.length;
  const len2 = str2.length;

  if (Math.abs(len1 - len2) > 1) return false;

  const [longerStr, shorterStr] = len1 > len2 ? [str1, str2] : [str2, str1];

  longerStr.split("");
  shorterStr.split("");

  let missingLetterCount = 0;
  for (let i = 0; i < longerStr.length; i++) {
    const char = longerStr[i];
    const includeLetter = shorterStr.includes(char);
    if (!includeLetter) {
      missingLetterCount++;
    }
  }

  if (missingLetterCount === 1) return true;

  return false;
}

// Second solution
// export default function isOneAway(str1: string, str2: string): boolean {
//   if (str1 === str2) return true;

//   const len1 = str1.length;
//   const len2 = str2.length;

//   if (Math.abs(len1 - len2) > 1) return false;

//

//   let i = 0;
//   let j = 0;
//   let foundDifference = false;

//   while (i < shorterStr.length && j < longerStr.length) {
//     if (shorterStr[i] !== longerStr[j]) {
//       if (foundDifference) return false;
//       foundDifference = true;

//       if (len1 === len2) i++;
//     } else {
//       i++;
//     }
//     j++;
//   }

//   return true;
// }
