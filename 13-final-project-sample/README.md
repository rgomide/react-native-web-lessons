# Projeto final de exemplo: Tarefas e Anotações

Exemplo completo das quatro etapas da atividade do 3º trimestre, usando como estudo de caso um aplicativo simples para gerenciar tarefas e as anotações de cada tarefa.

| Etapa | Pasta | Conteúdo |
| --- | --- | --- |
| 01 e 03 | [`prototipo`](prototipo) | Protótipo no Excalidraw: telas (frames), navegação (setas contínuas), chamadas de API (notas amarelas e setas tracejadas) e o frame `99 - Rotas da API` |
| 02 | [`banco`](banco) | Scripts de criação das tabelas, dados de teste e modelo ER em Mermaid |
| 03 | [`backend`](backend) | API em Node.js + Express, organizada em MVC, com autenticação JWT |
| 04 | [`mobile`](mobile) | Aplicativo em React Native (Expo), executado no navegador com `npm run web` |

Para abrir o protótipo, acesse [excalidraw.com](https://excalidraw.com) e use o menu ☰ → *Open* com o arquivo `prototipo/prototipo.excalidraw`.

## Como executar

Os passos completos estão em [`mobile/LEIA-ME.txt`](mobile/LEIA-ME.txt). Resumo:

```bash
# 1. banco (PostgreSQL), em um banco vazio chamado tarefas_anotacoes
psql -U postgres -d tarefas_anotacoes -f banco/criacaoTabelas.sql
psql -U postgres -d tarefas_anotacoes -f banco/insercaoDados.sql

# 2. backend (terminal 1)
cd backend
cp .env.example .env   # ajuste o banco e gere o JWT_SECRET
npm install
npm run dev

# 3. aplicativo (terminal 2)
cd mobile
npm install
npm run web
```

Usuário de teste: `ana.souza@email.com` / `senha123`.

## Telas

| Frame do protótipo | Componente |
| --- | --- |
| `00 - Login`, `00b - Login (erro)` | [`LoginScreen.js`](mobile/src/screens/LoginScreen.js) |
| `01 - Cadastro`, `01b - Cadastro (erro)` | [`CadastroScreen.js`](mobile/src/screens/CadastroScreen.js) |
| `02 - Tarefas`, `02b - Tarefas (vazia)`, `02c - Tarefas (carregando)` | [`TarefasScreen.js`](mobile/src/screens/TarefasScreen.js) |
| `03 - Formulário de Tarefa`, `03b - Formulário de Tarefa (erro)` | [`FormularioTarefaScreen.js`](mobile/src/screens/FormularioTarefaScreen.js) |
| `04 - Detalhe da Tarefa`, `04b - Detalhe da Tarefa (sem anotações)` | [`DetalheTarefaScreen.js`](mobile/src/screens/DetalheTarefaScreen.js) |

## Rotas da API

| Método | Caminho | Protegida | Controller | Serviço no aplicativo |
| --- | --- | --- | --- | --- |
| POST | `/auth/register` | não | `auth.controller.js` | `cadastrar` |
| POST | `/auth/login` | não | `auth.controller.js` | `login` |
| GET | `/tarefas` | sim | `tarefa.controller.js` | `listarTarefas` |
| GET | `/tarefas/:id` | sim | `tarefa.controller.js` | `buscarTarefa` |
| POST | `/tarefas` | sim | `tarefa.controller.js` | `criarTarefa` |
| PUT | `/tarefas/:id` | sim | `tarefa.controller.js` | `alterarTarefa` |
| DELETE | `/tarefas/:id` | sim | `tarefa.controller.js` | `excluirTarefa` |
| GET | `/tarefas/:id/anotacoes` | sim | `anotacao.controller.js` | `listarAnotacoes` |
| POST | `/tarefas/:id/anotacoes` | sim | `anotacao.controller.js` | `criarAnotacao` |
| DELETE | `/anotacoes/:id` | sim | `anotacao.controller.js` | `excluirAnotacao` |

## Onde está cada requisito da Etapa 04

- **Endereço da API em um único lugar:** `BASE_URL` em [`mobile/src/services/api.js`](mobile/src/services/api.js).
- **Telas não fazem requisição:** todo `fetch` está em `mobile/src/services`, um arquivo por recurso.
- **Sessão:** [`AuthContext.js`](mobile/src/contexts/AuthContext.js) guarda o token no contexto e no AsyncStorage; qualquer resposta 401 de rota protegida chama `sair()` e o aplicativo volta ao login.
- **Telas protegidas só com login:** navegação condicional em [`App.js`](mobile/App.js).
- **Lista atualizada após cadastrar, editar ou excluir:** `useFocusEffect` em `TarefasScreen` e `DetalheTarefaScreen` repete o carregamento sempre que a tela volta ao foco.
- **Estilos centralizados:** [`mobile/src/styles/theme.js`](mobile/src/styles/theme.js).
- **Componentes de terceiros:** `@expo/vector-icons` e `react-native-toast-message`.
