const listDokterUmum = [
    {
        nama: "dr. Ucup",
        imgUrl: "https://pbs.twimg.com/profile_images/1510276954938920966/_jPqrcHD_400x400.jpg",
        description: "lorem ipsum dolor sit amet",
    },
    {
        nama: "dr. Icip",
        imgUrl: "https://i.pinimg.com/736x/c6/de/4f/c6de4fbc92c32c25dd90c41884968d63--die-minions-minion-s.jpg",
        description: "lorem ipsum dolor sit amet",
    },
    {
        nama: "dr. Acap",
        imgUrl: "https://m.media-amazon.com/images/I/71-2AA1-HeL._AC_SL1500_.jpg",
        description: "lorem ipsum dolor sit amet",
    },
    {
        nama: "dr. Ecep",
        imgUrl: "https://m.media-amazon.com/images/I/71-2AA1-HeL._AC_SL1500_.jpg",
        description: "lorem ipsum dolor sit amet",
    },
]

const listDokterAnak = [
    {
        nama: 'dr. Iva',
        imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Jisoo_in_2022.jpg',
        description: 'Dokter tercantik di rumah sakit'
    },
    {
        nama: 'dr. Juned',
        imgUrl: 'https://cdn1-production-images-kly.akamaized.net/fwRofQtHSSiaKlk4nb3s2kORpTw=/640x853/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/2398072/original/064695400_1541071261-Iqbaal_1.jpg',
        description: 'Dokter tertamvhan di rumah sakit'
    },
    {
        nama: 'dr. Pelangi',
        imgUrl: 'https://thumb.viva.co.id/media/frontend/thumbs3/2021/05/05/6091df2c9c45c-chelsea-islan_665_374.jpg',
        description: 'Dokter termanis di rumah sakit'
    }
]

const listDokterTht = [
    {
        nama: 'dr. Benny',
        imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8IaL1jhRq7UlHAdZe2LtJRF8bjOpqcFjVMA&usqp=CAU',
        description: 'Dokter THT pengalaman 5 Tahun'
    },
    {
        nama: 'dr. Bonny',
        imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYDJkdL8b9n2uf-B4fmiOuxKS4CaYhfH7cNA&usqp=CAU',
        description: 'Dokter THT pengalaman 3 Tahun'
    },
    {
        nama: 'dr. Bunny',
        imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8IaL1jhRq7UlHAdZe2LtJRF8bjOpqcFjVMA&usqp=CAU',
        description: 'Dokter THT Freshgrad'
    }
]

const listDokterKecantikan = [
    {
        nama: 'dr. Dustin',
        imgUrl: './img-kecantikan/3.jpg',
        description: 'Dokter untuk anda'
    },
    {
        nama: 'dr. Tretan',
        imgUrl: "./img-kecantikan/2.jpg",
        description: 'Ketua Majelis dokter kecantikan'
    },
    {
        nama: 'dr. WakWau',
        imgUrl: './img-kecantikan/1.jpg',
        description: 'Wakwauuuuuu'
    }
]

const descriptionBox = document.getElementById('description-box');
const formDoctorName = document.getElementById('form-dokter-name');
const btnSave = document.getElementById('save');
const tableAppointment = document.getElementById('table-appointment');
let output = [];
let iterasi = 0;

function createListDoctor(imageUrl, name, description) {
    const card = document.createElement('div');
    card.className = "card mb-3";
    card.style = "max-width:70%";

    const row = document.createElement('div');
    row.className = "row g-0";

    card.appendChild(row);

    const firstCol = document.createElement('div');
    firstCol.className = "col-md-4";

    const img = document.createElement('img');
    img.src = imageUrl;
    img.className = "img-fluid rounded-start"

    firstCol.appendChild(img);

    const secCol = document.createElement('div');
    secCol.className = "col-md-8";

    const cardBody = document.createElement('div');
    cardBody.className = "card-body";

    const doctorName = document.createElement('h5');
    doctorName.className = "card-title";
    doctorName.innerText = name;

    const doctorDesc = document.createElement('p');
    doctorDesc.className = "card-text"
    doctorDesc.innerText = description;

    const btnDetail = document.createElement('button');
    btnDetail.className = "btn btn-outline-primary";
    btnDetail.innerText = "Detail"

    btnDetail.onclick = function () {
        descriptionBox.hidden = false;
        formDoctorName.value = name;
        fillDoctorDetail(imageUrl, name, description);

    }

    cardBody.appendChild(doctorName);
    cardBody.appendChild(doctorDesc);
    cardBody.appendChild(btnDetail);

    secCol.appendChild(cardBody);

    row.appendChild(firstCol);
    row.appendChild(secCol);

    card.appendChild(row);

    const list = document.getElementById('nav-umum');
    list.appendChild(card);
}

