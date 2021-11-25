require('./Crack.js').unfreeze();
require('./Device.js').unlockScreen();

//请求无障碍权限
auto();

for (; engines.all().length != 1;) {
    toastLog("其他脚本在运行");
    sleep(10000);
}

toastLog("正在启动支付宝···")

if (currentPackage() == "com.eg.android.AlipayGphone") {
    home();
    sleep(500)
}

app.startActivity({
    action: "VIEW",
    data: "alipays://platformapi/startapp?appId=20000160"
});

text("每日签到").findOne().clickCenter();
console.log("完成【每日签到】");

text("签到提醒").waitFor();

id("feeds").waitFor();

let shop15sec = text("逛15秒赚积分").findOne(1500);

sleep(1000)

if (shop15sec) {
    console.log("逛15秒赚积分");
    shop15sec.click();
    while (true) {
        sleep(1000);
        if (id("feeds-task").findOne().children().get(0).text().match(".*已完成.*")) {
            console.log("完成【逛15秒赚积分】");
            break;
        }
    }
}

back();
sleep(500);
back();

console.log("每日签到结束");
exit();