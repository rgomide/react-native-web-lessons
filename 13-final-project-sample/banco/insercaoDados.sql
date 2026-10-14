-- Dados de teste
-- Todos os usuarios usam a senha: senha123
-- Hash gerado com: node -e "console.log(require('bcryptjs').hashSync('senha123', 10))"

INSERT INTO usuario (id, nome, email, senha) VALUES
(1, 'Ana Souza', 'ana.souza@email.com', '$2b$10$IUiVlcICL5JlAF5Q6qrrkuMGR23JRkd2kFdvXM9MZl/qRXeM5Q/sG'),
(2, 'Bruno Martins', 'bruno.martins@email.com', '$2b$10$IUiVlcICL5JlAF5Q6qrrkuMGR23JRkd2kFdvXM9MZl/qRXeM5Q/sG'),
(3, 'Carla Dias', 'carla.dias@email.com', '$2b$10$IUiVlcICL5JlAF5Q6qrrkuMGR23JRkd2kFdvXM9MZl/qRXeM5Q/sG'),
(4, 'Diego Alves', 'diego.alves@email.com', '$2b$10$IUiVlcICL5JlAF5Q6qrrkuMGR23JRkd2kFdvXM9MZl/qRXeM5Q/sG'),
(5, 'Elisa Rocha', 'elisa.rocha@email.com', '$2b$10$IUiVlcICL5JlAF5Q6qrrkuMGR23JRkd2kFdvXM9MZl/qRXeM5Q/sG');

-- id_usuario abaixo usa SOMENTE chaves ja inseridas acima (1 a 5)
INSERT INTO tarefa (id, id_usuario, titulo, descricao, concluida) VALUES
(1, 1, 'Estudar React Native', 'Revisar navegacao em pilha e useEffect', FALSE),
(2, 1, 'Entregar trabalho de banco de dados', 'Enviar o .zip com os scripts e o modelo ER', TRUE),
(3, 1, 'Comprar material', 'Caderno, canetas e pendrive', FALSE),
(4, 2, 'Preparar apresentacao', 'Slides sobre API REST', FALSE),
(5, 3, 'Marcar consulta medica', NULL, FALSE);

-- id_tarefa abaixo usa SOMENTE chaves ja inseridas acima (1 a 5)
INSERT INTO anotacao (id, id_tarefa, texto) VALUES
(1, 1, 'Ver o subprojeto 03-1 do repositorio de aulas'),
(2, 1, 'Testar a passagem de parametros com route.params'),
(3, 2, 'Entregue no Moodle dia 22/09'),
(4, 3, 'Papelaria do centro abre as 8h'),
(5, 4, 'Apresentacao marcada para sexta-feira');

SELECT setval(pg_get_serial_sequence('usuario', 'id'),
  (SELECT MAX(id) FROM usuario));

SELECT setval(pg_get_serial_sequence('tarefa', 'id'),
  (SELECT MAX(id) FROM tarefa));

SELECT setval(pg_get_serial_sequence('anotacao', 'id'),
  (SELECT MAX(id) FROM anotacao));
