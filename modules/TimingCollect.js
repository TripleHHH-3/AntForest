let SettingConstant = require('../constant/SettingConstant.js');
let FunctionConstant = require('../constant/FunctionConstant.js');

let functionStorage = storages.create(FunctionConstant.FUNCTION);
let settingsStorages = storages.create(SettingConstant.SETTINGS_STORAGE);

let timingCollectSetting = settingsStorages.get(SettingConstant.TIMING_COLLECT_SETTING) || {};

let TimingCollect = {
    timingCollect: function (nowTime) {
        //未启动定时功能直接返回
        if (!timingCollectSetting.enabled) {
            return;
        }

        let intervals = timingCollectSetting.intervals || 60

        let nextTime = nowTime.getTime() + intervals * 60 * 1000;
        nextTime = new Date(nextTime);

        //#region 时间处理
        //大于当天23.30和小于次天8.30时，取次天8.30
        let leftTime = new Date();
        leftTime.setHours(23);
        leftTime.setMinutes(30);

        let rightTime = new Date();
        rightTime.setDate(rightTime.getDate() + 1);
        rightTime.setHours(7);
        rightTime.setMinutes(00);
        rightTime.setMinutes(intervals);

        if (nextTime > leftTime && nextTime < rightTime) {
            nextTime = rightTime;
        }

        //小于当天8.30时，取当天8.30
        rightTime = new Date();
        rightTime.setHours(7);
        rightTime.setMinutes(00);
        rightTime.setMinutes(intervals);
        if (nextTime < rightTime) {
            nextTime = rightTime;
        }
        //#endregion

        let task = $timers.addDisposableTask({
            path: files.cwd() + "/TimingCollectTask.js",
            date: format(nextTime, "yyyy-MM-ddThh:mm"),
        })

        timingCollectSetting.taskId = task.id

        settingsStorages.put(SettingConstant.TIMING_COLLECT_SETTING, timingCollectSetting);
    },

    addDisposableTask: function (nextTime) {
        let existingTask = $timers.queryTimedTasks({})
            .filter(t => t.timeFlag == 0 && files.getName(t.scriptPath) == "AntForest.js")
            .some(t => t.millis < nextTime + 60000 && t.millis > nextTime - 60000);

        if (!existingTask) {
            nextTime = new Date(nextTime);

            let task = $timers.addDisposableTask({
                path: files.cwd() + "/AntForest.js",
                date: format(nextTime, "yyyy-MM-ddThh:mm"),
            })
        }
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