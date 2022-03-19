import Funcionario from "../models/funcionario.js"

const funcionarioController = (app, db)=>{
    const funcionarioModel = new Funcionario(db)

    app.get('/funcionario', async (req, res)=>{
        try {
            const resposta = await funcionarioModel.pegaTodosFuncionarios()
            res.status(200)
            .json({
                "usuarios" : resposta,
                "erro" : false
            })
        } catch (error) {
            res.status(400)
            .json({
                "mensagem" : error.message,
                "erro" : true
            })
        }       
    })

    app.get('/funcionario/email/:email', async (req, res)=>{
        
        const email = req.params.email

        res.json(await funcionarioModel.pegaUmFuncionario(email))
    })

    app.post('/funcionario',async (req, res)=>{
       
        const body = req.body
        try {
            const resposta = await funcionarioModel.insereFuncionario(body)
            res.status(201)
            .json({
                "mensagem" : resposta,
                "erro" : false
            })
        } catch (error) {
            res.status(400)
            .json({
                "mensagem" : error.message,
                "erro" : true
            })
        }
    })

    app.delete('/funcionario/id/:id', async (req, res)=>{
        
        const id = req.params.id

        res.json(await funcionarioModel.deletaFuncionario(id))

    })

    app.put('/funcionario/id/:id', async (req, res)=>{
        const id = req.params.id
        const body = req.body

        res.json(await funcionarioModel.atualizaFuncionario(id , body))
    })

}

export default funcionarioController