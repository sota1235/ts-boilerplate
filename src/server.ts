import express from 'express';
import logger from 'morgan';
import { setRoutes } from './routes';

const app = express();
const PORT = 3000 || process.env.PORT;

// TODO switch format for Prod
app.use(logger('dev'));

setRoutes(app);

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
