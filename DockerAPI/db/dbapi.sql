CREATE SCHEMA `api`;
use `api`;

CREATE TABLE `livro`(
  `id` bigint not null AUTO_INCREMENT,
  `nome` varchar(32) NOT NULL,
  `edicao` int,
  `paginas` int,
  `genero` varchar(32) NOT NULL,
  `editora` varchar(32),
  `escritor` varchar(32) NOT NULL,
  `lido` varchar(32) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=INNODB;

CREATE TABLE `filme`(
  `id` bigint not null AUTO_INCREMENT,
  `nome` varchar(32) NOT NULL,
  `ano` int NOT NULL,
  `duracao` int,
  `genero` varchar(32) NOT NULL,
  `produtora` varchar(32),
  `diretor` varchar(32),
  `assistido` varchar(32) NOT NULL,
  `adptado` bigint,
  KEY `adptado_fk_` (`adptado`),
  CONSTRAINT `adptado_fk` FOREIGN KEY (`adptado`) REFERENCES `livro` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE,
  PRIMARY KEY (`id`)
) ENGINE=INNODB;

CREATE TABLE `serie`(
    `id` bigint not null AUTO_INCREMENT,
    `nome` varchar(32) NOT NULL,
    `ano` int NOT NULL,
    `temporadas` int,
    `genero` varchar(32) NOT NULL,
    `produtora` varchar(32),
    `assistido` varchar(32) NOT NULL,
    PRIMARY KEY (`id`)
  ) ENGINE=INNODB; 
  
  CREATE TABLE `curso`(
    `id` bigint not null AUTO_INCREMENT,
    `materia` varchar(32) NOT NULL,
    `videos` int,
    `professor` varchar(32) NOT NULL,
    `assistido` varchar(32) NOT NULL,
    PRIMARY KEY (`id`)
  ) ENGINE=INNODB;

  GRANT ALL PRIVILEGES ON *.* TO 'root'@'%' IDENTIFIED BY '12345678'
    