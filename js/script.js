// Toggle class active

// const adalah scope blok. Seperti let, const hanya dapat di akses didalam blok dimana variabel tersebut di deklarasikan.
// Selector, jangan lupa selalu gunakan tanda tiktik satu/dua atas contoh ('nama yg di select')/ ("nama yg di select")
// "document.querySelector" adalah selector yang digunakan untuk memilih sebuah elemen. Pemilihan elemen bisa berdasarkan id, class, name, atau property lainnya
// gunakan juga tanda titik koma ":" pada setiap akhir kalimat/perintah operasi
const navbarNav = document.querySelector(".navbar-nav");
// ketika menu opsi di klik
// cara baca di bawah ("document.queryselector" cari element yang nama "id-nya" "menunya" lalu ketika dia di klik (.onclick) sama dengan jalanin fungsi berikut ini ( "= () => {}" ) )
document.querySelector("#option").onclick = () => {
  navbarNav.classList.toggle("active"); // toggle ini artinya navbarNav kelas listnya kita toggle (jadi kl sebelumnya gk ada kelasnya tambahin, sebaliknya kl udah ada kelasnya ilangin)
};

// klik di luar side bar untuk hilangin nav
// cara baca di bawah (carikan element yg nama selectornya #option)
const opsi = document.querySelector("#option");
//bacanya: ketika di klik (click), dimanapun di halaman (addevenlistener), maka jalankan fungsi, ambil eventnya (e)
document.addEventListener("click", function (e) {
  //bacanya: jika selama yg di klik (bukan "!") opsi dan (&&) (bukan "!") navbarNav, maka tampilan navbarNav.classList dihilangkan.
  // kode ".contains(e.target)" digunakan untuk memastikan konten mana yg digunakan agar komputer tidak bingung bacanya.
  if (!opsi.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
