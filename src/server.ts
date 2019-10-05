import express from 'express';

const app = express();
const PORT = 3000 || process.env.PORT;

app.get('/', (_, res) => res.send('hello world'));

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
