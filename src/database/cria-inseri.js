
import sqlite3 from 'sqlite3'
sqlite3.verbose()

import { dirname } from'path'
import { fileURLToPath } from 'url'
const filePath = dirname(fileURLToPath(import.meta.url)) + '/database.db'

const db = new sqlite3.Database('./src/database/database.db');


const FUNCIONARIOS_SCHEMA = `
CREATE TABLE IF NOT EXISTS "FUNCIONARIOS" (
    "ID" INTEGER PRIMARY KEY AUTOINCREMENT,
    "NOME" varchar(64),
    "EMAIL" varchar(64),
    "CPF" varchar(64),
    "CARGO" varchar(64)
  );`;

const ADD_FUNCIONARIOS_DATA = `
INSERT INTO FUNCIONARIOS (ID, NOME, EMAIL, CPF, CARGO) 
VALUES 
    (1, "Filipe Ribeiro Martins","filipe-negreti@hotmail.com","*********","atendente"),
    (2, "Felipe Paes", "flxxxx@gmail.com", "**********","suporte"),
    (3, 'Jefferson Lima','jeffyobrabo@yahoo.com','*******','gerente'),
    (4, 'Patrick Almeida','patrickalmeida@gmail.com.br','*********','atendente'),
    (5, 'Rafaela Souza', 'rafaela@uol.com.br', '***********','suporte')
`

function criaTabelaF() {
    db.run(FUNCIONARIOS_SCHEMA , (error)=> {
       if (error) console.log("Erro ao criar tabela de funcionarios");
    });
}

function populaTabelaF() {
    db.run(ADD_FUNCIONARIOS_DATA , (error)=> {
       if (error) console.log("Erro ao popular tabela de funcionarios");
    });
}

db.serialize( ()=> {
    criaTabelaF();
    populaTabelaF();
});