function createListDoctorTht(imageUrl, name, description) {
    const card = document.createElement('div');
    card.className = "card mb-3";
    card.style = "max-width:70%";

    const row = document.createElement('div');
    row.className = "row g-0";

    card.appendChild(row);

    const firstCol = document.createElement('div');
    firstCol.className = "col-md-4";

    const img = document.createElement('img');
    img.src = imageUrl;
    img.className = "img-fluid rounded-start"

    firstCol.appendChild(img);

    const secCol = document.createElement('div');
    secCol.className = "col-md-8";

    const cardBody = document.createElement('div');
    cardBody.className = "card-body";

    const doctorName = document.createElement('h5');
    doctorName.className = "card-title";
    doctorName.innerText = name;

    const doctorDesc = document.createElement('p');
    doctorDesc.className = "card-text"
    doctorDesc.innerText = description;

    const btnDetail = document.createElement('button');
    btnDetail.className = "btn btn-outline-primary";
    btnDetail.innerText = "Detail"

    btnDetail.onclick = function () {
        descriptionBox.hidden = false;
        formDoctorName.value = name;
        fillDoctorDetail(imageUrl, name, description);

    }

    cardBody.appendChild(doctorName);
    cardBody.appendChild(doctorDesc);
    cardBody.appendChild(btnDetail);

    secCol.appendChild(cardBody);

    row.appendChild(firstCol);
    row.appendChild(secCol);

    card.appendChild(row);

    const list = document.getElementById('nav-tht');
    list.appendChild(card);
}

function createListDoctorKecantikan(imageUrl, name, description) {
    const card = document.createElement('div');
    card.className = "card mb-3";
    card.style = "max-width:70%";

    const row = document.createElement('div');
    row.className = "row g-0";

    card.appendChild(row);

    const firstCol = document.createElement('div');
    firstCol.className = "col-md-4";

    const img = document.createElement('img');
    img.src = imageUrl;
    img.className = "img-fluid rounded-start"

    firstCol.appendChild(img);

    const secCol = document.createElement('div');
    secCol.className = "col-md-8";

    const cardBody = document.createElement('div');
    cardBody.className = "card-body";

    const doctorName = document.createElement('h5');
    doctorName.className = "card-title";
    doctorName.innerText = name;

    const doctorDesc = document.createElement('p');
    doctorDesc.className = "card-text"
    doctorDesc.innerText = description;

    const btnDetail = document.createElement('button');
    btnDetail.className = "btn btn-outline-primary";
    btnDetail.innerText = "Detail"

    btnDetail.onclick = function () {
        descriptionBox.hidden = false;
        formDoctorName.value = name;
        fillDoctorDetail(imageUrl, name, description);

    }

    cardBody.appendChild(doctorName);
    cardBody.appendChild(doctorDesc);
    cardBody.appendChild(btnDetail);

    secCol.appendChild(cardBody);

    row.appendChild(firstCol);
    row.appendChild(secCol);

    card.appendChild(row);

    const list = document.getElementById('nav-kecantikan');
    list.appendChild(card);
}

function createListDoctorAnak(imageUrl, name, description) {
    const card = document.createElement('div');
    card.className = "card mb-3";
    card.style = "max-width:70%";

    const row = document.createElement('div');
    row.className = "row g-0";

    card.appendChild(row);

    const firstCol = document.createElement('div');
    firstCol.className = "col-md-4";

    const img = document.createElement('img');
    img.src = imageUrl;
    img.className = "img-fluid rounded-start"

    firstCol.appendChild(img);

    const secCol = document.createElement('div');
    secCol.className = "col-md-8";

    const cardBody = document.createElement('div');
    cardBody.className = "card-body";

    const doctorName = document.createElement('h5');
    doctorName.className = "card-title";
    doctorName.innerText = name;

    const doctorDesc = document.createElement('p');
    doctorDesc.className = "card-text"
    doctorDesc.innerText = description;

    const btnDetail = document.createElement('button');
    btnDetail.className = "btn btn-outline-primary";
    btnDetail.innerText = "Detail"

    btnDetail.onclick = function () {
        descriptionBox.hidden = false;
        formDoctorName.value = name;
        fillDoctorDetail(imageUrl, name, description);

    }

    cardBody.appendChild(doctorName);
    cardBody.appendChild(doctorDesc);
    cardBody.appendChild(btnDetail);

    secCol.appendChild(cardBody);

    row.appendChild(firstCol);
    row.appendChild(secCol);

    card.appendChild(row);

    const list = document.getElementById('nav-anak');
    list.appendChild(card);
}

