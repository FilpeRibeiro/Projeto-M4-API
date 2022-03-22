import FuncionarioDAO from '../DAO/funcionarioDAO.js'
import FuncionarioSchema from './Schema/funcionarioSchema.js'

class Funcionario{
    constructor(db){
        this.dao = new FuncionarioDAO(db)
    }

    pegaTodosFuncionarios = async ()=>{
        try {
            return await this.dao.pegaTodosFuncionarios()
        } catch (error) {
            throw error
        }
    }

    pegaUmFuncionario = async (email)=>{
        try {
            return await this.dao.pegaUmFuncionario(email)
        } catch (error) {
            throw error
        }
    }

    insereFuncionario = async (funcionario)=>{
        try {
            const novoUsuario = new FuncionarioSchema(funcionario.nome, funcionario.email, funcionario.cpf, funcionario.cargo)
            return await this.dao.insereFuncionario(novoUsuario)
        } catch (error) {
            throw error
        }
    }

    deletaFuncionario = async (id)=>{
        try {
            
            await this._verificaFuncionario(id)
            
            return await this.dao.deletaFuncionario(id)
        } catch (error) {
            throw error
        }
    }

    atualizaFuncionario = async (id, funcionario)=>{
        try {
            
            await this._verificaFuncionario(id)

        
            const funcionarioAtualizado = new FuncionarioSchema(funcionario.nome, funcionario.email, funcionario.cpf, funcionario.cargo)

            return await this.dao.atualizaFuncionario(id, funcionarioAtualizado)
        } catch (error) {
            throw error
        }
    }

    _verificaFuncionario = async (id)=>{
        const resposta = await this.dao.pegaUmFuncionarioId(id)
        if(resposta.length === 0){
            throw new Error(`Funcionario de id ${id} não existe`)
        }
    }
}

export default Funcionario