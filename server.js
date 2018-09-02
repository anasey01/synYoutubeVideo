import morgan from 'morgan';
import express from 'express';
import bodyParser from 'body-parser';
import route from './controllers/routes';

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));
app.use(morgan('tiny'));

app.get('/', route.homePage);
app.get('/syncvideo', route.sync);

const port = process.env.port || 3000;

app.listen(port, () => {
  console.log('Now listening on port ', port);
});
