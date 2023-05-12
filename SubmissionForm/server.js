const express = require('express');
const axios = require('axios');
const querystring = require('querystring');

const app = express();

app.use(express.static(__dirname));

app.get('/submission', (req, res) => {
  const { name, age, frequency, sections, best, worst, email, size } = req.query;
  const url = `http://webshare.mah.se/tszagh/response.php`;
  const queryParams = {
    name,
    age,
    frequency,
    sections,
    best,
    worst,
    email,
    size,
  };

  const queryString = querystring.stringify(queryParams);
  const requestUrl = `${url}?${queryString}`;

  axios
    .get(requestUrl)
    .then(response => {
      res.sendFile(__dirname + '/submission.html');
    })
    .catch(error => {
      console.log(error);
      res.send('Error occurred during form submission.');
    });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
