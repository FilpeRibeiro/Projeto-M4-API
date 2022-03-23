

class FuncionarioSchema{

    
    constructor(nome, email, cpf , cargo){
        this.nome = nome
        this.email = email
        this.cpf = this._validaCpf(cpf)
        this.cargo =cargo
    }

    _validaCpf = (cpf)=>{
        if(cpf.length === 11){
            return cpf
        }
        else{
            throw new Error("O CPF precisa ter 11 caracteres")
        }
    }

}

export default FuncionarioSchema