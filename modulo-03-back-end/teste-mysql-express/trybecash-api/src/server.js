// src/server.js
require('dotenv').config();
const app = require('./app');

const PORT = 3002;

app.listen(PORT, () => {
  console.log(`API TrybeCash está sendo executada na porta ${PORT}`);
});
