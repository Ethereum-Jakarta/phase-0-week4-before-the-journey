
function hapusSimbol(str) {
  let regex = str.match(/[A-Z, 0-9]+/gi)
  let res = regex.join("").replace(/\s/g,'')

  return res
}
// TEST CASES
console.log(hapusSimbol('test%$4aa')); // test4aa
console.log(hapusSimbol('devel0p3r s3j@@ati')); // devel0p3rs3jati
console.log(hapusSimbol('ma@#k!an~')); // makan
console.log(hapusSimbol('coding')); // coding
console.log(hapusSimbol('1+3-5*2=100')); // 1352100
//reupload