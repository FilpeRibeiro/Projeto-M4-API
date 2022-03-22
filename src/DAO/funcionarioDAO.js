class FuncionarioDAO{

    constructor(db){
        this.db = db
    }

    pegaTodosFuncionarios = ()=>{
       
        return new Promise((resolve, reject)=>{
            this.db.all('SELECT * FROM FUNCIONARIOS', (error, rows)=>{
                if(error){   
                    reject(error)
                }else{
                    resolve(rows)
                }
            })
        })
    }
    pegaUmFuncionario = (email)=>{
        return new Promise((resolve, reject)=>{
            this.db.all('SELECT * FROM FUNCIONARIOS WHERE EMAIL = ?',email ,(error, rows)=>{
                if(error){
                    reject(error)
                }else{
                    resolve({
                        "Funcionarios": rows,
                        "erro": false
                    })
                }
            })
        })
    }

    pegaUmFuncionarioId = (id)=>{
        return new Promise((resolve, reject)=>{
            this.db.all('SELECT * FROM FUNCIONARIOS WHERE ID = ?', id, (error, rows)=>{
                if(error){
                    reject(error)
                }else{
                    resolve({
                        "Funcionarios": rows,
                        "erro": false
                    })
                }
            })
        })
    }

    insereFuncionario = (novoFuncionario) =>{

        return new Promise((resolve, reject)=>{
            this.db.run("INSERT INTO FUNCIONARIOS(NOME, EMAIL, CPF, CARGO) VALUES (?, ?, ?, ?)",
                novoFuncionario.nome, novoFuncionario.email, novoFuncionario.cpf, novoFuncionario.cargo ,(error)=>{
                if(error){
                    reject(error)
                }else{
                    resolve(`Funcionario ${novoFuncionario.nome} inserido com sucesso`)
                }
            })
        })

    }

    deletaFuncionario = (id)=>{
        return new Promise((resolve, reject)=>{
            this.db.run('DELETE FROM FUNCIONARIOS WHERE ID = ?', id, (error)=>{
                if(error){
                    reject(error)
                }else{
                    resolve({
                        "Funcionarios": `Funcionario de id ${id} deletado com sucesso`,
                        "erro": false
                    })
                }
            })
        })
    }

    atualizaFuncionario = (id, funcionario)=>{
        return new Promise((resolve, reject)=>{
            this.db.run('UPDATE FUNCIONARIOS SET NOME = ?, EMAIL = ?, CPF = ?, CARGO =? WHERE ID = ?',
            funcionario.nome, funcionario.email, funcionario.cpf, funcionario.cargo, id, (error)=>{
                if(error){
                    reject(error)
                }else{
                    resolve({
                        "mensagem": `Funcionario de id ${id} atualizado com sucesso`,
                        "Funcionarios": funcionario,
                        "erro": false
                    })
                }
            })
        })
    }

}

export default FuncionarioDAO