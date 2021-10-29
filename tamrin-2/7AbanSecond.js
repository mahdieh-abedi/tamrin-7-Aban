const arr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l","m", "n", "o", "p", "q", "r", "s", "t", "u","v", "w", "x", "y", "z"]
function codingAnString(n,k,str) {
    let str1
    let str2
        for (let i = 0; i <= k; i++) {
            str1 = str.slice(n - 1, n) + str.slice(0, n - 1)
            for(let j=0; j<=25;j++){
                for(let char of str1){
                    Number(char)++
                }

            }

        }
        return str2
    }



const testOne = codingAnString(3, 1,"abz")
console.log(testOne)
