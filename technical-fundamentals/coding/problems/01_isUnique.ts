// 1. *Is Unique*:

// Implement an algorithm to determine if a string has all unique characters.
// What if you cannot use additional data structures?

// export default function isUnique(str: string): boolean {
//   const word = [];
//   for (let i = 0; i < str.length; i++) {
//     word.push(str[i]);
//     const letter = word.filter((item) => item === str[i]);
//     if (letter.length > 1) {
//       return false;
//     }
//   }
//   return true;
// }

// export default function isUnique(str: string): boolean {
//   for (let i = 0; i < str.length; i++) {
//     let counter = 0;
//     for (let e = 0; e < str.length; e++) {
//       if (str[e] === str[i]) {
//         counter++;
//       }

//       if (counter > 1) {
//         return false;
//       }
//     }
//   }
//   return true;
// }

export default function isUnique(str: string): boolean {
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j < str.length; j++) {
      if (str[j] === str[i]) {
        return false;
      }
    }
  }
  return true;
}
