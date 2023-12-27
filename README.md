# Penjelasan Program

Ini adalah program sederhana yang digunakan untuk mengakses data cuaca dan informasi lokasi berdasarkan koordinat tertentu menggunakan Node.js. Program ini menggunakan beberapa API untuk mengambil data cuaca dan informasi geografis.

## app.js

### Mengambil Data Cuaca
```javascript
const request = require('postman-request')
const urlCuaca = 'http://api.weatherstack.com/current?access_key=93e36e55f2aa77fc51dbf84429e7a8dd&query=-0.924759,100.358669'
request({ url: urlCuaca, json: true }, (error, response) => {
    console.log('Saat ini suhu di ' + response.body.location.name + 
    ' mencapai '+ response.body.current.temperature + 
    ' derajat celcius. Kemungkinan terjadinya hujan adalah ' + response.body.current.precip + '%')
})
```
### Mengambil Informasi Geografis
```javascript
const geocodeURL = 'http://api.mapbox.com/geocoding/v5/mapbox.places/Padang.json?access_token=pk.eyJ1IjoibXJpemt5c2FuZHlyYSIsImEiOiJjbG1pcGc0ZnYwd25sM2hwNHpvcWFpY2FyIn0.yXF8tQEG8EApBv4-QE03mQ&limit=2'
request({ url: geocodeURL, json: true }, (error, response) => {
    const latitude = response.body.features[0].center[1]
    const longitude = response.body.features[0].center[0]
    console.log('Koordinat lokasi anda adalah ' + latitude + ',' + longitude)
    console.log('Data yang anda cari adalah: ' + response.body.query)
    console.log('Data yang ditemukan adalah: ' + response.body.features[0].place_name)
    console.log('Tipe lokasi adalah: ' + response.body.features[1].place_type)
})
```
Program di atas menggunakan API Mapbox untuk mengambil informasi geografis berdasarkan nama lokasi yang diberikan. Hasilnya mencakup koordinat, data yang dicari, data yang ditemukan, dan tipe lokasi.

## cekCuaca.js
### Mengambil Data Cuaca
```javascript
const request = require('postman-request')
const urlCuaca = 'http://api.weatherstack.com/current?access_key=93e36e55f2aa77fc51dbf84429e7a8dd&query=-0.8972264,100.3481526'
request({ url: urlCuaca, json: true }, (error, response) => {
    console.log('Saat ini suhu di mencapai ' + 
    response.body.current.temperature + ' derajat celcius. Kemungkinan terjadinya hujan adalah ' + response.body.current.precip + '%')
    console.log('Deskripsi keadaan cuaca: ' + response.body.current.weather_descriptions)
})
```
Program di atas juga menggunakan API Weatherstack untuk mengambil data cuaca berdasarkan koordinat yang diberikan. Hasilnya mencakup suhu saat ini dan deskripsi keadaan cuaca.

Harap pastikan Anda telah mengganti API access keys dan koordinat sesuai dengan kebutuhan Anda sebelum menjalankan program ini.
