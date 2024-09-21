require('dotenv').config();
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;
const db = require('./configs/db');
const mainRoutes = require('./routes');

app.use(express.json());
app.use(
  cors({
    origin: '*',
  }),
);

app.use(helmet());
app.use('/', mainRoutes);
app.listen(PORT, () => {
  db();
  console.log(`service listening on ${PORT}`);
});
