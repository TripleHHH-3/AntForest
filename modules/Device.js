let SettingConstant = require("../constant/SettingConstant.js");
let { UnlockMode } = require('../enum/SettingEnum.js');

let settingsStorages = storages.create(SettingConstant.SETTINGS_STORAGE);

let Device = {
    unlockScreen: function () {
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
}


module.exports = Device;