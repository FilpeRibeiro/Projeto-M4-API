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

    insereFuncionario = async (novoFuncionario)=>{
        try {
            
            if(this.validarCPF(novoFuncionario.cpf) == true){
            return await this.dao.insereFuncionario(novoFuncionario)
            }else{
                throw  new Error ('CPF inválido')
            }
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
            
            
            
            // const funcionarioAtualizado = new FuncionarioSchema(funcionario.nome, funcionario.email, funcionario.cpf, funcionario.cargo)
            if(this.validarCPF(funcionario.cpf) == true){
                await this._verificaFuncionario(id)
            return await this.dao.atualizaFuncionario(id, funcionario)
            }else{
                throw  new Error ('CPF inválido')
            }
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
    validarCPF  (cpf) {
        cpf = cpf.replace(/[^\d]+/g, "")
        if (cpf == "") return false;

        if (cpf.length != 11 ||
            cpf == "00000000000" ||
            cpf == "11111111111" ||
            cpf == "22222222222" ||
            cpf == "33333333333" ||
            cpf == "44444444444" ||
            cpf == "55555555555" ||
            cpf == "66666666666" ||
            cpf == "77777777777" ||
            cpf == "88888888888" ||
            cpf == "99999999999")
            return false;

        let add = 0;
        for (let i = 0; i < 9; i++)
            add += parseInt(cpf.charAt(i)) * (10 - i);
        let rev = 11 - (add % 11);
        if (rev == 10 || rev == 11)
            rev = 0;
        if (rev != parseInt(cpf.charAt(9)))
            return false;

        add = 0;
        for (let j = 0; j < 10; j++)
            add += parseInt(cpf.charAt(j)) * (11 - j);
        rev = 11 - (add % 11);
        if (rev == 10 || rev == 11)
            rev = 0;
        if (rev != parseInt(cpf.charAt(10)))
            return false;
        return true;
    }
}

export default Funcionario