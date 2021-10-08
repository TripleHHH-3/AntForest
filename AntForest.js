require('./Crack.js').unfreeze();
let EnergyBall = require('./EnergyBall.js');
// let SysConstant = require(path + 'SysConstant.js');

// //等待无障碍权限
// auto.waitFor();
// 请求截图
if (!requestScreenCapture()) {
    toastLog("请求截图失败，脚本取消！")
    exit();
}

//禁止音量键调节音量
events.setKeyInterceptionEnabled("volume_up", true);
//开启按键监听
events.observeKey();
//设置监听
events.onKeyDown("volume_up", () => {
    toastLog("脚本停止");
    exit();
})

app.startActivity({
    action: "VIEW",
    data: "alipays://platformapi/startapp?appId=60000002"
});

text("种树").waitFor();
sleep(500)

EnergyBall.collectEnergyBall();
sleep(500);

EnergyBall.collectFriendEnergyBall();

back();

exit();