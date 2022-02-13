///07-error-and-debugging.js

/// Soal - 01
/// Kamu diminta untuk menjelaskan apa perbedaan antara
/// - Type Error
/// - Reference Error
/// - Range Error
/// - Syntax Error

/// - Type Error merupakan error yang muncul jika Anda menggunakan nilai yang berada di luar kisaran tipe yang diharapkan.
/// - Reference Error merupakan error yang disebaban jika Anda menggunakan (referensi) variabel yang belum dideklarasikan.
/// - Range Error merupakan error yang disebaban jika Anda menggunakan angka yang berada di luar rentang nilai legal.
/// - Syntax Error merupakan error apabila mencoba mengevaluasi kode dengan kesalahan sintaks.

/// Soal - 02
/// Kamu diminta untuk melakukan analisa terhadap baris kode dibawah dengan instruksi detail sebagai berikut:
/// - apabila kita menjalankan baris kode dibawah apa yang akan terjadi?
/// - apabila terjadi error, termasuk dalam kategori manakah error tersebut?
/// - apabila terjadi error, jelaskan mengapa hal tersebut bisa terjadi

console.log(salaryWithVar)
console.log(salaryWithConst)

var salaryWithVar = 15000000;
const salaryWithConst = 15000000;

//- Error
//Refrence Error
//variabel belum dideklarasikan sehingga peirntah console.log error dalam mencetak variabel yang diperintakan