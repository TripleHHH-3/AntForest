const path = "./AntForest/"

require(path + 'Crack.js').unfreeze();
let EnergyBallConstant = require(path + 'EnergyBallConstant.js');
let SysConstant = require(path + 'SysConstant.js');

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

// 截图
let screenImg = captureScreen();
// 灰度化图片
let gray = images.grayscale(screenImg);

// 找能量球
let energyBallArr = images.findCircles(gray, {
    region: [0, EnergyBallConstant.REGION_Y, SysConstant.DEVICE_WIDETH, EnergyBallConstant.REGION_H],
    dp: 1,
    minDst: EnergyBallConstant.MIN_RADIUS,
    param1: 50,
    param2: 50,
    minRadius: EnergyBallConstant.MIN_RADIUS,
    maxRadius: EnergyBallConstant.MAX_RADIUS,
});

// 回收图片
gray.recycle();

//收集能量
energyBallArr.forEach(eneryBall => {
    click(eneryBall.x, eneryBall.y + EnergyBallConstant.REGION_Y)
});

sleep(500)
text("查看更多好友").findOne().parent().click();