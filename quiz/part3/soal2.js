function cariPelaku(str) {
    let abc = str.match(/abc/g);

    if (abc) {
        return abc.length;
    } else {
        return 0;
    }
  }
  
  // TEST CASES
  console.log(cariPelaku('mabcvabc')); // 2
  console.log(cariPelaku('abcdabdc')); // 1
  console.log(cariPelaku('bcabcac')); // 1
  console.log(cariPelaku('abcabcabc')); // 3
  console.log(cariPelaku('babcbacabc')); // 2