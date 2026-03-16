/*
=======================
Initial Object Grouping
=======================
​
[INSTRUCTION]
​
Disediakan sebuah function initialObjectGrouping yang bertugas untuk menerima sebuah parameter
berupa array satu dimensi berisikan nama-nama. Function initialObjectGrouping akan
mengelompokkan nama-nama tersebut berdasarkan huruf depannya dan dipisahkan ke dalam
sebuah object.
[EXAMPLE]
Input: ['Budi', 'Badu', 'Joni', 'Jono']
Proses:
Huruf depan yang ditemukan: B dan J
Pisahkan nama yang depannya B, dan nama yang depannya J. Masukkan ke object berdasarkan huruf Awal nama
{
  B: ['Budi', 'Badu'],
  J: ['Joni', 'Jono']
}
[CONSTRAINTS]
Dilarang menggunakan sintaks Set atau Regex
*/
function initialObjectGrouping(studentsArr) {
    let abjad = [];
    for (let i = 0; i < studentsArr.length; i++){
        if(!abjad.includes(studentsArr[i][0])){
            abjad.push(studentsArr[i][0])
        } 
    }

    let objStudent = {};
    for (let i = 0; i < abjad.length; i++){
        let arr = [];
        arr[i] = [];
        for (let j = 0; j < studentsArr.length; j++){
            if (abjad[i] == studentsArr[j][0]) {
                arr[i].push(studentsArr[j])
            }
        }
        objStudent[abjad[i]] = arr[i];
    }
    // console.log(abjad)
    //         if (abjad[i] == studentsArr[i][0]) {
    //             abjad[i] = [];
    //             abjad[i].push(studentsArr[i])
    return objStudent;
}
console.log(initialObjectGrouping(['Budi', 'Badu', 'Joni', 'Jono']));
/*
{
  B: [ 'Budi', 'Badu' ],
  J: [ 'Joni', 'Jono' ]
}
*/
console.log(initialObjectGrouping(['Mickey', 'Yusuf', 'Donald', 'Ali', 'Gong']));
/*
{
  M: [ 'Mickey' ],
  Y: [ 'Yusuf' ],
  D: [ 'Donald' ],
  A: [ 'Ali' ],
  G: [ 'Gong' ]
}
*/
console.log(initialObjectGrouping(['Rock', 'Stone', 'Brick', 'Rocker', 'Sticker']));
/*
{
  R: [ 'Rock', 'Rocker' ],
  S: [ 'Stone', 'Sticker' ],
  B: [ 'Brick' ]
}
*/