//utk mendapatkan respon dari server harus diubah dengan JSON.parse()
// utk mengirimkan data JSON ke server bisa menggunakan JSON.stringify()

const data = `{
    "ticker": {
        "base": "BTC",
        "target": "IDR",
        "price": "345001000.0000000",
        "volume": "28.02287745",
        "change": "-430000.0000000"
    },
    "timestamp": 1674472505,
    "success": true,
    "error": ""
}`;

