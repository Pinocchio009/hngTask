const router = require('express').Router();
const controller = require('../cotrollers/test');

router
    .get('/', controller.getRecords)
    .post('/',controller.createRecords);




    module.exports = router;