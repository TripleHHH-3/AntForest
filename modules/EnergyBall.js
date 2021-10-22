let SysConstant = require('../SysConstant.js');

function EnergyBall() {
}

EnergyBall.MAX_RADIUS = SysConstant.DEVICE_WIDETH / 8 / 2;
EnergyBall.MIN_RADIUS = SysConstant.DEVICE_WIDETH / 10 / 2;
EnergyBall.REGION_Y = SysConstant.DEVICE_HEIGHT * 0.2;
EnergyBall.REGION_H = SysConstant.DEVICE_HEIGHT * 0.3;

/**
 * 找到能量球
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

    //还原能量球的Y轴数值
    energyBallArr.forEach((energyBall) => energyBall.y += EnergyBall.REGION_Y)

    return energyBallArr;
}

/**
 * 收集能量
 */
EnergyBall.collectEnergyBall = function () {
    let energyBallArr = EnergyBall.findEnergyBall();

    //收集能量
    energyBallArr.forEach(eneryBall => click(eneryBall.x, eneryBall.y));
}

/**
 * 遍历朋友排行榜
 */
EnergyBall.traversalFriendRanking = function () {
    let collection = {
        collect: false,//是否收集
        remainingTime: 60//朋友能量剩余时间
    };

    let rankingList = className("android.webkit.WebView").findOne();

    let indexTemp = 0

    while (true) {
        let friendList = className("ListView").untilFind().get(1).children();

        let cs = captureScreen();

        for (let index = indexTemp; index < friendList.length; index++) {
            indexTemp = index;

            let friend = friendList[index];

            //处于屏幕底端时向下滚动屏幕
            if (friend.bounds().bottom == SysConstant.DEVICE_HEIGHT) {
                rankingList.scrollDown();
                sleep(1000);
                break;
            }

            let energyBall = judgingCollectable(cs, friend);

            if (energyBall.collectable && !energyBall.remainingTime) {
                //收集朋友能量
                EnergyBall.enterFriendHomepage(friend);
                cs = captureScreen();
                collection.collect = true;
            }

            //记录最小的剩余时间
            if (energyBall.collectable && energyBall.remainingTime && energyBall.remainingTime < collection.remainingTime) {
                collection.remainingTime = energyBall.remainingTime;
            }

            //当存在剩余时间在2分钟内则强制设true，让脚本循环查看排行榜
            if(energyBall.collectable && energyBall.remainingTime && energyBall.remainingTime <= 2){
                collection.collect = true;
            }
        }

        if (indexTemp + 1 == friendList.length) {
            break;
        }
    }

    return collection;
}

function judgingCollectable(cs, friend) {
    //找收集标识
    let fb = friend.bounds();
    let collectableLogo = null;
    friend.children().forEach((view) => {
        if (fb.top == view.bounds().top && fb.right == view.bounds().right) {
            collectableLogo = view;
        }
    })

    //收集标识不存在，类似需邀请的好友
    if (!collectableLogo) {
        return { collectable: false };
    } else {
        //判断是否有能量收集
        let collectableLogoBounds = collectableLogo.bounds();
        let logo = {
            x: collectableLogoBounds.left,
            y: collectableLogoBounds.top,
            weight: collectableLogoBounds.right - collectableLogoBounds.left,
            height: collectableLogoBounds.bottom - collectableLogoBounds.top
        }

        let point = findColorEquals(cs, -14835603, logo.x, logo.y, logo.weight, logo.height);

        if (!point) {
            return { collectable: false };
        } else {
            let remainingTime = collectableLogo.text()

            if (remainingTime == "") {
                return { collectable: true, remainingTime: null };
            } else {
                //返回可收集能量的剩余时间
                return { collectable: true, remainingTime: parseInt(remainingTime) };
            }
        }
    }
}

/**
 * 进入好友主页
 * @param {} friend 
 */
EnergyBall.enterFriendHomepage = function (friend) {
    //进入好友主页
    friend.clickCenter();
    text("点击展开好友动态").waitFor();
    sleep(500)

    //收取能量
    EnergyBall.collectEnergyBall();

    //返回排行榜
    back();
    text("排行榜").waitFor();
    sleep(500)
}

/**
 * 收集好友能量
 */
EnergyBall.collectFriendEnergyBall = function () {
    let collection = {
        collect: true,
        remainingTime: 60
    };

    //循环收集能量，直到没有能量收集
    while (collection.collect) {
        text("查看更多好友").findOne().parent().click();

        text("排行榜").waitFor();
        sleep(500)

        collection = EnergyBall.traversalFriendRanking();

        back();
    }

    if (collection.remainingTime < 60) {
        let nextTime = new Date().getTime() + collection.remainingTime * 60 * 1000;
        nextTime = new Date(nextTime);

        let task = $timers.addDisposableTask({
            path: files.cwd() + "/AntForest.js",
            date: format(nextTime, "yyyy-MM-ddThh:mm"),
        })
    }

    text("种树").waitFor();
    sleep(500)
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

module.exports = EnergyBall;