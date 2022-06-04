//1
//let i = 3;
//while (i) {
//  alert( i-- );
//} // последним значением будет 1, тк i-- будет уменьшеть значение пока i=0, т.е. сначла будет выведено 3, затем уменьшиться на один до 2 и тд

//2
let i = 0;
while (i < 3) {
    alert(`number ${i}!`);
    i++
}

//3
let number;
do {
    number = +prompt('Введите число больше 100', 0);
} while (number <= 100 || null);

//4
let num = 0;
let n = 1000;
while (n >= 50) {
    n /= 2;
    num++;
    alert(num);
}
//for (let n = 1000; n < 50; num++) {
//    n /= 2;
//}
//alert(num);