const express = require('express');
const app = express();
const port = 3000;
// Importa il router della bacheca
const bachecaRouter = require('./routers/bacheca');
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('server del blog');
});
// Usa il router della bacheca per tutte le rotte che iniziano con /bacheca
app.use('/bacheca', bachecaRouter);


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});