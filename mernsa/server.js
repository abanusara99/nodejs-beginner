const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors()); // Enable CORS

app.get('/api/message', (req, res) => {
  res.json({ message: 'Hello from Express!' });
});

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
