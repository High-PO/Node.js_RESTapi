// const and package import
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
var userApi = require('./app/method');

app.get('/', (req, res) => {
  res.sendfile('./html/index.html');
});

app.get('/users', userApi.getUserList);
app.get('/users/:id', userApi.getUser);
app.delete('/users/:id', userApi.delUser);
app.post('/users', userApi.pstUser);

app.listen(3000, () => {
  console.log("Example app listening on port 3000!");
});
