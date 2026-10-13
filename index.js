// 1

// const too = -25
// if (too > 0) {
//     console.log("Эерэг");
// } else if (too < 0) {
//     console.log("Сөрөг");
// } else {
//     console.log("Тэг");
// }

// 2

// let age = 20
// if (age < 0) {
//     console.log("Буруу нас");
// } else if (age <= 12) {
//     console.log("Хүүхэд");
// } else if (age <= 17) {
//     console.log("Өсвөр нас");
// } else {
//     console.log("Насанд хүрсэн");
// }

// 3

// const score = 99
// if (score < 0) {
//     console.log("Буруу оноо");
// } else if (score <= 59) {
//     console.log("F");
// } else if (score <= 69) {
//     console.log("D");
// } else if (score <= 79) {
//     console.log("C");
// } else if (score <= 89) {
//     console.log("B");
// } else if (score <= 100) {
//     console.log("A");
// } else {
//     console.log("Буруу оноо");   
// }

// 4

// const temperature = 21
// if (temperature < 0) {
//     console.log("Хүйтэн");
// }else if (temperature <= 20) {
//     console.log("Сэрүүн");
// }else {
//     console.log("Дулаан");
// }

// 5

// const a = 1
// const b = 1
// if (a > b) {
//     console.log("Эхний тоо их");
// }else if (b > a) {
//     console.log("Хоёр дахь тоо их");
// } else {
//     console.log("Тэнцүү");
// }

// 6

// const total = 200000
// if (total < 100000) {
//     console.log(total);
// }else if (total < 200000) {
//     console.log(total * 0.9);
// }else {
//     console.log(total * 0.8);
// }

// 7

// const battery = 100
// if (battery < 0) {
//     console.log("Буруу утга");
// }else if (battery == 0) {
//     console.log("Унтарсан");
// }else if (battery < 20) {
//     console.log("Цэнэг бага");
// }else if (battery < 100) {
//     console.log("Цэнэг хэвийн");
// }else if (battery == 100) {
//     console.log("Бүрэн цэнэгтэй");
// } else {
//     console.log("Буруу утга");
// }

// 8

// const color = "red"
// if (color == "red") {
//     console.log("Зогс");
// }else if (color == "yellow") {
//     console.log("Хүлээ");
// }else if (color == "green") {
//     console.log("Яв");
// }else {
//     console.log("Буруу өнгө");
// }

// 9

// const distance = 3
// if (distance <= 0) {
//     console.log("Буруу зай");
// }else if (distance <= 3) {
//     console.log(3000);
// }else if (distance <= 10) {
//     console.log(5000);
// }else {
//     console.log(8000);
// }

// 10

// const secret = 5
// const guess = 5
// if (secret < guess) {
//     console.log("Илүү бага тоо сонгоорой");
// }else if (secret > guess) {
//     console.log("Илүү их тоо сонгоорой");
// }else {
//     console.log("Зөв таалаа!");
// }

// 11

// const number = 11
// if (number % 5 == 0) {
//     console.log("yes");
// }else {
//     console.log("no");
// }

// 12

// const number = 23
// if (number % 2 == 0) {
//     console.log("even");
// } else {
//     console.log("odd");
// }

// 13

// const number = 9
// if (number % 3 == 0 && number % 5 == 0) {
//     console.log("FizzBuzz");
// }else if (number % 3 == 0 && number % 5 !== 0) {
//     console.log("Fizz");
// }else if (number % 5 == 0 && number % 3 !== 0) {
//     console.log("Buzz");
// }else {
//     console.log(number);
// }

// 14

// const number = 98
// if (number > 100) {
//     console.log(100);
// }else {
//     console.log(number);
// }

// 15

// const number = -5
// console.log(Math.abs(number));

// 16

// const dugaar = 2921
// const lastDigit = dugaar % 10
// switch (lastDigit) {
//     case 1:
//     case 6:
//         console.log("Даваа");
//         break;
//     case 2:
//     case 7:
//         console.log("Мягмар");
//         break;
//     case 3:
//     case 8:
//         console.log("Лхагва");
//         break;
//     case 4:
//     case 9:
//         console.log("Пүрэв");
//         break;
//     case 5:
//     case 0:
//         console.log("Баасан");
//         break;
//     default:
//         break;
// }

// 17

// const day = 1
// switch (day) {
//     case 1:
//         console.log("Monday");
//         break;
//     case 2:
//         console.log("Tuesday");
//         break;
//     case 3:
//         console.log("Wednesday");
//         break;
//     case 4:
//         console.log("Thursday");
//         break;
//     case 5:
//         console.log("Friday");
//         break;
//     case 6:
//         console.log("Saturday");
//         break;
//     case 7:
//         console.log("Sunday");
//         break;
//     default:
//         console.log("Буруу дугаар");
//         break;
// }

// 18

// const a = 6
// const b = 8
// const c = 10
// if (a > 0 && b > 0 && c > 0 && a + b > c && a + c > b && c + b > a) {
//     console.log("YES");
// }else{
//     console.log("NO");
// }

// 19

// const year = 2026
// const yearDiff = year - 1896
// if (yearDiff % 4 == 0 %% year >= 1896) {
//     console.log("Зуны олимпийн жил");
// }else{
//     console.log("Зуны олимпийн жил биш");
// }

