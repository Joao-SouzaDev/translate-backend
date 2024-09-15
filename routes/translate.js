const express = require('express')
const router = express.Router();

router.use((res,req,next) => {
    console.log("Access route translate");
    next();
});
