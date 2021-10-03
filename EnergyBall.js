let SysConstant = require('./SysConstant.js');

function EnergyBall() {
}

EnergyBall.MAX_RADIUS = SysConstant.DEVICE_WIDETH / 8 / 2
EnergyBall.MIN_RADIUS = SysConstant.DEVICE_WIDETH / 10 / 2
EnergyBall.REGION_Y = SysConstant.DEVICE_HEIGHT * 0.2
EnergyBall.REGION_H = SysConstant.DEVICE_HEIGHT * 0.3

/**
 * 找到能量球
 * @returns 每个能量球的坐标
 */
EnergyBall.findEnergyBall = function () {
    // 截图
    let screenImg = captureScreen();
    // 灰度化图片
    let gray = images.grayscale(screenImg);

    // 找能量球
    let energyBallArr = images.findCircles(gray, {
        region: [0, EnergyBall.REGION_Y, SysConstant.DEVICE_WIDETH, EnergyBall.REGION_H],
        dp: 1,
        minDst: EnergyBall.MIN_RADIUS,
        param1: 50,
        param2: 50,
        minRadius: EnergyBall.MIN_RADIUS,
        maxRadius: EnergyBall.MAX_RADIUS,
    });

    // 回收图片
    gray.recycle();

    return energyBallArr;
}

/**
 * 收集能量
 */
EnergyBall.collectEnergyBall = function () {
    let energyBallArr = EnergyBall.findEnergyBall();

    //收集能量
    energyBallArr.forEach(eneryBall => {
        click(eneryBall.x, eneryBall.y + EnergyBall.REGION_Y)
    });
}

/**
 * 遍历朋友排行榜
 */
EnergyBall.traversalFriendRanking = function () {
    let rankingList = className("android.webkit.WebView").findOne();

    let indexTemp = 0

    while (true) {
        let friendList = className("ListView").untilFind().get(1).children();

        let cs = captureScreen();

        for (let index = indexTemp; index < friendList.length; index++) {
            indexTemp = index;

            //处于屏幕底端时向下滚动屏幕
            if (friendList[index].bounds().bottom == SysConstant.DEVICE_HEIGHT) {
                rankingList.scrollDown();
                sleep(1000);
                break;
            }

            let energyWeight = friendList[index].findOne(textEndsWith("g"))

            if (energyWeight) {
                //判断当前项是否有能量收集
                let energyWeightBounds = energyWeight.bounds()
                let collectable = findColorEquals(
                    cs, -14835603,
                    energyWeightBounds.left,
                    energyWeightBounds.top,
                    energyWeightBounds.right - energyWeightBounds.left,
                    energyWeightBounds.bottom - energyWeightBounds.top
                );

                //收集朋友能量
                if (collectable) {
                    EnergyBall.enterFriendHomepage(friendList[index]);
                    cs = captureScreen();
                }
            }
        }

        if (indexTemp + 1 == friendList.length) {
            break;
        }
    }
}

/**
 * 进入好友主页
 * @param {} friend 
 */
EnergyBall.enterFriendHomepage = function (friend) {
    friend.clickCenter();
    text("点击展开好友动态").waitFor();
    sleep(500)

    EnergyBall.collectEnergyBall();

    back();
    text("排行榜").waitFor();
    sleep(500)
}

/**
 * 收集好友能量
 */
EnergyBall.collectFriendEnergyBall = function () {
    //#region 第一次进入排行榜和收集好友能量
    text("查看更多好友").findOne().parent().click();

    text("排行榜").waitFor();
    sleep(500)

    EnergyBall.traversalFriendRanking();

    back();
    //#endregion

    //#region 第二次进入排行榜和收集好友能量
    text("查看更多好友").findOne().parent().click();

    text("排行榜").waitFor();
    sleep(500)

    EnergyBall.traversalFriendRanking();
    //#endregion

    //返回个人主页
    back();
    text("种树").waitFor();
    sleep(500)
}

module.exports = EnergyBall;