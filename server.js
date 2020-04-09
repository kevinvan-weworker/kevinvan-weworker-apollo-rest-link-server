const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

const cors = require('cors')

app.use(cors())

app.use(express.json());

// sample GET route
app.get('/api/users', (req, res) => {
  console.log(req.headers);
  const users = [
    {
      firstName: 'kc',
      lastName: 'van',
      avatarUrl: 'www.kcvanavatar.com',
      phoneNumber: 4085555555,
      address: '415 Mission St, San Francisco, CA 94105'
    },
    {
      firstName: 'jackie',
      lastName: 'van',
      avatarUrl: 'www.jackievanavatar.com',
      phoneNumber: 4084444444,
      address: '415 Mission St, San Francisco, CA 94105'
    },
  ]
  
  res.json(users);
});


// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));