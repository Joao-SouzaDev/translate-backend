
const express = require('express')
const router = express.Router();

router.use((res,req,next) => {
    console.log("Access route translate");
    next();
});
router.use(express.json())
router.post('/', async (req,res) => {
    const {phrase} = req.body
    const consumer = require('../src/apiConsumer')
    let data = {
        translatedPhrase: await consumer.sendTranslateRequest(phrase)
    } 
    res.json(data)
    
})

module.exports = {
    router
}