var express = require('express');
var request = require('request');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// 获取新闻的
router.post('/news', async (req, res, next) => {
  let getNews = () => {
    return new Promise((resolve, reject) => {
      request('https://m.mi.com/v1/miproduct/recommend', (err, response, body) => {
        resolve(body)
      })
    })
  }
  let data = await getNews();
  res.send(data);
});
module.exports = router;
