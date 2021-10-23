let EnergyBall = require('./AntForest/modules/EnergyBall.js');

// 请求截图
if (!requestScreenCapture()) {
    toastLog("请求截图权限失败")
    exit();
}

let a = EnergyBall.findEnergyBall()[0];
console.log(a);

//导入插件
ocr = $plugins.load("com.hraps.ocr")

let cs = captureScreen();

var clip = images.clip(cs, a.x - a.radius, a.y-a.radius, a.radius*2, a.radius*2);

//导入需识别的图片，请自行输入图片路径
img = clip
//识别图片
results = ocr.detect(img.getBitmap(), 0.8)
console.info("过滤前结果数：" + results.size())
//识别结果过滤
results = ocr.filterScore(results, 0.5, 0.5, 0.5)
//输出最终结果
for (var i = 0; i < results.size(); i++) {
    var re = results.get(i)
    log("结果:" + i + "  文字:" + re.text + "  位置:" + re.frame + "  角度类型:" + re.angleType)
    log("区域置信度:" + re.dbScore + "  角度置信度:" + re.angleScore + "  文字置信度:" + re.crnnScore + "\n")
}

img.recycle()