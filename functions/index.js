const express = require('express');
const bodyParser = require('body-parser');
const bfhlRoutes = require('../src/routes/bfhlRoutes');
const cors = require('cors');
const serverless = require("serverless-http");


const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(cors());
app.use('/api/bfhl', bfhlRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

export const handler = serverless(app);

