const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const PORT = 3000;

const app = express();
// app.use(bodyParser.json()); // support json encoded bodies
// app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
app.use(express.json())

//Log Http requests
app.use(logger);
function logger(req, res, next) {
  console.log(req.method, req.originalUrl);
  next();
}

app.use(cors())

const router = require('./router.js');
app.use('/', router);

//start server
app.listen(PORT, () => {
  console.log(`Server on http://localhost:${PORT}`);
})

