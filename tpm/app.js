console.log("HEllow World")
// alert("Hello World")
document.write("Hello world")
document.getElementById("world").innerHTML = "helloworld";

// js jangan ditaro di atas html, jadi taro bawha aja
//kalo diatas, dia jadi lemot

// variabel
// var, let, const

//var itu bisa diakses dimana aja
//let itu harus dinisilaisasi dulu baru bisa dipake
//const itu gabisa diubah (constanta)

var a = 10;
let b = 100;
const c = 120;

console.log(a);
console.log(b);
console.log(c);

console.log(b);

let e = 1245;

console.log(e);

// alert("alertt");
// prompt("Siapa namanya");
// confirm("U sure?");

var count = 0;

// count = 1 - "1";
// 0
// count = 1 + "1";
// 11, ini jadi string

console.log(count);

var kali = 0;
// kali = 3 * "10";
// 30
// kali = 3 / "10";
// 0.3, sisanya normal kecuali +
console.log(kali);

// selection
// if else
// switch case

var x = 11;

// if(x < 10)
// {
//     console.log("dibawah 10");
// }
// else if(x === 11)
// === itu ngebandingin value sama tipe datanya
// kalo == doang cmn ngecek value
// mending pake ===
// {
//     console.log("angka 11");
// }

// else
// {
//     console.log("angka diatas 10");
// }

// switch case biasa

// selection juga bisa pake ternary
// perbandingan(w);
// kalo dipanggil disini, nilainya 0 pasti
function perbandingan(xx)
{
    console.log(xx);
    xx === 11 ? console.log(true) : console.log(false);
}

let w = 11;
perbandingan(w);

// increment, decrement biasa

// looping
for (let i = 0; i < 10; i++) {
   console.log(i);
}
// while
// do while
// sama
// ada yg beda
// for each

array = [1,2,3,4];
array.forEach(element => {
    console.log(array);
});
// itu outputnya 1 array semua, lengkap

array.forEach((i) => {
    console.log(i);
});
// kalo ini keluarnya satu2 elemen arraynya
// => itu function
// function di js bisa dibikin
// function asdas()
// {
//     // biasala
// }
//atau
var m = () =>
{
    console.log("ada");
};
//ini namanya arrow function, yg pake =>


    avanza = 
    {
        merek : "toyota",
        tahun : 2005
    };
    xenia = 
    {
        merek : "daihatsu",
        tahun : 2006
    }
console.log(avanza.merek);
console.log(avanza);