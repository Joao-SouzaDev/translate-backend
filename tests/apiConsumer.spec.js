test('Testando Consumo API Google', async () => {
    const consume = require('../src/apiConsumer')
    const retorno = await consume.sendTranslateRequest("Test");
    expect(retorno).toMatch("Teste")
});

test('Testando se a chave existe', () => {
    require('dotenv').config()
    const chave = process.env.API_KEY;
    expect(chave).not.toBe(undefined)
})