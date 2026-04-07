const express = require('express');
const app = express();
const cors = require('cors');

// Middleware para parsear o corpo das requisições como JSON
app.use(express.json());
// Middleware para permitir requisições de origens diferentes
app.use(cors());

app.get('/operacoes/:operacao/:valorA/:valorB', (req, res) => {
  let { operacao, valorA, valorB } = req.params;
  let resultado;

  valorA = Number.parseInt(valorA);
  valorB = Number.parseInt(valorB);

  switch (operacao) {
    case 'soma':
      resultado = valorA + valorB;
      break;
    case 'subtracao':
      resultado = valorA - valorB;
      break;
    case 'multiplicacao':
      resultado = valorA * valorB;
      break;
    case 'divisao':
      resultado = valorA / valorB;
      break;
    default:
      res
        .status(400)
        .json({ error: 'Operação inválida' });
      return;
  }

  const response = {
    operacao,
    valorA,
    valorB,
    resultado,
  };

  res
    .status(200)
    .json(response);
});

// Inicia o servidor na porta 3000
app.listen(3000, () => {
  console.log('Servidor escutando na porta 3000');
});
