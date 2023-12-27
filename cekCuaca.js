const request = require('postman-request')
const urlCuaca = 'http://api.weatherstack.com/current?access_key=93e36e55f2aa77fc51dbf84429e7a8dd&query=-0.8972264,100.3481526'
request({ url: urlCuaca, json: true }, (error, response) => {
console.log('Saat ini suhu di  mencapai ' + 
response.body.current.temperature + ' derajat celcius. Kemungkinan terjadinya hujan adalah ' + response.body.current.precip + '%')
console.log('Deskripsi keadaan cuaca: ' + response.body.current.weather_descriptions)
})
