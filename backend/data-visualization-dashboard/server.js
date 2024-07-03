// server.js
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

mongoose.connect('mongodb://localhost:27017/mydatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const dataSchema = new mongoose.Schema({
  intensity: Number,
  likelihood: Number,
  relevance: Number,
  year: Number,
  country: String,
  topics: [String],
  region: String,
  city: String,
  sector: String,
  pest: String,
  source: String,
  swot: String
});

const Data = mongoose.model('Data', dataSchema);

app.use(bodyParser.json());
app.use(cors());

// Fetch all data
app.get('/api/data', async (req, res) => {
  try {
    const data = await Data.find().exec();
    res.json(data);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Filter data by year
app.get('/api/data/filter/year/:year', async (req, res) => {
  try {
    const year = req.params.year;
    const data = await Data.find({ year }).exec();
    res.json(data);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Additional filters
app.get('/api/data/filter', async (req, res) => {
  try {
    const filters = req.query;
    const data = await Data.find(filters).exec();
    res.json(data);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
