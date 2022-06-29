/*
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-06-25 13:37:22
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-06-25 14:32:39
 * @FilePath: /undefined/Users/dorren/Documents/Colt's Web Development Bootcamp/express.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

const express = require('express');
const app = express();
app.get('/', (request, response) => {
    response.send('Hello, Ajax');
});
app.listen(8000, () => {
    console.log("服务已经启动，8000端口监听中......")
})