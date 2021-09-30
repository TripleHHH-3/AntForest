unfreeze()

// app.launchApp("支付宝");

// text("扫一扫").waitFor();
// sleep(500)

// let a=text("蚂蚁森林").findOne()
// console.log(a);

// app.startActivity({
//     action: "VIEW",
//     data: "alipays://platformapi/startapp?appId=60000002"
// });

// text("查看更多好友").findOne().parent().click();
// sleep(1000)
// back();

let a=className("ListView").untilFind()
let b=a.get(1)
let c=b.childCount()
console.log(c);

b.children().forEach(i=>{
    console.log(i);
})

function unfreeze() {
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