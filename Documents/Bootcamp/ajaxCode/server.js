/*
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-06-24 16:04:20
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-06-28 13:31:04
 * @FilePath: /undefined/Users/dorren/Documents/Bootcamp/server.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const { response } = require('express');
const express = require('express');
const app = express();
app.get('/jserver', (request, response) => {
    response.setHeader('Access-Control-Allow-Origin', '*')
    response.send('Hello, Ajax-2');
});

app.all('/server', (request, response) => {
    response.setHeader('Access-Control-Allow-Origin', '*')
    response.setHeader('Access-Control-Allow-Headers', '*')
    response.send('Hello, Ajax POST');
});
app.all('/json-server', (request, response) => {
    response.setHeader('Access-Control-Allow-Origin', '*')
    response.setHeader('Access-Control-Allow-Headers', '*')
    const data = {
        name: 'Katherine The One',
    }
    let str = JSON.stringify(data);
    response.send(str);
});

app.get('/ie', (request, response) => {
    response.setHeader('Access-Control-Allow-Origin', '*')
    response.send('Hello, IE-2');
});

app.get('/delay', (request, response) => {
    response.setHeader('Access-Control-Allow-Origin', '*')
    setTimeout(
        () => { response.send('延时响应'); }, 3000
    )

});

app.all('/jquery-server', (request, response) => {
    response.setHeader('Access-Control-Allow-Origin', '*')
    const data = { name: 'ILoveYouForever' }
    response.send(JSON.stringify(data))

});

app.all('/axios-server', (request, response) => {
    response.setHeader('Access-Control-Allow-Origin', '*')
    response.setHeader('Access-Control-Allow-Headers', '*')
    const data = { name: 'ILoveYouForever' }
    response.send(JSON.stringify(data))

});

app.all('/check-username', (request, response) => {

    const data = { exist: 1, msg: '用户名已存在' };

    let str = JSON.stringify(data);
    response.end(`handle(${str})`);
});

app.all('/jsonpserver', (request, response) => {

    const data = { name: '李健', city: ['北京', '上海', '广州'] };

    let str = JSON.stringify(data);
    let cb = request.query.callback;
    response.end(`${cb}(${str})`);
});

app.listen(8000, () => {
    console.log("服务已经启动，8000端口监听中......")
})