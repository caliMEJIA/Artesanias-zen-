//voy a crear el servidor
const express = requiere ('express')
const app = express()
const port = 3000

app.get('/',(req, res) => {
    res.send('servidor funcionando')

});

app.listen(port,() => {
    console.log('servidor corriendo en http://localhost:3000')
})
