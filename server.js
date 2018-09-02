import express from 'express';
import path from 'path';
import route from './controllers/routes';

const app = express();

app.use(express.static(path.join(__dirname, '/public')));

app.get('/', route.homePage);
app.get('/syncvideo', route.sync);

const port = process.env.port || 3000;

app.listen(port, () => {
  console.log('Now listening on port ', port);
});
