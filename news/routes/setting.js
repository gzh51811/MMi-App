var express = require('express');
var router = express.Router();
var token = require('./token.js');

router.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");

    // 跨域请求CORS中的预请求
    if(req.method=="OPTIONS") {
      res.sendStatus(200);/*让options请求快速返回*/
    } else{
      next();
    }
})

var {
    connect,
    add,
    find,
    remove,
    update
} = require("../lib/sever.js");
/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});


// 短信接口
//node request模块安装命令：npm install request
var request = require('request');
var querystring = require('querystring');

router.get('/duanxin', async (req, res, next)=>{
    let { userphone } = req.query;
    let num = parseInt(Math.random()*8999+1000);
    let _token = token.create(userphone);

    var queryData = querystring.stringify({
        "mobile": userphone,  // 接受短信的用户手机号码
        "tpl_id": "149356",  // 您申请的短信模板ID，根据实际情况修改
        "tpl_value":'#code#='+num+'&#company#=聚合数据',  // 您设置的模板变量，根据实际情况修改
        "key": "6ff8b1c4db47051a027b1ee64919187a",  // 应用APPKEY(应用详细页查询)
    });

    var queryUrl = 'http://v.juhe.cn/sms/send?'+queryData;
    var jsonObj = null;
    await request(queryUrl, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            // console.log(body) // 打印接口返回内容
            jsonObj = JSON.parse(body); // 解析接口返回的JSON内容
            console.log(jsonObj);
        } else {
            console.log('请求异常');
        }
    }) 
    res.send({
        num,
        _token
    })
})
    

// 搜索
router.get('/findName', async (req, res, next) => {
    let {
        name
    } = req.query
    let data = await find(`miniItem`, {name:{$regex:name}} ? {
        name: {$regex:name}
    } : {})
    res.send(data);
});


// 注册
router.post('/zhuce', async (req, res, next) => {
    let { uname } = req.body
    let data = await find(`users`, uname ? {
        uname
    } : {})

    if (data.length > 0) {
        res.send("no")
    } else {
        add(`users`, [{ uname: uname }])
        res.send("ok");
    }
});


// 使用用户名登录
router.post('/loginUser', async (req, res, next) => {
    let {
        uname,
        password
    } = req.body;
    
    let data = await find(`users`, {
        uname
    } )
    if(data.length <= 0){
        res.send('用户名不存在')
    }else{
        let _token = token.create(uname);
        if (data[0].uname === uname && data[0].password === password) {
            res.send({
                status: 'success',
                uname: data[0].name,
                token: _token
            });
        } else {
            res.send({
                status: 'fail'
            });
        }
    }
});


// 分类页Tabs切换
router.get('/Tabright',async (req,res,next)=>{
    let {style}=req.query
    // console.log(req.query)
    let data = await find('miniItem',{style:style})
    res.send(data)
})


// 首页的Tabs切换
router.get('/Tabs',async (req,res,next)=>{
    let {type}=req.query
    let data = await find('miniItem',{type:type})
    res.send(data)
})

// 列表页
router.get('/findType', async (req, res, next) => {
    let {
        type
    } = req.query
    let data = await find(`miniItem`, type ? {
        type
    } : {})
    res.send(data);
});


// 购物车youlike
router.get('/likes', async (req, res, next) => {
    let {item_id} = req.query
    let data = await find(`miniItem`, item_id ? {item_id:item_id*1} : {})
    res.send(data);
});


// 购物车youlike底部
router.get('/youlikes', async (req, res, next) => {
    let {item_id} = req.query
    let data = await find(`likes`, item_id ? {item_id:item_id*1} : {})
    res.send(data);
});


// 购物车showList
router.get('/cart', async (req, res, next) => {
    let {username} = req.query
    let data = await find(`cartList`, username ? {username} : {})
    res.send(data);
});


// 加入购物车
router.get('/addCart', async(req, res, next) => {
    let {item_url, item_desc, item_name, item_price, item_id,username} = req.query;
    let str = await find(`cartList`, {item_id},{username});

    if(str.length <= 0){
        let data = await add(`cartList`, [{
            item_id: item_id,
            item_url: item_url,
            item_desc: item_desc,
            item_name: item_name,
            item_price: item_price,
            item_qty:  1,
            username:username
        }]);
        res.send({
            data:data,
            status:1
        });
    }else{
        let data = await update(`cartList`,{
            item_id
        },{
            item_qty:(str[0].item_qty*1)+1
        })
        res.send({
            data:data,
            status:0
        }); 
    }
});


// 删除商品
router.get('/delcart', async (req, res, next) => {
    let {
        item_id,
        username
    } = req.query
    let data = await remove(`cartList`, {
        item_id: item_id,
        username:username
    })
    res.send(data);
});


// 改变商品数量
router.get('/changeNum', async (req, res, next) => {
    let {item_id, item_qty,username} = req.query;
    let data = await update(`cartList`,{
        item_id,
        username
    },{
        item_qty:item_qty*1
    })
    let obj = await find('cartList',{
        item_id,
        username
    })
    res.send(obj); 
})

module.exports = router;