// 20

// const year = 2026
// const yearDiff = year - 1924
// const yearDiff2 = year - 1994
// if (year <= 1992 && yearDiff % 4 == 0) {
//     console.log("Өвлийн олимпийн жил");
// }else if (year > 1992 && yearDiff2 % 4 == 0) {
//     console.log("Өвлийн олимпийн жил");
// }else {
//     console.log("Өвлийн олимпийн жил биш");
// }

// 21

// const month = 6
// switch (month) {
//     case 12:
//     case 1:
//     case 2:
//         console.log("Өвөл");
//         break;
//     case 3:
//     case 4:
//     case 5:
//         console.log("Хавар");
//         break;
//     case 6:
//     case 7:
//     case 8:
//         console.log("Зун");
//         break;
//     case 9:
//     case 10:
//     case 11:
//         console.log("Намар");
//         break;
//     default:
//         console.log("Буруу сарын дугаар");
//         break;
// }

// 22

// const fuelType = "92"
// const liters = 1
// switch (fuelType) {
//     case "92":
//         console.log(5500 * liters);
//         break;
//     case "95":
//         console.log(7000 * liters);
//         break;
//     case "D":
//         console.log(6000 * liters);
//         break;
//     default:
//         console.log("Шатахууны төрөл буруу");
//         break;
// }

// 23

// const a = 3
// const b = 2
// const c = 1
// if (a > b && b > c) {
//     console.log(true);
// }else{
//     console.log(false);
// }

// 24

// const a = 3
// const b = 3
// const c = 3
// if (a == b && b == c) {
//     console.log(true);
// }else{
//     console.log(false);
// }

// 25

// const a = 3
// const b = 3
// const c = 3
// if (a > 0 && b > 0 && c > 0) {
//     console.log(true);
// }else{
//     console.log(false);
// }

// 26

// const a = 6
// const b = 2
// const c = 4
// if (a % 2 == 0 && b % 2 == 0 && c % 2 == 0) {
//     console.log(true);
// }else{
//     console.log(false);
// }

// 27

// const a = 6
// const b = 2
// const c = -5
// if (a < 0 || b < 0 || c < 0) {
//     console.log(true);
// }else{
//     console.log(false);
// }

// 28

// const number = 19
// console.log(`${number % 10}${Math.trunc(number / 10)}`);

// 29

// const number = 40
// console.log(Number(number % 10) * Math.trunc(number / 10));

// 30

// const year = 2024
// if (year % 400 == 0 || year % 4 == 0 && year % 100 !== 0) {
//     console.log("Өндөр жил");
// }else{
//     console.log('Өндөр жил биш');
// }

// 31

// const elapsed = 1791863807700
// const year = elapsed / Number(1000 * 60 * 60 * 24 * 30 * 12)
// const month = Number(elapsed % Number(1000 * 60 * 60 * 24 * 30 * 12)) / Number(1000 * 60 * 60 * 24 * 30)
// const day = Number(Number(elapsed % Number(1000 * 60 * 60 * 24 * 30 * 12)) % Number(1000 * 60 * 60 * 24 * 30)) / Number(1000 * 60 * 60 * 24)
// const hour = Number(Number(Number(elapsed % Number(1000 * 60 * 60 * 24 * 30 * 12)) % Number(1000 * 60 * 60 * 30)) % Number(1000 * 60 * 60 * 24)) / Number(1000 * 60 * 60)
// const minute = Number(Number(Number(Number(elapsed % Number(1000 * 60 * 60 * 24 * 30 * 12)) % Number(1000 * 60 * 60 * 30)) % Number(1000 * 60 * 60)) % Number(1000 * 60 * 60)) / 60000
// const second = Number(Number(Number(Number(Number(elapsed % Number(1000 * 60 * 60 * 24 * 30 * 12)) % Number(1000 * 60 * 60 * 30)) % Number(1000 * 60 * 60)) % Number(1000 * 60 * 60)) % 60000) / 1000
// const doli = Number(Number(Number(Number(Number(Number(elapsed % Number(1000 * 60 * 60 * 24 * 30 * 12)) % Number(1000 * 60 * 60 * 30)) % Number(1000 * 60 * 60)) % Number(1000 * 60 * 60)) % 60000) % 1000
// ) / 100
// const millisecond = Number(Number(Number(Number(Number(Number(elapsed % Number(1000 * 60 * 60 * 24 * 30 * 12)) % Number(1000 * 60 * 60 * 30)) % Number(1000 * 60 * 60)) % Number(1000 * 60 * 60)) % 60000) % 1000
// ) % 100
// console.log(`${Math.trunc(year)}Year ${Math.trunc(month)}Month ${Math.trunc(day)}Day ${Math.trunc(hour)}Hour ${Math.trunc(hour)}Hour ${Math.trunc(minute)}Minute ${Math.trunc(second)}Second ${Math.trunc(doli)}Doli ${millisecond}MilleSecond`);

// 32

// const a = 2
// const b = 1
// const c = 3
// console.log(Math.min(a, b, c));

// 33

const a = 2
const b = 1
const c = 3
console.log(Math.max(a, b ,c) - Math.min(a, b, c));