// =======================
// VALIDASI FORM
// =======================

document.getElementById("bookingForm").addEventListener("submit", function (e) {

    e.preventDefault();

    let nama = document.getElementById("nama");
    let email = document.getElementById("email");
    let telp = document.getElementById("telp");

    let valid = true;

    // Nama
    if (nama.value.trim() === "") {
        nama.nextElementSibling.innerText = "Nama harus diisi";
        valid = false;
    } else {
        nama.nextElementSibling.innerText = "";
    }

    // Email
    if (!email.value.includes("@")) {
        email.nextElementSibling.innerText = "Email tidak valid";
        valid = false;
    } else {
        email.nextElementSibling.innerText = "";
    }

    // Telepon
    if (telp.value <= 0) {
        telp.nextElementSibling.innerText = "Nomor harus positif";
        valid = false;
    } else {
        telp.nextElementSibling.innerText = "";
    }

    // Jika valid
    if (valid) {
        alert("Pemesanan berhasil!");
    }

});


// =======================
// DATA DINAMIS ARTIKEL
// =======================

let items = [
    { nama: "Tips Traveling ke Inggris" },
    { nama: "Melihat Aurora di Iceland" },
    { nama: "Wisata Kanal Amsterdam" },
    { nama: "Balon Udara di Cappadocia" }
];


function renderItems() {

    let list = document.getElementById("itemList");

    list.innerHTML = "";

    items.forEach((item, index) => {

        let li = document.createElement("li");

        li.innerHTML =
            item.nama +
            ` <button onclick="deleteItem(${index})">Hapus</button>`;

        list.appendChild(li);

    });

}


function addItem() {

    let input = document.getElementById("itemInput");

    if (input.value !== "") {

        items.push({ nama: input.value });

        input.value = "";

        renderItems();

    }

}


function deleteItem(index) {

    items.splice(index, 1);

    renderItems();

}

renderItems();


// =======================
// BACKGROUND HERO
// =======================

let images = [
    "assets/images/UK.webp",
    "assets/images/iceland.webp",
    "assets/images/Netherlands.jpeg",
    "assets/images/Turki.jpg"
];

let index = 0;

function changeHero() {

    let hero = document.getElementById("hero");

    hero.style.backgroundImage = `url(${images[index]})`;

    index++;

    if (index >= images.length) {
        index = 0;
    }

}

changeHero();

setInterval(changeHero, 4000);