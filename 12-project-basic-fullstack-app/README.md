# Integração de API com backend

## Como executar o projeto

### Backend

1. Instalar as dependências do backend

```bash
cd backend
npm install
```

2. Executar o backend

```bash
npm run dev
```

### Frontend

1. Instalar as dependências do frontend

```bash
cd frontend
npm install
```

2. Executar o frontend

```bash
npm run web
```

## Atividade

### Objetivo

Desenvolver uma aplicação fullstack para cadastro e listagem de produtos, com:

- backend em Node.js + Express
- frontend em React Native Web

### Requisitos do Backend

1. Criar os scripts SQL:

- `backend/sql/produto.sql`: criação da tabela `produto`
- `backend/sql/produtosData.sql`: inserção de 10 produtos

2. Estrutura da tabela `produto`:

- `id` (SERIAL, chave primária)
- `titulo` (VARCHAR(255), obrigatório)
- `marca` (VARCHAR(255), obrigatório)
- `descricao` (TEXT, opcional)
- `valor` (DECIMAL, obrigatório)

3. Implementar as rotas:

- `GET /produtos`: retorna todos os produtos
- `POST /produtos`: cria um novo produto

4. Regras mínimas de validação no `POST /produtos`:

- `titulo` é obrigatório
- `marca` é obrigatório
- `valor` é obrigatório e deve ser numérico
- `descricao` é opcional

5. Critérios de resposta da API:

- sucesso no `GET`: `200`
- sucesso no `POST`: `201`
- erro de validação: `400` com mensagem explicando o problema

### Requisitos do Frontend

Criar um aplicativo React Native Web com as seguintes telas:

- Listagem de produtos
- Cadastro de produto
- Sobre (informações dos autores: nome e matrícula)

Regras da interface:

- na listagem, exibir ao menos `titulo`, `descricao` e `valor`
- no cadastro, enviar dados para `POST /produtos`. Utilize o component `TextInput` para cada campo, estude a [documentação](https://reactnative.dev/docs/textinput) para referência
- após cadastrar com sucesso, exibir mensagem de sucesso via `window.alert` e retornar para a tela inicial
- exibir mensagem de erro quando a API retornar falha de validação via `window.alert`

### Critérios de Aceite

Para considerar a atividade concluída:

- os integrantes do grupo devem ser capazes de configurar, executar e explicar os detalhes de implementação do backend e frontend
- os scripts SQL criam e populam a tabela corretamente
- o backend responde conforme rotas, validações e status esperados
- o frontend consome a API e permite listar + cadastrar produtos
- a tela Sobre contém dados dos autores
- o layout segue uma estética livre, mas com consistência visual (cores, espaçamento e tipografia)

Utilize o esquema do protótipo a seguir para criar o aplicativo:

<div style="display: flex; justify-content: center;">
  <img src="./assets/appMockup.png" alt="Protótipo" width="850" />
</div>
