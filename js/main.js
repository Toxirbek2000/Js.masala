// let age = prompt(5)

// if (age <= 0) {
//     console.log("dadasini belida");
// }
// else if (age <= 1 && age < 5) {
//     console.log("Chaqaloq")
// }
// else if (age >= 5 && age < 15) {
//     console.log("yosh bola");
// }
// else if (age >= 15 && age < 25) {
//     console.log("O'smir");
// }
// else if (age >= 25 && age < 35) {
//     console.log("Adult");
// }
// else if (age >= 35 && age < 50) {
//     console.log("Katta yosh");
// }
// else if (age >= 50 && age < 75) {
//     console.log("Tog'a");
// }
// else if (age >= 75) {
//     console.log("uje yaqin");
// }


// Masala N1

// let number = prompt(7854)
// if (number >= 0 && number <= 9){
//      console.log(number + " bir honali son");
// }
//  else if (number >= 10 && number <= 99){
//      console.log(number + " ikki honali son");
// }
//  else if (number > 99 && number <= 999){
//      console.log(number + " uch honali son");
// }
//  else if (number > 999 && number <= 9999){
//      console.log(number + " to'rt honali son");
// }


// Masala N2

// let number = prompt(45)
// if (number % 2 == 0){
//     console.log("Juft son");
// }
// else {
//     console.log("bu toq son");
// }


// Masala N3

// let promt = prompt("ixtiyoriy son");
// let xonali = promt.length;
// if(promt % 2 == 0){
//     alert(`Kiritilgan son juft va bu son ${xonali} xonali`)
// }else {
//     alert(`Kiritilgan son toq va bu son ${xonali} xonali`)
// }


// Masala N4

// let a = prompt("1. Ixtiyoriy bir xonali son kiriting");
// let b = prompt("2. Ixtiyoriy bir xonali son kiriting");
// let c = prompt("3. Ixtiyoriy bir xonali son kiriting");

// if (a >= b && a >= c) {
//     if (b >= c) {
//         alert("" + a + b + c);
//     } else {
//         alert("" + a + c + b);
//     }
// } else if (b >= a && b >= c) {
//     if (a >= c) {
//         alert("" + b + a + c);
//     } else {
//         alert("" + b + c + a);
//     }
// } else {
//     if (a >= b) {
//     alert("" + c + a + b);
// } else {
//     alert("" + c + b + a);
//     }
// }


// Masala N5

// let promt = prompt("Uch xonali son kiriting");
// let a = Math.floor(promt / 100);
// let b = Math.floor((promt / 10) % 10);
// let c = promt % 10
// alert(Math.min(a, b, c));


// Masala N6

// let promt = prompt("Uch xonali son kiriting");
// alert(Math.floor((promt / 10) % 10))


// Masala N7

// let speed = prompt("Tezlikni kiriting:");
// if (speed <= 70) {
//     alert("Hammasi yaxshi");
// } else {
//     let points = Math.floor((speed - 70) / 5);
//     alert(points >= 12 ? "Prava olindi" : "Pointlar: " + points);
// }

 
// Masala N8

// let birthYear = prompt("Tug'ilgan yilingizni kiriting:");
// let age = 2024 - birthYear;
// alert("Sizning yoshingiz: " + age);


// Masala N9

// let promt = prompt("Ixtiyoriy son kiriting");
// if(promt > 0 && promt % 2 == 0){
//     alert("Siz juft va musbat son kiritdinggiz")
// }else if(promt < 0 && promt % 2 == 0){
//     alert("Siz juft va manfiy son kiritdinggiz")
// }else if(promt < 0 && promt % 2 != 0){
//     alert("Siz toq va manfiy son kiritdinggiz")
// }else if(promt == 0){
//     alert("Siz 0 sonini kiritdinggiz")
// }else{
//     alert("Siz toq va musbat son kiritdinggiz")
// }


// Masala N10

// let n = prompt("Sonni kiriting:");
// if (n % 3 == 0 && n % 5 == 0) {
//     alert("FizzBuzz");
// } else if (n % 3 == 0) {
//     alert("Fizz");
// } else if (n % 5 == 0) {
//     alert("Buzz");
// } else {
//     alert(n);
// }



// Sayohat masalasi 

// let dollar = 11000.34;
// let euro = 12354.03;
// let flight = 500 * dollar;
// let hotel = 250 * dollar;
// let museum = 120 * euro;
// let total = flight + hotel + museum;
// let promt = prompt("Qancha pulingiz bor? (so'mda kiriting)");
// if(promt >= total){
//     alert(`Oq yo'l, Alisher! Sizda ${promt - total} so'm ortib qolar ekan`);
// }else {
//     alert(`Alisher, ozgina sabr qilish kerak bo'lar ekan.Kamida ${total} so'm kerak, siz yana ${total - promt} so'm yig'ishinggiz kerak`);
// }