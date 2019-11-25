import { Handler } from 'express';

const home: Handler = (req, res) => {
  const body = req.params?.text || 'hello world';

  res.send(body);
};

export { home };
