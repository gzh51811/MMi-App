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
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});


// 首页
router.get('/findUser', async (req, res, next) => {
    let {
        type
    } = req.query
    let data = await find(`miniItem`, type ? {
        type
    } : {})
    res.send(data);
});


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
    let {
        uname,
        password
    } = req.body
    let data = await find(`users`, uname ? {
        uname
    } : {})

    if (data.length > 0) {
        res.send("用户名已被注册")
    } else {
        add(`users`, [{
            uname: uname,
            password: password
        }])
        res.send("注册成功");
    }
});


// 登录
router.post('/loginUser', async (req, res, next) => {
    let {
        uname,
        password
    } = req.body
    console.log(req.body)
    let data = await find(`users`, {
        uname
    } )
    if(data.length <= 0){
        res.send('用户名不存在')
    }else{
        if (data[0].uname == uname && data[0].password == password) {
            res.send({
                status: 'success',
                uname: data[0].name
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
    // console.log(req.query)
    let data = await find('miniItem',{type:type})
    res.send(data)
})


// 购物车youlike
router.get('/likes', async (req, res, next) => {
    let {item_id} = req.query;
    let data = await find(`miniItem`, item_id ? {item_id:item_id*1} : {})
    res.send(data);
});


// 购物车YouLike底部数据
router.get('/youlikes', async (req, res, next) => {
    let {item_id} = req.query;
    let data = await find(`likes`, item_id ? {item_id:item_id*1} : {})
    res.send(data);
});


// 购物车showList
router.get('/cart', async (req, res, next) => {
    let {item_id} = req.query
    let data = await find(`cartList`, item_id ? {item_id:item_id*1} : {})
    res.send(data);
});


// 加入购物车
router.get('/addCart', async(req, res, next) => {
    let {item_url, item_desc, item_name, item_price, item_id} = req.query;
    console.log(item_url, item_desc, item_name, item_price, item_id);
    let str = await find(`cartList`, {item_id});

    if(str.length <= 0){
        let data = await add(`cartList`, [{
            item_id: item_id,
            item_url: item_url,
            item_desc: item_desc,
            item_name: item_name,
            item_price: item_price,
            item_qty: 1
        }]);
        res.send(data);

    }else{
        let data = await update(`cartList`,{
            item_id
        },{
            item_qty:(str[0].item_qty*1)+1
        })
        res.send(data); 
    }
    
});


// 删除商品
router.get('/delcart', async (req, res, next) => {
    let {
        item_id
    } = req.query
    let data = await remove(`cartList`, {
        item_id: item_id
    })
    res.send(data);
});


// 改变商品数量
router.get('/changeNum', async (req, res, naex) => {
    let {item_id, item_qty} = req.query;
    let data = await update(`cartList`,{
        item_id
    },{
        item_qty:item_qty*1
    })
    res.send(data); 
})

module.exports = router;