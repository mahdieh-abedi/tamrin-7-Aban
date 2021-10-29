function gameTime(a, b, n, entry) {
    // if (entry[0] <= 0 || entry[entry.length - 1] > 90 + b) return 'no'
    // for (let i = 0; i < entry.length; i++) {
    //     if (entry[i] + a < entry[i - 1]) return 'no'
    // }
    // return 'yes'
    let arrFirst = []
    let arrSecond = []
    for (let i = 0; i <= 90 + b; i++) {
        if (i <= 45 + a) {
            arrFirst.push(i)
        } else if (i > 45+a && i<=95+b) {
            arrSecond.push(i)
        }
    }
    for (let j = 1; j <= n; j++) {
        if ((arrFirst.includes(entry[j - 1])) || (arrSecond.includes(entry[j - 1]))) {
            return "1"
        }
    }
    return "2"
}


const testOne = gameTime(2, 4, 4, [4, 45, 48, 93])//true
const testTwo = gameTime(3, 2, 5, [4, 47, 45, 80, 91])//true
const testThree = gameTime(2, 2, 4, [4, 48, 45, 80])//false
const testFour = gameTime(3, 2, 6, [8, 48, 45, 70, 81, 94])//false
console.log(testOne)
console.log(testTwo)
console.log(testThree)
console.log(testFour)
