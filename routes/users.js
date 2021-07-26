const express = require('express')
const router = express.Router()

const user = require('../controllers/user');

router
    .get('/',user.index)
    .post('/',user.create)
    .get('/:id',user.show)
    .put('/:id',user.update)
    .delete('/:id',user.destroy)

module.exports = router