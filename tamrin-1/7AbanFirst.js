
function payDebt(n, x, y, z, a, b, c) {
    if ((a * x) + (y * b) + (z * c) < n) {
        return "0"
    } else {
        let arrX = []
        for (let i = 0; i <= x; i++) {
            for (let j = 0; j <= y; j++) {
                for (let s = 0; s <= z; s++) {
                    if ((a * i) + (j * b) + (s * c) === n) {
                        arrX.push(i)
                    }

                }
            }
        }
        return arrX.length
    }
}

const testOne = payDebt(100000, 2, 1, 1, 50000, 70000, 30000)//2
const testTwo = payDebt(60000, 3, 3, 3, 30000, 20000, 30000)//4
const testThree = payDebt(32000, 2, 1, 1, 4200, 7500, 3600)//0
console.log(testOne)
console.log(testTwo)
console.log(testThree)
