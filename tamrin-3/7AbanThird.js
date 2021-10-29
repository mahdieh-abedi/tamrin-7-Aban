function gameTime(a, b, n, entry) {
    if ((entry[n-1]) > 90 + b || (entry[0]) < 0) {
        return false
    }
    for (let j = 1; j <= n; j++) {
        if (entry[j - 1] + a < entry[j - 2]) {
            return false
        }
    }
    return true
}

const testOne = gameTime(2, 4, 4, [4, 45, 48, 93])//true
const testTwo = gameTime(3, 2, 5, [4, 47, 45, 80, 91])//true
const testThree = gameTime(2, 2, 4, [4, 48, 45, 80])//false
const testFour = gameTime(3, 2, 6, [8, 48, 45, 70, 81, 94])//false
console.log(testOne)
console.log(testTwo)
console.log(testThree)
console.log(testFour)
