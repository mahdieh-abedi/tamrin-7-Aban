function gameTime(a, b,n) {
    let arrFirstHalfTime = []
    let arrSecondHalfTime = []
    for (let i = 0; i <= (90 + a + b); i++) {
        if (i <= 45 + a) {
            arrFirstHalfTime.push(i)
        } else {
            arrSecondHalfTime.push(i)
        }
    }
    return[arrFirstHalfTime,arrSecondHalfTime]
}


const testOne = gameTime(2, 4,4)//true
const testTwo = gameTime(3, 2,5)//true
const testThree = gameTime(2, 2,4)//false
const testFour = gameTime(3, 2,6)//false
console.log(testOne)
console.log(testTwo)
console.log(testThree)
console.log(testFour)


