test("Testando conexão com banco", () => {
    const db = require('../src/bdManager')
    const result = db.tryFetchConnection();
    expect(result).toBe(1);
})