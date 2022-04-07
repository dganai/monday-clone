const PORT = 8000;
const express = require('express');
const cors = require('cors');
require('dotenv').config(); // save api key to .env file
const axios = require('axios');

// call express and assign to new var
const app = express();

// url to communicate with backend
// url is for making tickets in collection
const url =
  'https://8f7cbd20-d511-4eac-8ce2-333695b6f55b-us-east1.apps.astra.datastax.com/api/rest/v2/namespaces/tickets/collections';
const token =
  'AstraCS:DAoiaZuYUMmiqjyFEZLOfMHX:33fcda178f0b71ca7d47ff07dd030a0da22468e8f6d185c0c4de75a81963ff07';

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
});

// listen to changes on the PORT
app.listen(PORT, () => console.log(`server running on PORT ${PORT}`));
