"ui";

ui.layout(
    <vertical>
        <appbar>
            <toolbar id="toolbar" title="定时设置" paddingTop="2dp" h="auto" />
        </appbar>
        <frame>
            <ScrollView>
                <vertical marginTop="5">
                    <card w="*" h="auto" margin="10 5" cardCornerRadius="2dp" cardElevation="1dp" gravity="center_vertical">
                        <vertical padding="18 8" marginBottom="2" h="auto">
                            <text text="[定时设置]" color="#FFA500" textStyle="bold" textSize="15sp" />
                            <horizontal>
                                <text text="间隔时间(分钟):" textStyle="bold" textSize="15sp" />
                                <input id="intervals" text="60" color="#666666" w="*" inputType="number" />
                            </horizontal>
                            <text text="每隔多长时间收集能量" color="#D2B48C" textStyle="bold" textSize="12sp" />
                        </vertical>
                        <View bg="#4EBFDD" h="*" w="5" />
                    </card>
                    <card w="*" h="auto" margin="10 5" cardCornerRadius="2dp" cardElevation="1dp" gravity="center_vertical">
                        <button id="saveSettings" h="auto" text="保 存 设 置" textSize="17" textStyle="bold" color="#ffffff" bg="#4EBFDD" foreground="?selectableItemBackground" layout_gravity="bottom" />
                        <View bg="#4EBFDD" h="*" w="5" />
                    </card>
                </vertical>
            </ScrollView>
        </frame>
    </vertical>
)

let SettingConstant = require('../constant/SettingConstant.js');

let settingsStorages = storages.create(SettingConstant.SETTINGS_STORAGE);

initData();

/**
 * 初始化UI和数据
 */
function initData() {
    let timingCollectSetting = settingsStorages.get(SettingConstant.TIMING_COLLECT_SETTING);

    if (timingCollectSetting) {
        if (timingCollectSetting.intervals) {
            ui.intervals.setText(timingCollectSetting.intervals)
        }
    }
}

ui.saveSettings.click(() => {
    let timingCollectSetting = {
        intervals: ui.intervals.getText()
    }

    //保存
    settingsStorages.put(SettingConstant.TIMING_COLLECT_SETTING, timingCollectSetting);
})