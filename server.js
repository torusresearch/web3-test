const express = require('express')
const forceSsl = require('force-ssl-heroku')
var app = express();
app.use(forceSsl);
const app = express()
app.use(forceSsl)
const port = process.env.PORT || 5000

app.use(express.static('public'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))