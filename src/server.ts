import express from 'express';
import logger from 'morgan';

const app = express();
const PORT = 3000 || process.env.PORT;

// TODO switch format for Prod
app.use(logger('dev'));

app.get('/', (_, res) => res.send('hello world'));

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
