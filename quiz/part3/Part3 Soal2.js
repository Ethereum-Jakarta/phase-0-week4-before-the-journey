function cariPelaku(str) {
  let hasil = str.match(/abc/g);

  return hasil ? hasil.length : 0;
}

console.log(cariPelaku("mabcvabc"));
console.log(cariPelaku("abcdabdc"));
console.log(cariPelaku("bcabcac"));
console.log(cariPelaku("abcabcabc"));
console.log(cariPelaku("babcbacabc"));
