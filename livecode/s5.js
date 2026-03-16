function piramid2(num) {

    for(let i = num; i > 0; i--){
        let str = ""
        for(let j = 0; j < i; j++){
            str += i;
        }
        console.log(str)
    }
    for(let i = 2; i <= num; i++){
        let arr = ""
        for(let j = 0; j < i; j++){
            arr += i;
        }
        console.log(arr)
    }
}

console.log(piramid2(5))

/*
55555
4444
333
22
1
22
333
4444
55555
*/