module.exports = function toReadable(n) {
if (n < 20) return num[n];
let digit = n % 10;
if (n < 100) return tens[~~(n / 10) - 2] + (digit ? " " + num[digit] : "");
if (n < 1000) return num[~~(n / 100)] + " hundred" + (n % 100 == 0 ? "" : " " + toReadable(n % 100));
return toReadable(~~(n / 1000)) + " thousand" + (n % 1000 != 0 ? " " + toReadable(n % 1000) : "");
}
