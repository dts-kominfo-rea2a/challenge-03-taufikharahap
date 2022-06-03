// ! JANGAN DIMOFIDIKASI
const dataBelanjaan = [
    {
        id: "D-10001",
        nama: "Minyak Goreng Delima",
        harga: 25000,
        kuantitas: 2,
    },
    {
        id: "D-10020",
        nama: "Beras Mamos",
        harga: 48000,
        kuantitas: 1,
    },
    {
        id: "F-00010",
        nama: "Larutan Cap Kaki Empat",
        harga: 7500,
        kuantitas: 8,
    },
];

// boleh dimodifikasi bila ingin menggunakan deklarasi fungsi yang normal
const listBelanjaan = (dataArrays) => {
    let array = [];
    for (let i = 0; i < dataArrays.length; i++) {
        array.push(`${dataArrays[i].nama} x ${dataArrays[i].kuantitas}`);
    }
    return array;
};

// boleh dimodifikasi bila ingin menggunakan deklarasi fungsi yang normal
const totalBelanjaan = (dataArrays) => {
    let totalHarga = 0;
    for (let i = 0; i < dataArrays.length; i++) {
        totalHarga += dataArrays[i].harga * dataArrays[i].kuantitas;
    }
    return totalHarga;
};

// ! JANGAN DIMODIFIKASI
const main = () => {
    console.log("Selamat datang customer");

    console.log("Belanjaan Anda adalah:");
    console.log(listBelanjaan?.(dataBelanjaan)?.join("\n"));
    console.log(
        "\nTotal Belanjaan Anda adalah Rp. " + totalBelanjaan?.(dataBelanjaan)
    );
};

main();

module.exports = {
    dataBelanjaan,
    listBelanjaan,
    totalBelanjaan,
};
