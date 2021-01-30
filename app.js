import express from 'express';
import bodyParser from 'body-parser';

import usersRoutes from './routes/users.js';

const app = express();

app.use(bodyParser.json());
app.use('/users', usersRoutes);

app.get('/', (req, res) => {
  res.send('Home Page');
});

app.get('*', (req, res) => {
  res.send('Page Not Found');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on PORT: http://localhost:${PORT}`);
});
