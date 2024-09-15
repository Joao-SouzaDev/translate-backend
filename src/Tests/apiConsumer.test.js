import { sendTranslateRequest } from "../apiConsumer.js";

test('Testando requisição API',async ()=>{
    const res = await sendTranslateRequest(`Sure. It's Adam Brook`);
    expect(res).toBe("Claro. É Adam Brook");
})