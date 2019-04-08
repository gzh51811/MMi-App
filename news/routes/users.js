var express = require('express');
var router = express.Router();
var {
    connect,
    add,
    find,
    remove,
    update
} = require("../lib/sever.js");
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/findUser', async (req, res, next) => {
    let {
        name
    } = req.query
    let data = await find(`cards`, name ? {
        name
    } : {})
    res.send(data);
});

module.exports = router;
