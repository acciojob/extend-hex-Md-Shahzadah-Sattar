function extendHex(shortHex) {
  // Remove the '#' symbol if present
  shortHex = shortHex.replace('#', '');

  // Ensure the input is a valid short hex code
  if (!/^[0-9a-fA-F]{3}$/.test(shortHex)) {
    throw new Error('Invalid short hex code');
  }

  // Expand short hex to full hex
  const fullHex = shortHex
    .split('')
    .map(char => char.repeat(2))
    .join('');

  // Add '#' prefix to the full hex code
  return `#${fullHex}`;
}

// Test cases
console.log(extendHex("#abc"));  // Output: "#aabbcc"
console.log(extendHex("abc"));   // Output: "#aabbcc"
console.log(extendHex("#AbC"));  // Output: "#AABBCC"
console.log(extendHex("#f09"));  // Output: "#ff0099"


// Do not change the code below.
// const shortHex = prompt("Enter Short Hex.");
// alert(extendHex(shortHex));
