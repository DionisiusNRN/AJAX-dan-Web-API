// const req = new XMLHttpRequest();

// let data;

// // onload kondisi berhasil
// req.onload = function() {
//     data = JSON.parse(this.responseText);
//     console.log(data);
// };

// //onerror kondisi gagal
// req.onerror = function() {
//     console.log('Error', this);
// };

// // re.open utk membuka API dengan methode GET dengan url swapi
// req.open('GET', 'https://swapi.dev/api/people/1');
// // req.send supaya req nya bisa dikirimkan sehingga bisa muncul
// req.send();


// //cara ini lebih panjang
// fetch('https://swapi.dev/api/people/1')
//     .then((res) => {
//         if (!res.ok) {
//             throw Error('Could not fetch data for that resource');
//         }
//         return res.json();
//     })
//     .then((data) => {
//         console.log('json 1', data); //memunculkan req 1
//         // melakukan req lagi
//         return fetch('https://swapi.dev/api/people/2')
//     })
//     .then((res) => {
//         console.log('request 2') //memunculkan re ke 2
//         if (!res.ok) {
//             throw Error('Could not fetch data for that resource');
//         }
//         return res.json();
//     })
//     .then((data) => {
//         console.log(data) //data ke 2
//     })
//     .catch((err) => {
//         console.log('error', err);
//     });



// // cara ini lebih singkat
// const loadPeople = async () => {
//     try {
//         const res = await fetch('https://swapi.dev/api/people/1');
//         const data = await res.json();
//         console.log(data);
//         const res2 = await fetch('https://swapi.dev/api/people/2');
//         const data2 = await res2.json();
//         console.log(data2);
//     } catch (err) {
//         // proses lainnya jika gagal
//         console.log('error', error);
//     }
// }

// loadPeople();



// // melakukan request menggunakan library axios
// axios
//     .get('https://swapi.dev/api/people/1')
//     .then((res) => {
//         console.log(res.data); // .data utk memunculkan langsung respon datanya
//     })
//     .catch((err) => {
//         console.log(err);
//         alert(err.message); // memunculkan error message dgn alert
//     })



// // penerapan axios menggunakan async await
// const getPeople = async (id) => {
//     try {
//         const res = await axios.get(`https://swapi.dev/api/people/${id}`);
//         console.log(res.data);
//     } catch (error) {
//         console.log(error);
//         console.log(error.message);
//         console.log(error.response.status);
//         console.log(error.response.data);
//     }
// };