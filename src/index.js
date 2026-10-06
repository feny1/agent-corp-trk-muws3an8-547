const express = require('express');
const { calculateVATHandler } = require('./handlers/vatHandler');
const { authMiddleware } = require('./middleware/auth');

const app = express();
app.use(express.json());

app.post('/api/v1/invoice/calculate-vat', authMiddleware, calculateVATHandler);

const PORT = process.env.PORT || 3000;
if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

module.exports = app;