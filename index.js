const express = require('express')
const app = express()

const nightmare = require('./service/nightmare')

global.BASE_PATH = __dirname

app.get('/screen', function (req, res) {
    var url = req.query.url

    if (undefined === url) {
        res.status(400).send('Required query param "url"')
        return
    }

    var fileName = `${BASE_PATH}/storage/google.png`

    console.log('Request: ', url)

    nightmare.makeScreenshot(
        url,
        [1920, 2000],
        fileName,
        function () {
            console.log('Done: ', url)

            res.sendFile(fileName)
        },
        function (error) {
            console.log('Error: ', error)

            res.status(500).send('Can not create screenshot')
        }
    )
})

app.listen(8001, function () {
    console.log('Webscreen service started!')
})