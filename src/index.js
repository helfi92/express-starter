import express from 'express';

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('<div style="padding: 20px"><h1>Neutrino</h1><p>Welcome to Express</p></div>');
})
.listen(port, () => console.log(`Running on :${port}`));
