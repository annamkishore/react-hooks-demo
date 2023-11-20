// It's used to get the raw string form of template literals —
// that is, substitutions (e.g. ${foo}) are processed, but escape sequences (e.g. \n) are not.

const filePath = String.raw`C:\Development\profile\aboutme.html`;
console.log(`---------file path--------- ${filePath}`);

let val=10
const message = String.raw`Item\nprice ${val}/-`
console.log(message)