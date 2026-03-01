import 'dotenv/config';
import express from 'express';
import waitlist from './api/waitlist.js';
import count from './api/count.js';

const app = express();
app.use(express.json());

app.post('/api/waitlist', waitlist);
app.get('/api/count', count);

app.use(express.static('.'));

app.listen(3000, () => {
  console.log('Running at http://localhost:3000');
});