console.log("Soal ke-1:");
function hapusSimbol(str) {
    return str.match(/\w+/gi).join("")
}

console.log(hapusSimbol('test%$4aa')); // test4aa
console.log(hapusSimbol('devel0p3r s3j@@ati')); // devel0p3rs3jati
console.log(hapusSimbol('ma@#k!an~')); // makan
console.log(hapusSimbol('coding')); // coding
console.log(hapusSimbol('1+3-5*2=100')); // 1352100

console.log("Soal ke-2:");
function cariPelaku(str) {
    let result = str.match(/abc/g)

    let total = result ? result.length : 0

    return total;
}

console.log(cariPelaku('mabcvabc')); // 2
console.log(cariPelaku('abcdabdc')); // 1
console.log(cariPelaku('bcabcac')); // 1
console.log(cariPelaku('abcabcabc')); // 3
console.log(cariPelaku('babcbacabc')); // 2