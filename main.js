let number = +prompt("Введіть число:");

while (number === 0 || Number(isNaN(number) || !Number.isInteger(number))) {
    number = +prompt("Введіть число ще раз:");
}

const result = [];

for (let i = 1; i <= number; i++) {
    if (i % 5 === 0) {
        result.push(i);  
    }
    else if (number < 5 ){
        console.log("Sorry. no numbers");
        break;
    }
}
console.log(result);


// Друга частина завдання

// let numberM = +prompt("Введіть число m:");
// let numberN = +prompt("Введіть число n:");

// while (numberM < 0 || Number(isNaN(numberM) || !Number.isInteger(numberM))) {
//     numberM = +prompt("Введіть число m ще раз:");
// }
// while (numberN < 0 || Number(isNaN(numberN) || !Number.isInteger(numberN))) {
//     numberN = +prompt("Введіть число n ще раз:");
// }
// let result = [];

// while (!(numberM < numberN)) {
//     numberM = +prompt("m має бути менше ніж n:");
//     numberN = +prompt("n має бути більше m:");
// }
// for (let i = numberM; i <= numberN; i++) {
//     let flag = 1;

//     for (let j = 2; (j <= i / 2) && (flag === 1); j++ ) {
//         if (i % j === 0) {
//             flag = 0;
//         }
//     }
//     if (flag === 1) {
//         result.push(i);
//     }
// }
// console.log(result);
