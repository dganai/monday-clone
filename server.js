const PORT = 8000;
const express = require('express');
const cors = require('cors');
require('dotenv').config(); // save api key to .env file
const axios = require('axios');

// call express and assign to new var
const app = express();
