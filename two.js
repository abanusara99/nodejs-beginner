const express = require('express');
const app = express();

app.get('/hello', (req, res) => {
    res.send('Hello, World! from route of / hello.. Wait it worked ! ');
  });
  
  app.listen(3002, () => {
    console.log('Server is running on port 3002');
  });  