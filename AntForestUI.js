
"ui";

ui.layout(
    <vertical>
        <appbar>
            <toolbar title="蚂蚁森林" />
        </appbar>
        <Switch id="autoService" text="无障碍服务" checked="{{auto.service != null}}" padding="8 8 8 8" textSize="15sp" />
        <frame height="200" gravity="center">
            <text text="相关配置..." gravity="center" />
        </frame>
        <button id="start" text="开始运行" />
    </vertical>
);

ui.autoService.on("check", function (checked) {
    // 用户勾选无障碍服务的选项时，跳转到页面让用户去开启
    if (checked && auto.service == null) {
        app.startActivity({
            action: "android.settings.ACCESSIBILITY_SETTINGS"
        });
    }
    if (!checked && auto.service != null) {
        auto.service.disableSelf();
    }
});

// 当用户回到本界面时，resume事件会被触发
ui.emitter.on("resume", function () {
    // 此时根据无障碍服务的开启情况，同步开关的状态
    ui.autoService.checked = auto.service != null;
});

ui.start.on("click", function () {
    //程序开始运行之前判断无障碍服务
    if (auto.service == null) {
        toast("请先开启无障碍服务！");
        return;
    }

    // //禁止音量键调节音量
    // events.setKeyInterceptionEnabled("volume_up", true);
    // //开启按键监听
    // events.observeKey();
    // //设置监听
    // events.onKeyDown("volume_up", () => {
    //     toastLog("脚本停止");
    //     exit();
    // })

    main();
});

ui.emitter.on("back_pressed", (e) => {
    e.consumed = true;
    dialogs.confirm("是否退出？").then((result) => {
        if (result) {
            ui.finish();
        }
    });
})

function main() {
    // 脚本的主逻辑
    threads.start(function () {
        engines.execScriptFile("./AntForest.js");
    });
}