function fillDoctorDetail(imageUrl, name, description) {
    const img = document.getElementById('img-detail-dokter');
    const doctorName = document.getElementById('name-detail-dokter');
    const doctorDesc = document.getElementById('desc-detail-dokter');

    img.src = imageUrl;
    doctorName.innerText = name;
    doctorDesc.innerText = description;
}

btnSave.onclick = function () {
    output = [];
    tableAppointment.hidden = false;
    fillForm();
    for (let i = 0; i < output.length; i++) {
        const { nama, hari, sesi, usia, dokter } = output[i];
        fillTable(nama, hari, sesi, usia, dokter, iterasi);
        iterasi++;

    }
    resetForm();
}

function fillForm() {
    const dokter = document.getElementById('form-dokter-name').value;
    const hari = document.getElementById('form-hari').value;
    const sesi = document.getElementById('form-sesi').value;
    const nama = document.getElementById('form-nama').value;
    const usia = document.getElementById('form-usia').value;
    output.push({
        nama,
        hari,
        sesi,
        usia,
        dokter
    })
}

function fillTable(nama, hari, sesi, usia, dokter, iterasi) {
    const tr = document.createElement('tr');
    const no = document.createElement('td');
    const fullName = document.createElement('td');
    const hariEl = document.createElement('td');
    const sesiEl = document.createElement('td');
    const usiaEl = document.createElement('td');
    const dokterEl = document.createElement('td');
    const aksi = document.createElement('td');

    // const btnEdit = document.createElement('button');
    // btnEdit.className = "btn btn-outline-success";
    // btnEdit.addEventListener("click", function (e) {
    //     console.log("hiiiiii");
    // });

    // const btnUpdate = `<button class="btn btn-outline-success" style="margin-left: 5px;" onclick="updateTable()" data-bs-toggle="modal"
    //                         data-bs-target="#updateModal">Ubah Jadwal</button>`
    const btnDelete = `<button class="btn btn-outline-danger" id="btn-delete-2" style="margin-left: 5px;" onclick="deleteTable(${iterasi})">Batalkan Jadwal</button>`

    // aksi.appendChild(btnEdit);

    let index = document.getElementById('tbody').children.length + 1;

    no.innerText = index;
    fullName.innerText = nama;
    usiaEl.innerText = usia;
    hariEl.innerText = hari;
    sesiEl.innerText = sesi;
    dokterEl.innerText = dokter;
    // btnEdit.innerText = "Ubah Jadwal";

    // aksi.innerHTML += btnUpdate;
    aksi.innerHTML += btnDelete;

    tr.appendChild(no);
    tr.appendChild(fullName);
    tr.appendChild(hariEl);
    tr.appendChild(sesiEl);
    tr.appendChild(usiaEl);
    tr.appendChild(dokterEl);
    tr.appendChild(aksi);

    const tbody = document.getElementById('tbody');
    tbody.appendChild(tr);
}

function deleteTable(number) {
    const tbody = document.getElementById('tbody');
    if (tbody.children.length === 1) {
        tbody.removeChild(tbody.firstElementChild);
        tableAppointment.hidden = true;
    } else {
        tbody.removeChild(tbody.children[number]);
    }
    iterasi--;

    console.log(number, iterasi);
}

//
// function updateTable(number, nama, hari, sesi, usia, dokter) {
//     console.log(nama, hari, sesi, usia, dokter);
// }

function resetForm() {
    document.getElementById('form-hari').value = 'Pilih hari';
    document.getElementById('form-sesi').value = 'Pilih sesi';
    document.getElementById('form-nama').value = '';
    document.getElementById('form-usia').value = '';
}

for (let i = 0; i < listDokterUmum.length; i++) {
    const { nama, imgUrl, description } = listDokterUmum[i];
    createListDoctor(imgUrl, nama, description);
}

for (let i = 0; i < listDokterAnak.length; i++) {
    const { nama, imgUrl, description } = listDokterAnak[i];
    createListDoctorAnak(imgUrl, nama, description)
}

for (let i = 0; i < listDokterTht.length; i++) {
    const { nama, imgUrl, description } = listDokterTht[i];
    createListDoctorTht(imgUrl, nama, description)
}

for (let i = 0; i < listDokterKecantikan.length; i++) {
    const { nama, imgUrl, description } = listDokterKecantikan[i];
    createListDoctorKecantikan(imgUrl, nama, description)
}
