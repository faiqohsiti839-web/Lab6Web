// Dijalankan di <head> tanpa defer → elemen belum ada → getElementById mengembalikan null
const judul = document.getElementById("judul");
console.log("Hasil getElementById:", judul);   // null
judul.textContent = "Belajar JavaScript DOM";   // TypeError
