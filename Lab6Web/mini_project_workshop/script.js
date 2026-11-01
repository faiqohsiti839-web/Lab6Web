const form = document.getElementById("formWorkshop");
const inputNama = document.getElementById("nama");
const inputEmail = document.getElementById("email");
const pilihSesi = document.getElementById("sesi");
const tombolReset = document.getElementById("tombolReset");
const pesanForm = document.getElementById("pesanForm");
const hitungNama = document.getElementById("hitungNama");

const galat = {
  nama: document.getElementById("galatNama"),
  email: document.getElementById("galatEmail"),
  sesi: document.getElementById("galatSesi")
};
const ringkasan = {
  nama: document.getElementById("rNama"),
  email: document.getElementById("rEmail"),
  sesi: document.getElementById("rSesi")
};
const polaEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/* Fungsi 1: validasi per bidang (mengembalikan true jika valid) */
function tandai(elemen, pesanGalat, kunci) {
  galat[kunci].textContent = pesanGalat;
  elemen.classList.toggle("tidak-valid", pesanGalat !== "");
  elemen.classList.toggle("valid", pesanGalat === "");
  return pesanGalat === "";
}
function validasiNama() {
  const nilai = inputNama.value.trim();
  if (nilai === "") return tandai(inputNama, "Nama wajib diisi.", "nama");
  if (nilai.length < 3) return tandai(inputNama, "Nama minimal 3 karakter.", "nama");
  return tandai(inputNama, "", "nama");
}
function validasiEmail() {
  const nilai = inputEmail.value.trim();
  if (nilai === "") return tandai(inputEmail, "Email wajib diisi.", "email");
  if (!polaEmail.test(nilai)) return tandai(inputEmail, "Format email tidak valid.", "email");
  return tandai(inputEmail, "", "email");
}
function validasiSesi() {
  if (pilihSesi.value === "") return tandai(pilihSesi, "Pilih salah satu sesi.", "sesi");
  return tandai(pilihSesi, "", "sesi");
}

/* Fungsi 2: penghitung karakter + ringkasan input langsung (event input & change) */
function perbaruiRingkasan() {
  ringkasan.nama.textContent = inputNama.value.trim() || "-";
  ringkasan.email.textContent = inputEmail.value.trim() || "-";
  ringkasan.sesi.textContent = pilihSesi.value || "-";
}
inputNama.addEventListener("input", function () {
  hitungNama.textContent = inputNama.value.length;
  perbaruiRingkasan();
  if (inputNama.classList.contains("tidak-valid")) validasiNama();
});
inputEmail.addEventListener("input", function () {
  perbaruiRingkasan();
  if (inputEmail.classList.contains("tidak-valid")) validasiEmail();
});
pilihSesi.addEventListener("change", function () {
  perbaruiRingkasan();
  validasiSesi();
});
inputNama.addEventListener("blur", validasiNama);
inputEmail.addEventListener("blur", validasiEmail);

/* Fungsi 3: submit — pesan kesalahan / sukses di halaman */
form.addEventListener("submit", function (event) {
  event.preventDefault();
  const hasil = [validasiNama(), validasiEmail(), validasiSesi()];
  if (hasil.every(Boolean)) {
    pesanForm.className = "sukses";
    pesanForm.textContent = "Pendaftaran berhasil! Sampai jumpa di sesi " + pilihSesi.value + ".";
  } else {
    pesanForm.className = "error";
    pesanForm.textContent = "Periksa kembali data yang ditandai merah.";
  }
});

/* Fungsi 4: tombol reset / hapus input */
tombolReset.addEventListener("click", function () {
  form.reset();
  Object.keys(galat).forEach(function (k) { galat[k].textContent = ""; });
  [inputNama, inputEmail, pilihSesi].forEach(function (el) { el.classList.remove("valid", "tidak-valid"); });
  hitungNama.textContent = "0";
  pesanForm.className = "";
  pesanForm.textContent = "";
  perbaruiRingkasan();
  inputNama.focus();
});
