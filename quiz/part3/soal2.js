function cariPelaku(str) {
  // Gunakan regex global untuk mencari semua kemunculan 'abc'
  const matches = str.match(/abc/g);
  return matches ? matches.length : 0;
}

// TEST CASES
console.log(cariPelaku("mabcvabc")); // 2
console.log(cariPelaku("abcdabdc")); // 1
console.log(cariPelaku("bcabcac")); // 1
console.log(cariPelaku("abcabcabc")); // 3
console.log(cariPelaku("babcbacabc")); // 2
