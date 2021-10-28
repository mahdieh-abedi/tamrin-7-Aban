//
// function letsPay(n, x, y, z, a, b, c) {
//     if ((a * x) + (b * y) + (c * z) < n) {
//         return "0"
//     }
// }
//
// console.log(letsPay(100000, 2, 1, 1, 50000, 70000, 30000))

const drachmaNum = function drachma(n, x, a){
    let h=0;
    for(let i=0; (i*a)<=n; i++){
        if(n-(i*a)===0 && i<=x){
            return i
        }
        else{
            h=n-(i*a)
        }
    }
    return h
}
console.log(drachmaNum(100000, 2, 50000))

const euroNum = function euro(n, y, b){
    let h=0;
    for(let i=0; (i*b)<=n; i++){
        if(n-(i*b)===0 && i<=y){
            return i
        }
        else{
            h=n-(i*b)
        }
    }
    return h
}
console.log(euroNum(100000, 1, 70000))

const dollarNum = function euro(n, z, c){
    let h=0;
    for(let s=0; (s*c)<=n; s++){
        if(n-(s*c)===0 && s<=z){
            return s
        }
        else{
            h=n-(s*c)
        }
    }
    return h
}
console.log(dollarNum(100000, 1, 30000))

