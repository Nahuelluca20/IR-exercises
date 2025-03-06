// 6. *String Compression*:

// Implement a method to perform basic string compression using the counts of repeated characters.
// For example, the string aabcccccaaa would become a2blc5a3,
// If the "compressed" string would not become smaller than the original string,
// your method should return the original string.
// You can assume the string has only uppercase and lowercase letters (a - z).

export default function stringCompression(str: string): string {
  if (!str) return "";

  const SetOfStr = [...new Set(str.split(""))];
  const setToString = Array.from(SetOfStr).join("");

  if (str === setToString) return str;

  let compressed = "";
  let char = str[0];
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    const curr = str[i];

    if (char === curr) {
      count++;
    } else {
      compressed = `${compressed}${char}${count}`;
      char = curr;
      count = 1;
    }
  }

  compressed = `${compressed}${char}${count}`;

  return compressed;
}
