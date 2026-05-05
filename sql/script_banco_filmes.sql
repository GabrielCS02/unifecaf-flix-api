CREATE DATABASE IF NOT EXISTS unifecaf_flix;

USE unifecaf_flix;

CREATE TABLE IF NOT EXISTS filmes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(150) NOT NULL,
    sinopse TEXT NOT NULL,
    duracao INT,
    data_lancamento DATE,
    genero VARCHAR(100),
    classificacao VARCHAR(20)
);

INSERT INTO filmes 
(nome, sinopse, duracao, data_lancamento, genero, classificacao)
VALUES
('Matrix', 'Um programador descobre que vive em uma realidade simulada.', 136, '1999-03-31', 'Ficção Científica', '14 anos'),
('Interestelar', 'Exploradores viajam pelo espaço em busca de um novo lar para a humanidade.', 169, '2014-11-06', 'Ficção Científica', '10 anos'),
('O Rei Leão', 'Um jovem leão precisa assumir seu lugar como rei.', 88, '1994-06-24', 'Animação', 'Livre');