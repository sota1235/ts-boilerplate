import express from 'express';
import logger from 'morgan';
import { setRoutes } from './routes';

const app = express();
const PORT = process.env.PORT || 3000;

// TODO switch format for Prod
app.use(logger('dev'));

setRoutes(app);

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
