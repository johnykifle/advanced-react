import express from 'express';
import config from './config';

const app = module.exports = express();

app.use(express.static('public'));
app.set('view engine', 'ejs'); // make ejs as a template language

app.get('/', (req, res) => {
    res.render('index');
});

app.listen(config.port, function listenHandler(){
    console.info(`Running on ${config.port}`);
});
