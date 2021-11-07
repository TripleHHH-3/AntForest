require('./modules/Crack.js').unfreeze();
let EnergyBall = require('./modules/EnergyBall.js');
let TimingCollect = require('./modules/TimingCollect.js');

checkRunning();
initMonitor();
unlockScreen();
mainDialog();

function mainDialog() {
    let reciprocalThread;
    let postponeTime;

    let collect = events.emitter(threads.currentThread());

    //#region 对话框
    let tipDialog = dialogs.build({
        //对话框标题
        title: "绿色能量提示",
        //对话框内容
        content: "即将在5秒后运行，或者选择下项推迟",
        contentColor: "#DC143C",
        //单选内容
        items: ["5分钟", "30分钟", "60分钟"],
        itemsSelectMode: "single",
        itemsSelectedIndex: 0,
        itemsColor: "#708090",
        //确定键内容
        positive: "推迟收集",
        positiveColor: "#DAA520",
        //取消键内容
        negative: "放弃能量",
        negativeColor: "#000000",
        //中性键内容
        neutral: "立即快乐",
        neutralColor: "#00FF7F"
    }).on("positive", () => {
        //监听确定键
        let nextTime = new Date().getTime() + postponeTime * 60000;

        TimingCollect.addDisposableTask(nextTime);

        exit();
    }).on("negative", () => {
        console.log("放弃任务");
        exit();
    }).on("neutral", () => {
        collect.emit('start');
    }).on("single_choice", (index, item) => {
        postponeTime = parseInt(item.slice(0, -2));
    }).on("any", (action, dialog) => {
        //停止线程执行
        reciprocalThread.interrupt();
    }).show();
    //#endregion

    //禁止点击外部区域
    tipDialog.setCanceledOnTouchOutside(false);

    //倒计时子线程
    reciprocalThread = threads.start(function () {
        for (let sec = 5; sec != -1; sec--) {
            tipDialog.setContent("即将在 " + sec.toString() + "秒 后运行，或者选择下项推迟");
            sleep(1000)
        }

        text("立即快乐").findOne().click();
    });

    //监听收集按钮
    collect.on('start', () => main());
}

function unlockScreen() {
    let SettingConstant = require("./constant/SettingConstant.js");
    let { UnlockMode } = require('./enum/SettingEnum.js');

    let settingsStorages = storages.create(SettingConstant.SETTINGS_STORAGE);
    let unlockSetting = settingsStorages.get(SettingConstant.UNLOCK_SETTING);
    let keyguard_manager = context.getSystemService(context.KEYGUARD_SERVICE);

    device.wakeUpIfNeeded();

    if (keyguard_manager.isKeyguardLocked()) {
        //滑动时间
        let swipe_time = 0;
        //滑动自增时间
        let swipe_time_increment = 60;
        //最大尝试滑动次数
        let max_try_times_swipe = 20;

        while (keyguard_manager.isKeyguardLocked() && max_try_times_swipe--) {

            swipe_time += swipe_time_increment;

            swipe(device.width / 2, device.height * 0.9, device.width / 2, device.height * 0.1, swipe_time);

            sleep(500);

            if (unlockSetting.unlockMode == UnlockMode.NO_PW) {
                if (!keyguard_manager.isKeyguardLocked()) {
                    break;
                }
            }

            if (unlockSetting.unlockMode == UnlockMode.DIGITAL_UNLOCK) {
                if (desc("0").findOne(500)) {
                    break;
                }
            }
        }

        if (max_try_times_swipe < 0) {
            log("解锁失败！");
            exit();
        }

        if (unlockSetting.unlockMode == UnlockMode.DIGITAL_UNLOCK) {
            const pd = unlockSetting.pw;

            for (let index = 0; index < pd.length; index++) {
                desc(pd[index]).findOne().click();
            }

            sleep(1000)

            if (keyguard_manager.isKeyguardLocked()) {
                log("屏幕解锁失败");
                exit();
            } else {
                console.log("屏幕解锁成功");
            }
        }
    }
}

function main() {
    //防止运行超时
    threads.start(function () {
        setTimeout(function () {
            exit();
        }, 15 * 60 * 1000);
    })

    console.log("请求权限");

    //请求无障碍权限
    auto();
    // 请求截图
    if (!requestScreenCapture()) {
        toastLog("请求截图权限失败")
        exit();
    }

    console.log("打开支付宝");

    if (currentPackage() == "com.eg.android.AlipayGphone") {
        home();
        sleep(500)
    }

    app.startActivity({
        action: "VIEW",
        data: "alipays://platformapi/startapp?appId=60000002"
    });

    text("种树").waitFor();
    sleep(500)

    EnergyBall.collectMyEnergyBall();
    sleep(500);

    EnergyBall.collectFriendEnergyBall();

    back();
    console.log("能量收取结束");
    exit();
}

function initMonitor() {
    //禁止音量键调节音量
    events.setKeyInterceptionEnabled("volume_up", true);
    //开启按键监听
    events.observeKey();
    //设置监听
    events.onKeyDown("volume_up", () => {
        toastLog("收集能量脚本停止！");
        exit();
    })

}

function checkRunning() {
    let count = 0;

    engines.all().forEach(i => {
        if (files.getName(i.getSource()) == "AntForest.js") {
            count++;
        }
    })

    if (count > 1) {
        toast("AntForest已有实例运行");
        exit();
    }
}