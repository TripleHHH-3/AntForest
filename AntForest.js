var DEVICE_WIDETH = device.width
var ENERGY_BALL_MAX_RADIUS = device.width / 8 / 2
var ENERGY_BALL_MIN_RADIUS = device.width / 10 / 2
var ENERGY_BALL_REGION_Y = device.height * 0.2
var ENERGY_BALL_REGION_H = device.height * 0.3

//等待无障碍权限
auto.waitFor();
//请求截图
requestScreenCapture();
//解除限制
unfreeze();

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
    region: [0, ENERGY_BALL_REGION_Y, DEVICE_WIDETH, ENERGY_BALL_REGION_H],
    dp: 1,
    minDst: ENERGY_BALL_MIN_RADIUS,
    param1: 50,
    param2: 50,
    minRadius: ENERGY_BALL_MIN_RADIUS,
    maxRadius: ENERGY_BALL_MAX_RADIUS,
});

// 回收图片
gray.recycle();

//收集能量
energyBallArr.forEach(eneryBall => {
    click(eneryBall.x, eneryBall.y + ENERGY_BALL_REGION_Y)
});

function unfreeze() {
    importClass(com.stardust.autojs.core.accessibility.AccessibilityBridge.WindowFilter);
    let bridge = runtime.accessibilityBridge;
    let bridgeField = runtime.getClass().getDeclaredField("accessibilityBridge");
    let configField = bridgeField.getType().getDeclaredField("mConfig");
    configField.setAccessible(true);
    configField.set(bridge, configField.getType().newInstance());
    bridge.setWindowFilter(new JavaAdapter(AccessibilityBridge$WindowFilter, {
        filter: function (info) {
            return true;
        }
    }));
}