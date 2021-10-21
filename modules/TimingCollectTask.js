let TimingCollect = require('./TimingCollect.js');

let nowTime = new Date();

let antForestExecution = engines.execScriptFile("../AntForest.js", { path: files.path("../") });

sleep(500)

while (!antForestExecution.getEngine().isDestroyed()) {
    sleep(5000);
}

TimingCollect.timingCollect(nowTime);