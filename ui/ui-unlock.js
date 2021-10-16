"ui";

ui.layout(
    <vertical>
        <appbar>
            <toolbar id="toolbar" title="解锁设置" paddingTop="2dp" h="auto" />
        </appbar>
        <frame>
            <ScrollView>
                <vertical marginTop="5">
                    <card w="*" h="auto" margin="10 5" cardCornerRadius="2dp" cardElevation="1dp" gravity="center_vertical">
                        <vertical padding="18 8" marginBottom="2" h="auto">
                            <text text="[解锁设置]" color="#FFA500" textStyle="bold" textSize="15sp" />
                            <radiogroup id="unlockMode" orientation="horizontal" >
                                <text text="解锁方式：" w="auto" textStyle="bold" />
                                <radio id="noPw" text="无密码" checked="true" marginLeft='5' />
                                <radio id="digitalUnlock" text="数字解锁" marginLeft='5' />
                                <radio id="slideUnlock" text="滑动解锁" marginLeft='5' enabled="false" />
                            </radiogroup>
                            <horizontal>
                                <text text="密码:" textStyle="bold" textSize="15sp" />
                                <input id="pw" text="" color="#666666" w="*" password="true" inputType="numberPassword" />
                            </horizontal>
                            <text text="暂时只支持数字解锁" color="#D2B48C" textStyle="bold" textSize="12sp" />
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

const path = ".";

let { UnlockMode } = require(path + '/enum/SettingEnum.js');
let SettingConstant = require(path + '/constant/SettingConstant.js');

let settingsStorages = storages.create(SettingConstant.SETTINGS_STORAGE);

initData();

/**
 * 初始化UI和数据
 */
function initData() {
    let unlockSetting = settingsStorages.get(SettingConstant.UNLOCK_SETTING);

    if (unlockSetting) {
        //解锁方式
        if (unlockSetting.unlockMode) {
            switch (unlockSetting.unlockMode) {
                case UnlockMode.NO_PW:
                    ui.noPw.setChecked(true);
                    break;
                case UnlockMode.DIGITAL_UNLOCK:
                    ui.digitalUnlock.setChecked(true);
                    break;
            }
        }

        //密码
        if (unlockSetting.pw) {
            ui.pw.setText(unlockSetting.pw);
        }
    }
}

ui.saveSettings.click(() => {
    let unlockSetting = {
        unlockMode: null,
        pw: null
    }

    //解锁方式
    switch (ui.unlockMode.getCheckedRadioButtonId()) {
        case ui.noPw.getId():
            unlockSetting.unlockMode = UnlockMode.NO_PW;
            break;
        case ui.digitalUnlock.getId():
            unlockSetting.unlockMode = UnlockMode.DIGITAL_UNLOCK;
            break;
    }

    //密码
    unlockSetting.pw = ui.pw.getText();

    //保存
    settingsStorages.put(SettingConstant.UNLOCK_SETTING, unlockSetting);
})