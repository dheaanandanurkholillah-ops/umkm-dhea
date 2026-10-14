// MENU NAVIGASI HP
const menuToggle = document.getElementById("menuToggle");
const menu = document.getElementById("menu");

menuToggle.addEventListener("click", function () {
    const terbuka = menu.classList.toggle("active");

    menuToggle.setAttribute("aria-expanded", terbuka);
    menuToggle.setAttribute(
        "aria-label",
        terbuka ? "Tutup menu" : "Buka menu"
    );

    menuToggle.textContent = terbuka ? "✕" : "☰";
});

// TUTUP MENU SETELAH LINK DIKLIK
document.querySelectorAll(".menu a").forEach(function (link) {
    link.addEventListener("click", function () {
        menu.classList.remove("active");
        menuToggle.textContent = "☰";
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Buka menu");
    });
});

// PESAN PRODUK MELALUI WHATSAPP
const nomorWhatsApp = "6281265674367";

document.querySelectorAll(".pesan").forEach(function (tombol) {
    tombol.addEventListener("click", function () {
        const produk = tombol.dataset.produk;

        const pesan =
            "Halo UMKM-DHEA, saya ingin memesan " +
            produk +
            " dengan harga Rp10.000. Apakah masih tersedia?";

        const linkWhatsApp =
            "https://wa.me/" +
            nomorWhatsApp +
            "?text=" +
            encodeURIComponent(pesan);

        window.open(linkWhatsApp, "_blank", "noopener,noreferrer");
    });
});

// TAHUN OTOMATIS DI FOOTER
document.getElementById("tahun").textContent =
    new Date().getFullYear();

// STATUS JAM OPERASIONAL
function periksaJamOperasional() {
    const sekarang = new Date();

    // Menggunakan zona waktu Indonesia Barat
    const waktu = new Date(
        sekarang.toLocaleString("en-US", {
            timeZone: "Asia/Jakarta"
        })
    );

    const hari = waktu.getDay();
    const jam = waktu.getHours();

    const status = document.getElementById("statusBuka");

    // Senin-Sabtu, pukul 08.00 sampai sebelum 17.00
    const hariKerja = hari >= 1 && hari <= 6;
    const sedangBuka = jam >= 8 && jam < 17;

    if (hariKerja && sedangBuka) {
        status.textContent = "● Sedang Buka";
        status.style.color = "#387a38";
    } else {
        status.textContent = "● Sedang Tutup";
        status.style.color = "#a33b2b";
    }
}

periksaJamOperasional();

// TOMBOL SALIN EMAIL
const emailButton = document.getElementById("emailButton");

emailButton.addEventListener("click", async function () {
    const email = document.getElementById("email").textContent.trim();

    try {
        await navigator.clipboard.writeText(email);
        emailButton.textContent = "Email Disalin!";
    } catch (error) {
        window.prompt("Salin email berikut:", email);
    }
});