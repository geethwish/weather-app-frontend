/**
 * Function to get the first letter of each word in a given string.
 * @param text - The input string.
 * @returns A string containing the first letter of each word.
 */

export function getFirstLetters(text: string): string {
  if (!text) {
    return "";
  }

  return text
    .split(" ")
    .map((word) => word[0])
    .join("");
}
