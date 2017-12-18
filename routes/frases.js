let router = require('express').Router();
let frases = require('../data/sentences')

router.get('/', (req, res) => {
    res.send({
        mipsum: frases[0]
    });
})

router.get('/uma/:num', (req, res) => {
    var num = parseInt(req.params.num);
    if (isNaN(num))
        return res.send({
            err: 'param NaN'
        });

    res.send({
        frase: frases[num]
    });
})

router.get('/random', (req, res) => {
    res.send({
        frase: frases[Math.trunc(Math.random() * frases.length)]
    });
})

module.exports = router;