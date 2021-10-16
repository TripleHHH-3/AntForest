let FunctionConstant = require('../constant/FunctionConstant.js');
let functionStorage = storages.create(FunctionConstant.FUNCTION);

Date.prototype.format = function (fmt) {
    var o = {
        "M+": this.getMonth() + 1,                 //月份 
        "d+": this.getDate(),                    //日 
        "h+": this.getHours(),                   //小时 
        "m+": this.getMinutes(),                 //分 
        "s+": this.getSeconds(),                 //秒 
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度 
        "S": this.getMilliseconds()             //毫秒 
    };
    if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    }
    for (var k in o) {
        if (new RegExp("(" + k + ")").test(fmt)) {
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
        }
    }
    return fmt;
}

let now = new Date();

let antForestExecution = engines.execScriptFile("../AntForest.js");
toast("定时任务执行成功")

sleep(500)

while (!antForestExecution.getEngine().isDestroyed()) {
    sleep(3000);
}

let newTime = now.getTime() + 60 * 60 * 1000;

newTime = new Date(newTime);

//#region 时间处理
let leftTime = new Date();
leftTime.setHours(23);
leftTime.setMinutes(30);

let rightTime = new Date();
rightTime.setDate(rightTime.getDate() + 1);
rightTime.setHours(8);
rightTime.setMonth(30);

if (newTime > leftTime && newTime < rightTime) {
    newTime = rightTime;
}

let rightTime = new Date();
rightTime.setHours(8);
rightTime.setMonth(30);
if (newTime < rightTime) {
    newTime = rightTime;
}
//#endregion

let task = $timers.addDisposableTask({
    path: files.cwd() + "/TimingCollect.js",
    date: newTime.format("yyyy-MM-ddThh:mm"),
})

timingCollectEnergy = {
    enabled: true,
    taskId: task.id
}

functionStorage.put(FunctionConstant.TIMING_COLLECT_ENERGY, timingCollectEnergy);