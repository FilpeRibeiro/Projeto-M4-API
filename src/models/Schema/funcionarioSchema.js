class FuncionarioSchema{
    constructor(nome, email, cpf , cargo){
        this.nome = nome
        this.email = email
        this.cpf = this._validaCpf(cpf)
        this.cargo =cargo
    }

    _validaCpf = (cpf)=>{
        if(cpf.length >= 9){
            return cpf
        }
        else{
            throw new Error("O CPF precisa ter mais de 9 caracteres")
        }
    }

}

export default FuncionarioSchema