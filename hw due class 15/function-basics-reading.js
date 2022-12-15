// function checkAge(age){
//     if (age > 18) {
//         return true;
//     } else {
//         return confirm('Did parents allow you?');
//     }
// }

// function checkAge(age){
//         return (age > 18) || confirm('Did parents allow you?');
// }

// function checkAge(age){
//     return (age > 18) ? true: confirm('Did parents allow you?');
// }

// function min(a,b) {
//     if (a < b){
//         return a;
//     } else {
//         return b;
//     }
// }

// function min(a,b) {
//     return a < b ? a : b;
// }

function pow(x,n) {
    let num = x;
    for (i = 1; i <= n; i++) {
        num *= x;
    }
    return num;
}