const path = "./AntForest/"

require(path + 'Crack.js').unfreeze();
let EnergyBall = require(path + 'EnergyBall.js');

let rankingList = className("android.webkit.WebView").findOne();

requestScreenCapture();

let indexTemp = 0
while (true) {
    let friendList = rankingList.child(2).children()

    let cs = captureScreen();

    for (let index = indexTemp; index < friendList.length; index++) {
        indexTemp = index;

        //处于屏幕底端时向下滚动屏幕
        if (friendList[index].bounds().bottom == 2340) {
            rankingList.scrollDown();
            sleep(1000);
            break;
        }

        let collectableLogo = friendList[index].child(3);
        //排除掉邀请项
        if (collectableLogo.text() == "邀请") {
            break;
        }
        //判断当前项是否有能量收集
        let collectableLogoBounds = collectableLogo.bounds()
        let collectable = findColorEquals(
            cs, -14835603,
            collectableLogoBounds.left,
            collectableLogoBounds.top,
            collectableLogoBounds.right - collectableLogoBounds.left,
            collectableLogoBounds.bottom - collectableLogoBounds.top
        );

        if (collectable) {
            collectEnergy(friendList[index]);
        }
    }

    if (indexTemp + 1 == friendList.length) {
        break;
    }
}

function collectEnergy(friend) {
    friend.clickCenter();
    id("J_treeContainer").waitFor();
    sleep(1000)

    EnergyBall.collectEnergyBall();

    back();
}