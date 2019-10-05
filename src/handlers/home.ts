import { Handler } from 'express';

const home: Handler = (_, res) => res.send('hello world');

export { home };
