import { Express } from 'express';
import { home } from './handlers/home';

const setRoutes = (app: Express) => {
  app.get('/', home);
};

export { setRoutes };
