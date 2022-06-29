/*
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-06-28 10:46:24
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-06-28 11:08:54
 * @FilePath: /ajaxCode/app.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const data = {
    name: '李健'
}
function handle(data) {
    const result = document.getElementById('result');
    result.innerHTML = data.name;
}

handle(data);
