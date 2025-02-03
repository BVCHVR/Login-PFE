import express from 'express';
const { login , register , logout} = require('../controllers/authController');
const authRouter = express.Router();

// authRouter.post('/login', login);
// authRouter.post('/register', register);
// authRouter.post('/logout', logout);

authRouter.post("/test", (req, res) => {
    try {
        res.send("hello")
    } catch (err){
        console.log(err)
    }
})

module.exports = authRouter;
