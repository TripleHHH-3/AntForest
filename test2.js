device.wakeUpIfNeeded();
sleep(500)

let keyguard_manager = context.getSystemService(context.KEYGUARD_SERVICE);
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

    if (desc("0").findOne(500)) {
        break;
    }
}

if (max_try_times_swipe < 0) {
    log("解锁失败！");
    exit();
}

const pd = "753684159";

for (let index = 0; index < pd.length; index++) {
    desc(pd[index]).findOne().click();
}

if (keyguard_manager.isKeyguardLocked()) {
    log("密码不正确！");
    exit();
}