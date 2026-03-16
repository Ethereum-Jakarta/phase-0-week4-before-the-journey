function totalDigitRekursif(angka) {
    if (angka < 1) return angka

    return angka % 10 + totalDigitRekursif((angka / 10) | 0)
}

// TEST CASES
console.log(totalDigitRekursif(512)); // 8
console.log(totalDigitRekursif(1542)); // 12
console.log(totalDigitRekursif(5)); // 5
console.log(totalDigitRekursif(21)); // 3
console.log(totalDigitRekursif(11111)); // 5
