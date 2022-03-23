import request from 'supertest'

import app from '../app.js'

describe('GET /funcionario', ()=>{
    test('Se o status é 200', ()=>{
       
        return request(app).get('/funcionario')
        .then((response)=>{
            console.log(response)
            expect(response.statusCode).toBe(200)
        })
    })
})

describe('POST /funcionario', ()=>{
    test('Se o body existe', ()=>{
      
        return request(app).post('/funcionario')
        .send({
            "nome" : "nome",
            "cpf" : "adcb12345",
            "email" : "nome@email.com",
            "cargo":"cargo"
        })
        .then((response)=>{
            console.log(response.body)
            expect(response.body.mensagem).toBeTruthy()
        })
    })

    test('Erro com senha invalida', ()=>{
        
        return request(app).post('/funcionario')
        .send({
            "nome" : "nome",
            "cpf" : "adcb12345",
            "email" : "nome@email.com",
            "cargo":"cargo"
        })
        .then((response)=>{
            console.log(response.body)
            expect(response.body.erro).toBeTruthy()
        })
    })

})