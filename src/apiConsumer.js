const googleGen = require('@google/generative-ai')
require('dotenv').config();
async function sendTranslateRequest(phrase) {
    const genAI = new googleGen.GoogleGenerativeAI(process.env.API_KEY)
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const promp = `translate '${phrase}' from english to portuguese, only translate, without variables.`;
    const result = await model.generateContent(promp);
    return result.response.text();
}

module.exports = {
    sendTranslateRequest
}