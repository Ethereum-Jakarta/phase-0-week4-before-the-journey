/*
Diberikan function meleeRangedGrouping yang menerima 1 parameter berupa string, implementasikan meleeRangedGrouping agar dapat menghasilkan multidimensional array seperti yang diminta.

Format string yang diberikan adalah: <nama_hero>-<tipe_hero>,<nama_hero>-<tipe-hero>, ...

Output yang diharapkan: [ [ <daftar_hero_dengan_tipe_ranged> ], [ <daftar_hero_dengan_tipe_melee> ] ]

Jika input adalah string kosong ('') maka return array kosong
*/

function meleeRangedGrouping(str) {
  //your code here
  //pengondisian jika str kosong
  if (str == "") {
    return [];
  }

  // apabila str tidak kosong, maka ubah str menjadi array
  let arr = str.split(",");

  //membuat variabel penampung utama dan penampung untuk hero melee dan ranged
  let melee = [];
  let ranged = [];
  let hasil = [];

  //membuat variabel untuk memeriksa apakah hero melee atau ranged
  const Melee = "-Melee";
  const Ranged = "-Ranged";

  //memeriksa apakah setiap item, menghapus keterangannya, kemudian memsukannya ke variabel yang sudah disiapkan
  arr.forEach((item) => {
    if (item.includes(Melee)) {
      melee.push(item.replace(Melee, ""));
    } else if (item.includes(Ranged)) {
      ranged.push(item.replace(Ranged, ""));
    }
  });

  hasil.push(ranged);
  hasil.push(melee);

  return hasil;
}

// TEST CASE

console.log(
  meleeRangedGrouping(
    "Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged"
  )
);
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(
  meleeRangedGrouping("Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged")
);
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping("")); // []
