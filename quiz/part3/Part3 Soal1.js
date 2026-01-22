function hapusSimbol(str) {
  return str.match(/[a-z0-9]/gi).join("");
}

console.log(hapusSimbol("test%$4aa"));
console.log(hapusSimbol("devel0p3r s3j@@ati"));
console.log(hapusSimbol("ma@#k!an~"));
console.log(hapusSimbol("coding"));
console.log(hapusSimbol("1+3-5*2=100"));
