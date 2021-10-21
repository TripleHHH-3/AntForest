let SettingConstant = require('../constant/SettingConstant.js');
let FunctionConstant = require('../constant/FunctionConstant.js');

let functionStorage = storages.create(FunctionConstant.FUNCTION);
let settingsStorages = storages.create(SettingConstant.SETTINGS_STORAGE);

let timingCollectSetting = settingsStorages.get(SettingConstant.TIMING_COLLECT_SETTING);

let TimingCollect = {
    timingCollect: function (nowTime) {
        let timingCollectEnergy = functionStorage.get(FunctionConstant.TIMING_COLLECT_ENERGY)
        //未启动定时功能直接返回
        if (!timingCollectEnergy || !timingCollectEnergy.enabled) {
            return;
        }

        let intervals = 60;
        if (timingCollectSetting) {
            intervals = timingCollectSetting.intervals || 60
        }

        let nextTime = nowTime.getTime() + intervals * 60 * 1000;
        nextTime = new Date(nextTime);

        //#region 时间处理
        //大于当天23.30和小于次天8.30时，取次天8.30
        let leftTime = new Date();
        leftTime.setHours(23);
        leftTime.setMinutes(30);

        let rightTime = new Date();
        rightTime.setDate(rightTime.getDate() + 1);
        rightTime.setHours(8);
        rightTime.setMinutes(30);

        if (nextTime > leftTime && nextTime < rightTime) {
            nextTime = rightTime;
        }

        //小于当天8.30时，取当天8.30
        rightTime = new Date();
        rightTime.setHours(8);
        rightTime.setMinutes(30);
        if (nextTime < rightTime) {
            nextTime = rightTime;
        }
        //#endregion

        let task = $timers.addDisposableTask({
            path: files.cwd() + "/TimingCollectTask.js",
            date: format(nextTime, "yyyy-MM-ddThh:mm"),
        })

        timingCollectEnergy = {
            enabled: true,
            taskId: task.id
        }

        functionStorage.put(FunctionConstant.TIMING_COLLECT_ENERGY, timingCollectEnergy);
    }
}

function format(time, fmt) {
    var o = {
        "M+": time.getMonth() + 1,                 //月份 
        "d+": time.getDate(),                    //日 
        "h+": time.getHours(),                   //小时 
        "m+": time.getMinutes(),                 //分 
        "s+": time.getSeconds(),                 //秒 
        "q+": Math.floor((time.getMonth() + 3) / 3), //季度 
        "S": time.getMilliseconds()             //毫秒 
    };
    if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (time.getFullYear() + "").substr(4 - RegExp.$1.length));
    }
    for (var k in o) {
        if (new RegExp("(" + k + ")").test(fmt)) {
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
        }
    }
    return fmt;
}

module.exports = TimingCollect;