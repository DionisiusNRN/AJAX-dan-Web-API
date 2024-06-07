const form = document.querySelector('#search-form');

form.addEventListener('submit', async (e) => {
    e.preventDefault(); // preventDefault supaya ketika disubmit, formnya tidak akan kemana2 atau pindah halaman/tab atau bahkan tidak akan melakukan refresh

    // SEMUA element img, MASING-MASING nya akan di HAPUS
    document.querySelectorAll('img').forEach((img) => img.remove());
    
    const keyword = form.elements.query.value;
    const config = {
        params: { q: keyword },
    };
    const res = await axios.get(`http://api.tvmaze.com/search/shows`, config);
    getImages(res.data);
    form.elements.query.value = ''; // supaya tidak perlu hapus ulang jika ingin mencari movie baru
});

const getImages = (shows) => {
    for (let result of shows) { // mendapatkan result dari total shows yg dimiliki
        if (result.show.image) { // jika result memiliki object image
            const img = document.createElement('img'); // menambahkan element img
            img.src = result.show.image.medium; // menambahkan src pada element img
            document.body.append(img); // menampilkan di browser
        }
    }
}