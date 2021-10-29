function PayBack(n, x, y, z, a, b, c) {
    this.debt = n;
    this.dirham = x;
    this.euro = y;
    this.dollar = z;
    this.dirhamRate = a;
    this.euroRate = b;
    this.dollarRate = c;
}

function checkAmount(n, currency, rate) {
    let arr = []
    for (let i = 0; i <= currency; i++) {
        if (i * rate <= n) {
            arr.push(i)
        }
    }
    return arr
}
// function payYourDebt(n, x, y, z, a, b, c){
//     if((a*x)+(y*b)+(c*z)<n){
//         return"0"
//     }
// }
// console.log(payYourDebt(1000000, 2, 1, 1, 50000, 70000, 30000))



const testOne = new PayBack(1000000, 2, 1, 1, 50000, 70000, 30000)
const testTwo = new PayBack(60000, 3, 3, 3, 30000, 20000, 30000)
const testThree = new PayBack(32000, 2, 1, 1, 4200, 7500, 3600)

console.log(testOne)
console.log(testTwo)
console.log(testThree)

console.log(checkAmount(testOne[`debt`], testOne[`dirham`], testOne[`dirhamRate`]))
console.log(checkAmount(testOne[`debt`], testOne[`dollar`], testOne[`dollarRate`]))
console.log(checkAmount(testOne[`debt`], testOne[`euro`], testOne[`euroRate`]))
// function payDebt(n, x, y, z, a, b, c) {
//     if ((a * x) + (y * b) + (z * c) < n) {
//         return "0"
//     } else {
//         let arrX = [], arrY = [], arrZ = []
//         for (let i = 0, j = 0, s = 0; i <= x, j <= y, s <= z; i++, j++, s++) {
//             if (n - (i * a) === 0 || n - (j * b) === 0 || n - (c * s) === 0) {
//                 arrX.push(i, j, s)
//             } else if (n - ((i * a) + (j * b)) === 0 || n - ((i * a) + (s * c)) === 0 || n - ((s * c) + (j * b)) === 0) {
//                 arrY.push(i, j, s)
//             } else if (n - ((i * a) + (j * b) + (c * s)) === 0) {
//                 arrZ.push(i, j, s)
//             }
//         }
//         return {arrX, arrY, arrZ}
//     }
// }
// function payDebt(n, x, y, z, a, b, c) {
//     if ((a * x) + (y * b) + (z * c) < n) {
//         return "0"
//     } else {
//         let k1,k2,k3,p1,p2,p3,l1,l2,l3
//         for (let i = 0; i <= x; i++) {
//             for (let j = 0; j <= y; j++) {
//                 for (let s = 0; s <= z; s++) {
//                     if ((n - (i * a) === 0 || n - (j * b) === 0 || n - (c * s) === 0) && (a * i) + (j * b) + (s * c) === n) {
//                         k1=i
//                         p1=j
//                         l1=s
//
//                     } else if ((n - ((i * a) + (j * b)) === 0 || n - ((i * a) + (s * c)) === 0 || n - ((s * c) + (j * b)) === 0) && (a * i) + (j * b) + (s * c) === n) {
//                          k2=i
//                          p2=j
//                          l2=s
//                     } else if ((a * i) + (j * b) + (s * c) === n) {
//                          k3=i
//                          p3=j
//                          l3=s
//                     }
//                 }
//             }
//         }
//         return [[k1,p1,l1],[k2,p2,l2],[k3,p3,l3]]
//     }
// }
//
// const testOne = payDebt(100000, 2, 1, 1, 50000, 70000, 30000)
// const testTwo = payDebt(60000, 3, 3, 3, 30000, 20000, 30000)
// const testThree = payDebt(32000, 2, 1, 1, 4200, 7500, 3600)
// console.log(testOne)
// console.log(testTwo)
// console.log(testThree)