function ubahHuruf(kata) {
    let abjad = "abcdefghijklmnopqrstuvwxyz";
    let hasil = "";

    for (let i = 0; i < kata.length; i++) {
        let huruf = kata[i];
        let posisi = abjad.indexOf(huruf);
        if (posisi >= 0) {
            let kataBaru = abjad[posisi + 1];
            hasil += kataBaru
        }
    }
    return hasil;
}

// TEST CASES
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu