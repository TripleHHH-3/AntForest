require('./Crack.js').unfreeze();
let EnergyBall = require('./EnergyBall.js');
// let SysConstant = require(path + 'SysConstant.js');

//等待无障碍权限
auto.waitFor();
//请求截图
requestScreenCapture();

app.startActivity({
    action: "VIEW",
    data: "alipays://platformapi/startapp?appId=60000002"
});

text("种树").waitFor();
sleep(500)

EnergyBall.collectEnergyBall();
sleep(500);

EnergyBall.collectFriendEnergyBall();

home();