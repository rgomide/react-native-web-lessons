const express = require('express');
const app = express();
const cors = require('cors');

// Middleware para parsear o corpo das requisições como JSON
app.use(express.json());
// Middleware para permitir requisições de origens diferentes
app.use(cors());

app.get('/operations/:operation/:valueA/:valueB', (req, res) => {
  let { operation, valueA, valueB } = req.params;
  let result;

  valueA = Number.parseInt(valueA);
  valueB = Number.parseInt(valueB);

  switch (operation) {
    case 'sum':
      result = valueA + valueB;
      break;
    case 'subtraction':
      result = valueA - valueB;
      break;
    case 'multiplication':
      result = valueA * valueB;
      break;
    case 'division':
      result = valueA / valueB;
      break;
    default:
      res
        .status(400)
        .json({ error: 'Invalid operation' });
      return;
  }

  const response = {
    operation,
    valueA,
    valueB,
    result,
  };

  res
    .status(200)
    .json(response);
});

// Inicia o servidor na porta 3000
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
