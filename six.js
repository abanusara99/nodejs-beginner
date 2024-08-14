const express = require('express');
const app = express();
app.use(express.json());

app.get('/api/data', (req, res) => {
  res.json({ message: 'Hello, World! It is fun. It works.' });
});

app.listen(3005, () => {
  console.log('API is running on http://localhost:3005/api/data');
});
