function Crack() {
}
Crack.unfreeze = function () {
    importClass(com.stardust.autojs.core.accessibility.AccessibilityBridge.WindowFilter);
    let bridge = runtime.accessibilityBridge;
    let bridgeField = runtime.getClass().getDeclaredField("accessibilityBridge");
    let configField = bridgeField.getType().getDeclaredField("mConfig");
    configField.setAccessible(true);
    configField.set(bridge, configField.getType().newInstance());
    bridge.setWindowFilter(new JavaAdapter(AccessibilityBridge$WindowFilter, {
        filter: function (info) {
            return true;
        }
    }));
}

module.exports = Crack;


// //禁止音量键调节音量
// events.setKeyInterceptionEnabled("volume_up", true);
// //开启按键监听
// events.observeKey();
// //设置监听
// events.onKeyDown("volume_up", () => {
//     toastLog("脚本停止");
//     exit();
// })