let errorMessage = msg => {

    console.error(msg);

    device.isScreenOn() && KeyCode(26); //判断是否锁屏

    exit();

}

let max_try_times_wake_up = 10; //尝试解锁10次

while (!device.isScreenOn() && max_try_times_wake_up--) {

    device.wakeUp();

    sleep(500);

}

if (max_try_times_wake_up < 0) errorMessage("点亮屏幕失败"); //尝试次数max，显示失败文本

let keyguard_manager = context.getSystemService(context.KEYGUARD_SERVICE);

let isUnlocked = () => !keyguard_manager.isKeyguardLocked();

let swipe_time = 0;

let swipe_time_increment = 80;

let max_try_times_swipe = 20; //初始化时间，递增时间，最大解锁时间

while (!isUnlocked() && max_try_times_swipe--) {

    swipe_time += swipe_time_increment;

    gesture(swipe_time, [540, device.height * 0.9], [540, device.height * 0.1]); //模拟手势

    sleep(1200);

} //循环函数

if (max_try_times_swipe < 0) errorMessage("上滑屏幕失败"); //尝试失败，重新设置一下参数

log("解锁成功");

log("尝试得到最佳滑动时间: " + swipe_time + "(毫秒)") //可到日志中查看最佳滑动时间

exit();

desc(3).findOne().click();