const express = require('express')
const app = express()

const router =require()

app.set('views', 'views')
app.set('view engine', 'ejs')
app.use(express.static('public'))

console.log('[#] nodemon watch is running.congrats.')

app.get('/', (req, res) => {
    res.render('home-guest')
})

app.listen(3000)