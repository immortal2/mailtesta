const express = require('express')
const mailCtrl = require('../controllers/mail-ctrl')

const router = express.Router()

router.get('/mail/:id', mailCtrl.getQuote)
router.post('/mail/:id', mailCtrl.getQuote)


module.exports = router