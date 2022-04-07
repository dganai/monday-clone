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
const url =
  'https://8f7cbd20-d511-4eac-8ce2-333695b6f55b-us-east1.apps.astra.datastax.com/api/rest/v2/namespaces/tickets/collections/tasks';
const token =
  'AstraCS:DAoiaZuYUMmiqjyFEZLOfMHX:33fcda178f0b71ca7d47ff07dd030a0da22468e8f6d185c0c4de75a81963ff07';

// use data from db
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
