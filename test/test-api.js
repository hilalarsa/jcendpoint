const chai = require('chai')
const expect = require('chai').expect
const chaiHttp = require('chai-http')
// const chai = require('chai')

chai.use(chaiHttp)

const api = chai.request('http://localhost:3000')
describe('Register api', ()=>{
    describe('Register OK', ()=>{
        it('test message data type', (done)=>{
            // api.get('/users')
            expect('Bebas').to.be.a('integer')
            done()
        })
    })
    describe('Register NOT-OK', ()=>{
        it('test message data type', (done)=>{
            // api.get('/users')
            expect('Bebas').to.be.a('integer')
            done()
        })
    })
})