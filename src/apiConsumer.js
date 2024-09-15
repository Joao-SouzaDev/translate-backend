import { GenerativeModel } from "@google/generative-ai";

export async function sendTranslateRequest(phrase) {
    const genAPI = new GenerativeModel(env.API_KEY)
    const model = genAPI.getGenerativeModel({model:"gemini-1.5-flash"});
    const promp = `translate '${phrase}' from english to portuguese, only translate, without variables.`;
    const result = await model.generateContent(promp);
    return result.response.text;
}
