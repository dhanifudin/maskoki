'use strict';

exports.seed = function (knex) {

    // Deletes ALL existing entries
    return knex('recipes').insert([
        {
            id: 1,
            title: 'Martabak Telor Rumahan',
            description: 'Bahannya gampang dicari',
            image: 'https://img-global.cpcdn.com/recipes/edc3acd4a1b061a0/1502x1064cq70/martabak-telor-rumahan%F0%9F%98%8A-foto-resep-utama.jpg',
            ingredients: `
1 bungkus lumpia sudah jadi
4-5 butir telor ayam/bebek lebih enak pake telor bebek
1 batang Daun bawang
Penyedap rasa
Ladaku bubuk
Sedikit Terigu untuk perekat`,
            instructions: `
Kocok telur sampai lepas,masukan Penyedap Rasa,ladaku+ Daun bawang.
Buat perekatnya Dari campuran terigu+sedikit air.
Siapkan lumpianya, lepas satu2 biar ga ribet. Masukan kocokan telor ditengah2.
Lipat kedua sisi lumpianya agar telor tidak meluber.
Lipat lagi kedua ujungnya, sambil dikasih perekat terigu.
Goreng lumpia diatas wajan yg apinya sedang, Karena cepat gosong jangan lupa dibolak Balik.
Martabak telor siap dihidangkan.`
        },
        {
            id: 2,
            title: 'Bakwan Jagung Fenomenal',
            description: 'Bakwan jagung terenak ya buatan sendiri emang sesuka itu sama lauk ini',
            image: 'https://img-global.cpcdn.com/recipes/44d2b1b5c30320ca/1502x1064cq70/bakwan-jagung-fenomenal-foto-resep-utama.jpg',
            ingredients: `
3 buah jagung manis (iris dan serut)
4 sdm tepung terigu
1 sdm tepung tapioka
Daun bawang dan seledri iris halus
Bumbu Halus
4 cabe rawit
1 cabe merah
1 ruas kunci
1 ruas kencur
1 ruas laos
2 lembar daun jeruk
4 siung bawang putih
7 siung bawang merah
lada bubuk
masako
1 sdm gula`,
            instructions: `
Cuci bersih semua bahan. Haluskan jagung yang sudah diserut. Saya pakai ulekan, boleh diblender. Tidak usah terlalu halus
Campurkan jagung yang telah dihaluskan tepung terigu, tapioka dan bumbu halus
Masukkan daun bawang dan daun seledri. Aduk merata. Jangan lupa cek rasa ya bund
Panaskan minyak. Ambil 1 sendok adonan. Goreng sampai matang dan berwarna kecoklatan. Tiriskan`
        }
    ]);
};
