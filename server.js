const express = require('express')
const path = require('path')
const host = 'localhost'
const port = 5050

let app = express()

app.use("/static", express.static(path.resolve(__dirname, "front", "static")));

app.get('/*', (req, res) => {
    res.sendFile(path.resolve(__dirname, "front", "index.html"))
});

app.listen(port, host, () => {
    console.log(`Server is runing on http://${host}:${port}`)
})