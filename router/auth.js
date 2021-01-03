/*
path: 
*/

const { Router } = require('express');

const router = Router();

//definicion de los endpoints

//endpoint para crear a los nuevos usuarios
router.post('/new', (req, res) => {
    res.json({
        ok: true,
        msg: 'new'
    })
});

//login
router.post('/', (req, res) => {
    res.json({
        ok: true,
        msg: 'login'
    })
});

//Revalidar token
router.get('/renew', (req, res) => {
    res.json({
        ok: true,
        msg: 'renew'
    })
})

module.exports = router;