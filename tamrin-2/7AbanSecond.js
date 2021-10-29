function codingAnString(n, k, str) {
    let str1 = '';
    for (let i = 0; i < k; i++) {
        str = str.substring(n - 1, n) + str.substring(0, n - 1)
        for (let j = 0; j < n; j++) {
            if (str[j] === 'z') {
                str1 = str1 + 'a'
            } else {
                str1 = str1 + String.fromCharCode(str.charCodeAt(j) + 1);
            }
        }
        str = str1;
        str1 = '';
    }
    return str;

}


const testOne = codingAnString(3, 1, "abz")
const testTwo = codingAnString(4, 5, "abcd")
console.log(testOne)
console.log(testTwo)
