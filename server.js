const PORT = 8000;
const express = require('express');
const cors = require('cors');
require('dotenv').config(); // save api key to .env file
const axios = require('axios');

// call express and assign to new var
const app = express();
app.use(cors());
app.use(express.json());

// url to communicate with backend
// url is for making tickets in task collection
const url = process.env.URL;
const token = process.env.ASTRA_TOKEN;

// use data from db to get all tickets
app.get('/tickets', async (req, res) => {
  const options = {
    method: 'GET',
    headers: {
      Accepts: 'application/json',
      'X-Cassandra-Token': token,
    },
  };
  try {
    const response = await axios(`${url}?page-size=20`, options);
    res.status(200).json(response.data);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err });
  }
});

// route for getting one ticket
app.get('/tickets/:documentId', async (req, res) => {
  const id = req.params.documentId;

  const options = {
    method: 'GET',
    headers: {
      Accepts: 'application/json',
      'X-Cassandra-Token': token,
    },
  };
  try {
    const response = await axios(`${url}/${id}`, options);
    res.status(200).json(response.data);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err });
  }
});

// creating tickets
app.post('/tickets', async (req, res) => {
  const formData = req.body.formData;

  // once we have form data, make axios post req to database
  const options = {
    method: 'POST',
    headers: {
      Accepts: 'application/json',
      'X-Cassandra-Token': token,
      'Content-Type': 'application/json',
    },
    data: formData,
  };

  try {
    const response = await axios(url, options);
    res.status(200).json(response.data);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err });
  }
});

// editing ticket route
app.put('/tickets/:documentId', async (req, res) => {
  const id = req.params.documentId;
  const data = req.body.data;

  const options = {
    method: 'PUT',
    headers: {
      Accepts: 'application/json',
      'X-Cassandra-Token': token,
    },
    data,
  };
  try {
    const response = await axios(`${url}/${id}`, options);
    res.status(200).json(response.data);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err });
  }
});

// deleting task
app.delete('/tickets/:documentId', async (req, res) => {
  const id = req.params.documentId;

  const options = {
    method: 'DELETE',
    headers: {
      Accepts: 'application/json',
      'X-Cassandra-Token': token,
    },
  };
  try {
    const response = await axios(`${url}/${id}`, options);
    res.status(200).json(response.data);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err });
  }
});

// listen to changes on the PORT
app.listen(PORT, () => console.log(`server running on PORT ${PORT}`));
