"ui";

ui.layout(
    <drawer id="drawer">
        <vertical>
            <appbar>
                <toolbar id="toolbar" title="蚂蚁森林" paddingTop="2dp" h="auto" >
                </toolbar>
                <tabs id="tabs" />
            </appbar>
            <viewpager id="viewpager">
                {/* 第一个Frame */}
                <frame>
                    <scroll>
                        <vertical gravity="center">
                            <horizontal gravity="center_vertical" padding="5 5">
                                <View bg="#4EBFDD" h="*" w="10" />
                                <vertical padding="18 8" h="auto">
                                    <linear>
                                        <Switch margin="12 0" layout_weight="1" id="autoService" text="无障碍服务" textSize="15sp" checked="{{auto.service != null}}" />
                                        <Switch margin="12 0" layout_weight="1" id="floatyService" text="悬浮窗权限" textSize="15sp" checked="{{floaty.checkPermission()}}" />
                                    </linear>
                                </vertical>
                            </horizontal>

                            <horizontal gravity="center_vertical" padding="5 5">
                                <View bg="#00BFFF" h="*" w="10"  ></View>
                                <vertical padding="10 8" h="auto" w="0" layout_weight="1">
                                    <text w="auto" textColor="#222222" textSize="14sp" text="固时收集能量" />
                                    <text w="auto" textColor="#999999" textSize="12sp" text="凌晨0:00和早晨7:00" />
                                </vertical>
                                <checkbox id="fixedTimeCollectEnergy" marginLeft="4" marginRight="6" checked="false" />
                            </horizontal>

                            <horizontal gravity="center_vertical" padding="5 5" >
                                <View bg="#00FFFF" h="*" w="10"  ></View>
                                <vertical padding="10 8" h="auto" w="0" layout_weight="1">
                                    <text w="auto" textColor="#222222" textSize="14sp" text="定时收集能量" />
                                    <text w="auto" textColor="#999999" textSize="12sp" text="时间间隔可以去隔壁设置" />
                                </vertical>
                                <checkbox id="timingCollectEnergy" marginLeft="4" marginRight="6" checked="false" />
                            </horizontal>

                            <horizontal gravity="center_vertical" padding="5 5" >
                                <View bg="#00FFFF" h="*" w="10"  ></View>
                                <vertical padding="10 8" h="auto" w="0" layout_weight="1">
                                    <text w="auto" textColor="#222222" textSize="14sp" text="检测好友的能量剩余时间" />
                                    <text w="auto" textColor="#999999" textSize="12sp" text="记录能量成熟时间，自动收集能量" />
                                </vertical>
                                <checkbox id="checkRemainingTime" marginLeft="4" marginRight="6" checked="false" />
                            </horizontal>

                            <horizontal gravity="center_vertical" padding="5 5" >
                                <View bg="#00FFFF" h="*" w="10"  ></View>
                                <vertical padding="10 8" h="auto" w="0" layout_weight="1">
                                    <text w="auto" textColor="#222222" textSize="14sp" text="检测自己的能量剩余时间" />
                                    <text w="auto" textColor="#999999" textSize="12sp" text="记录能量成熟时间，自动收集能量" />
                                </vertical>
                                <checkbox id="checkMyRemainingTime" marginLeft="4" marginRight="6" checked="false" />
                            </horizontal>

                            <horizontal gravity="center_vertical" padding="5 5" >
                                <View bg="#00FFFF" h="*" w="10"  ></View>
                                <vertical padding="10 8" h="auto" w="0" layout_weight="1">
                                    <text w="auto" textColor="#222222" textSize="14sp" text="每日签到" />
                                    <text w="auto" textColor="#999999" textSize="12sp" text="定时每天12点执行" />
                                </vertical>
                                <checkbox id="dailySignIn" marginLeft="4" marginRight="6" checked="false" />
                            </horizontal>

                            <horizontal gravity="right">
                                <button style="Widget.AppCompat.Button.Colored" id="start" text="开 始 运 行" padding="12dp" w="*" textSize="17" />
                                {/* <button style="Widget.AppCompat.Button.Colored" id="close" text="关闭线程" /> */}
                            </horizontal>
                        </vertical>
                    </scroll>
                </frame>
                {/* 第二个Frame */}
                <frame>
                    <ScrollView>
                        <vertical marginTop="5">
                            <card w="*" h="auto" margin="10 5" cardCornerRadius="2dp" cardElevation="1dp" gravity="center_vertical">
                                <button id="unlockSetting" text="解锁设置" style="Widget.AppCompat.Button.Borderless.Colored" w="*" />
                                <View bg="#4EBFDD" h="*" w="5" />
                            </card>
                            <card w="*" h="auto" margin="10 5" cardCornerRadius="2dp" cardElevation="1dp" gravity="center_vertical">
                                <button id="timingCollectSetting" text="定时设置" style="Widget.AppCompat.Button.Borderless.Colored" w="*" />
                                <View bg="#4EBFDD" h="*" w="5" />
                            </card>
                            <card id="showHide_func4" w="*" h="auto" margin="10 5" cardCornerRadius="2dp" cardElevation="1dp" gravity="center_vertical">
                                <vertical padding="18 8" marginBottom="2" h="auto">
                                    <text text="[浏览设置]" color="#FFA500" textStyle="bold" textSize="15sp" />
                                    <horizontal>
                                        <text text="每轮间隔(秒):" textStyle="bold" textSize="15sp" />
                                        <input id="输入框_每轮间隔小" text="10" color="#666666" w="80" />
                                        <text text=" - " textStyle="bold" textSize="15sp" />
                                        <input id="输入框_每轮间隔大" text="20" color="#666666" w="80" />
                                    </horizontal>
                                </vertical>
                                <View bg="#4EBFDD" h="*" w="5" />
                            </card>
                        </vertical>
                    </ScrollView>
                </frame>
                {/* 第三页*/}
                <frame>
                    <scroll>
                        <vertical>

                            <horizontal gravity="center_vertical" padding="5 5"  >
                                <View bg="#00BFFF" h="*" w="10"  ></View>
                                <vertical padding="10 8" h="auto" w="0" layout_weight="1">
                                    <text w="auto" color="#111111" size="16" text="1、需要启动无障碍服务。" />
                                    <text w="auto" color="#111111" size="16" text="2、允许app显示在其他应用的上层。" />
                                </vertical>
                            </horizontal>


                        </vertical>
                    </scroll>
                </frame>

            </viewpager>
        </vertical>
        {/* drawer */}
        <vertical layout_gravity="left" bg="#ffffff" w="280">
            <img w="280" h="200" scaleType="fitXY" src="http://images.shejidaren.com/wp-content/uploads/2014/10/023746fki.jpg" />
            <scroll>
                <list id="menu">
                    <horizontal bg="?selectableItemBackground" w="*">
                        <img w="50" h="50" padding="16" src="{{icon}}" />
                        <text textColor="black" textSize="15sp" text="{{title}}" layout_gravity="center" />
                    </horizontal>
                </list>
            </scroll>
        </vertical>
    </drawer>
);

let FunctionConstant = require('./constant/FunctionConstant.js');

let functionStorage = storages.create(FunctionConstant.FUNCTION);
let fixedTimeCollectEnergy = functionStorage.get(FunctionConstant.FIXED_TIME_COLLECT_ENERGY) || {};

let SettingConstant = require('./constant/SettingConstant.js');

let settingsStorages = storages.create(SettingConstant.SETTINGS_STORAGE);
let timingCollectSetting = settingsStorages.get(SettingConstant.TIMING_COLLECT_SETTING) || {};
let checkRemainingTimeSetting = settingsStorages.get(SettingConstant.CHECK_REMAINING_TIME_SETTING) || {};
let checkMyRemainingTimeSetting = settingsStorages.get(SettingConstant.CHECK_MY_REMAINING_TIME_SETTING) || {};
let dailySignInSetting = settingsStorages.get(SettingConstant.DAILY_SIGN_IN_SETTING) || {};

initData();
initLeftMenu();
initMonitor();
initAction();

function initLeftMenu() {
    ui.menu.setDataSource([
        { title: "更新日志", icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAC8klEQVRYR82XT2sTQRjGn3cTaG8mG28eqrATEQ8NePIiFRFURCoigohWVOxORNtP0PQTmKKZHEQoRQQtUpQigmjrBxDqRbGzYj140kziLaXpjszalDSm+bOxxDkF8s7z/N5535nZIfR4UI/90RTAFvJpN4Da1zPFW8n5ZhoNAezc5wzIugngdjcAAE4S4UjBZc52Oo0BhPyuONvTpXkwfff9L0ltrY8XeNJtpPcXwMayzyrOZv8FgNGIC7lQ5OxozwBsId8ozo71EGD5teLJ410BxPKf9qLcXwpE+suxkntgpSoYyy2nQLRri8Fq9ENpfF8Qb+flK+WyE10BJIRc1KABQBvRlOJss39sIZcADNYZjCvOsgGAkC8VZ6dCAZjsLKIrAMbqBLIW4flPly22alZbePOKO6dDASSEN6yh5wB881ejKSNi9VWM6SA0JlWaZVoBJIR8UeDsTCiAjSXUBLwrcDb0p6ZeFlrf8VejcVPnViWIC2+uyJ2zoQDsnMyAMBFM1nqMNK1oC9MAYiCaUq4zZsoUtShWa1ApR5c2m1B4zxR3zoUCiN39Gov2V1K+DkwHNkR+EWhkndaWanfDdqWw83JWuex8KIDqJFssT4OsEnxdAmFYcRb0Q7UkWustuyBCmKw2qJ2TT1SaXegKoFmjmTIRIegPM3xCKQJkNwHy3mPlOhd3DKDlLsjLRwWXXQoFkMgtj2jLHECdDb8cnao2YVzImSJnl0MB2EKaI7djANL6aiGdNI0L0z+KJ0dCAXSWd+NoOy8fKpdd6x2A8B4o7twIBWALaS6frTdde8tScxl1AdDolGvHv+4kDL8C7Zi1irG7KUEr8Xb+j+fk+2KaHQrVA+0YNIsxH6SkdR+IDsPCQTXKPtbG7+hnefC+AKDS+zOxe3LIsvwh87s1QF5OQGO07YeJBU0+VXzQGpFfIdBawXXeGqNEXnrrFVy3IliIaGI/0o7XEqAaUM0gTBlqMzU69ZlXNf/vx2mYzDud8xtjzpswrqCXXwAAAABJRU5ErkJggg==" },
        { title: "检查更新", icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAADnUlEQVRYR+2WTWgcZRjHf890k6KoTQ8F6xcRRcXWj9DubKmXFLQoRCtCg1KwTYspFrzYmJ3RwzYHs7PRXvSgCW20wQ9owWDAQ6jS3NZMElqKGkKbUhE/etBCDqE2yTwy484yHbLZ2cS2F9/bzPs8//+f//O8z/sKN3nJTebnfwE1O5Ap6DOesl3gceAJgQWFCWBShG9Hs3KylrImFmDm9RDCC0BTFYLTKEOuLYeSCEkkwCxoDiUO+AfwO+AJrFe4K0Y46FryUjURVQVkHD2p8HQIpEKf4dE3aotve3ll8rrJM2gXpT3y+xvXkpalRCwpwCxoD8pbJYApPNrct6W4FKDZoy3i0Vt2RHjdzcrHlXIWFZA+rPfKPDtQPiwlXnItubOandF909FzwIPBP+ENTfH12EH5JY5xjYDNeW0SoVMImu3WcrDS6tpyohYBfklUGI/kzCoMGcr70fKVBfjHS5VPgLujRH7Nx7KyvxbyMDbt6CmB5miuwG8Ke11Lhv81B9ic12ZDOBUJPIrBd6tSDBfflL+WQx7mPJnThvrVNCO0IrwS/veUbeO2jAQCokoNYcf3WRlaCWml3IyjHQrv+fsKI2OWbJPSgMmVkj5yLTlwPchDzExe21XoDb6VLkk7+qXAyygzri1rrid5iG06OgPcDgyK6egU8BDwo2vJxhshIO3opMAjwLSYBb2M0oBSdG3ZeiMEmI76w2yL77rvwCDwInDRteT+WgXs2pW7Y9Utc40DR7rPJs01Hf0ZuA8Y9h3IojjAVUnRNNohPyUFamuzH/UMjgMbVLVroN+pegNuyWujJ/hlrw+aMJPX7SoEQ6GWPoiSBwNFtfPTfic4Ykut2HB6NpgDpqP+uX++lHh6wWDnRKdMVwKKkyucGDiab61CvFXgc6CxFNfjWpINBDz3ga7+c5YrEYBZFT7Do4jHmbF35Ey4FyefT60ZmWrMdlUiF+EeEZ5C2RvYXloLa6mf2C9z5bugqVvX1Rt8Eb37w2BJsSHsjd37bH9kB/N95rbH+HV9ebpWcz/cn/SUlnFbLgSli2elC3pAlNf8xgLqgqCIgFf32ccFdtYo4KrCDyJ85Wbl3ShnxQfJpl6tkxkerpvnStGW88stQcrg0tw05yf6ZG4xi6o+yRZLWk4TVuyRpIWLx8VFoHL4WH93R614y3JgsXIkHURxgSsS4IPt2ZNr0NTfDxw74lzzSk7qxIoFJCX6z3tgpcRh/j9lvlrSBRsylQAAAABJRU5ErkJggg==" },
        { title: "教程", icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACsAAAAgCAYAAACLmoEDAAAD4ElEQVRYR+1YXWgcVRg9350UpQ91d5NspIhE3UmqghQS3QqKqaDQ6osgYhUK+mBxkpYWoXlRqNSH4oMVutm2YlX6WKWiD33og11FSJEGxAdLMhsLFtLuJp0NrURMM/fIXXZkMk3qTEeDlVy4cO/wfec797vn/swVhErmkDsgFp4RIG8qyS4A+VY1lnVTRaRGoG6qCL7DdYx6u+yrAVTm4IWMdcf8gIZ6NC1WmJ+YTrb8yyOA/4kAfQBOE6gJ2CSkiGltWXUsAErYQaBThJ1sDkLyAJ8DMEWo/Q3ngSO5I+5D0DgB4GEA3wBSJ/S0gqoTvEzhZYille/ntaCzmRRIlwAmMc8CuKh9bJ/daVfCRE1bug5X89fJGsCPKOr4gvLHr+3onYkaLtVff/Tc2jl9V68FeZnkXhFsJ3Ec1O9S1pxsOPf/FAcnsGkvTRSp8Dogb6wR6aq9WTAz+VeRXNn9AsBaz7G3JgGO2ubK7gmQWyHqZ88pPJYS6xSAOc+xX4yS/VUo718ZLJTSBGgvVd+m4n6A73lOzzupsEaqQxTu9Rz73ihZah+bl9JIkoCZkrtbKRzUGntmh+wPk/hGbc1CVxbOeI7dXFNBMTK4gawxjhssGGQQIDrwNFixyGbL7hkBYhEOAJcja5IRZ+AEKg3H3mxsE2U2DvhyU/ePSCqJDFbJJshAIhkYzcbFjuosKoM0WLEX2G1DNi7RsN1yu0EarFiZTRPgf70bmItUkJzg4pJ4gd3sUIhOT3gjT5rZjtJkj1Z6XEH6Z5zCWOJD4e+OyKXuEbeq2dRkV0KzweCisczMmG+xLzIrRlbpAQLtImrIXP5BXtJaNf8Q/lNkg4TcFjIIk6XSuwVy7JYW2ErI4GYxEm1dq2QTZGDZzGbLrqvI4SuDPScT4N1gmi27wwIcAPRbntP7QSqskcltInrEc+xcGEdy5YmjZsvwBnv3RQN0lKt9PtAn9NcD1m+iWKNGTc+3/TC7577ZsH1uxD0mgldJfSCK1f3phTuv/r6wkeBGIe8O/AhVb4Ocnh4sVBdjje+jqOcbjt2/iGy2XN0i4CmIfCb0vyLUUwSebL3OGNspAhMtp3sEKLTaPwKoCPS3GvK0QHaC/BIiLxA8pIgKRbZA8ASIDS2fCQJTpi2CB8HmK4wpZ0GMao2vlcVt5pEDwEueY3++iKzp5MqTrwF8BaB5nBgF9VmqtnOWssZmdnRfCjus+/hizpr/oyj0ixC1CcDjANYZgg2nZ1cIq5+QihDfa82xtjl/bGZ4w7UwVubw+W6lVRFQRShsAptYMC86S830ov/yNDpbCd9Vsv9Wlv8E0mP+P0I4oqkAAAAASUVORK5CYII=" },
        { title: "关于", icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAE3ElEQVRYR61Xa4hUZRh+3jOrK1G7M2fGtIug654xS1IqSIpCKKlMtCL3RyCx5YU940oKJmSQCxoUhOU232Sp+K/UH1mkGRiKGV0oumDFzhnTMipx58xgCO26c574zjmj42Vmzkrn38z3vO/7fO/9E0T8EluOtRuet4DkQoF0EEgBkgzEWRRgkEBePG+nnOWBwbW3/BNFtTQDJbP56RDpJfAUgPZm+PC8JMB7IPuLmfQvjWQaEkjk8huE0gugLVRyBsAXAhwmcYpi/K3/F3oTRTCB4D0QmQtibBVPYX+pJ/1iPRJ1CZjK2QVgkS8o8qlHbi6nhvaja8Zwoxu1bT1pxoaHngS4TIA7wxB95trp+68kd0UCpiocBzg5FFjq2tbWiK6/CJZQhWUCbglJDLp2evylei4jYKr8aUBSfmohNrNkd/x4NcarMglVeETAfcFvOeHanVNq9V1EwFT5w4DcpwGubTVN0NEQM5XDEL/bta2uqux5I2HCrQtuLvNKdufHUQyYbzm3soI59PBzudc6VE8moX69XVD5wdcv3FhNTJ+ALjWKfBlme+SYj88evbYirVruNt8wvT43M219PRKmcpYAeAfAGSFn6xINCChHEejR2e72dD4Y5eYaE+935hgxHLyAp+va6bA5XVmLmSscAPmAALmibdk+AVM5vwOY5AELy7b1YVQC120ZSI2pGKfP40V2uD2d3Y3k48pZYAAfAPjTta2bJJ49PsuQke8AlN1TQxPQ17jOL1VuKmeRAIsJDrh2ek1T8ruOjjUHWzXpNhHvbknmCitJvkHInpLd+XhTBf8DwFTOfgAPgVgtZtbZBsEzAqwr2tbLo9Xf/qZzhxBtjSrgUp1J5bxAYCOI7WIq5wiAe0EscTPWtqgEJuQK1w97XAXBKgFam1VArV4z6zwLge6un2sCOh4pwphfsqfujUIgofKbBaJ7+8wafJdrW7ujyR97VOB9BGBw1AT8IUW2VCqyJtaCQtWgERtz4+DyyX+NhgCJ01cdgnY10BGDcSzonPi2ZFt3RTHul30YAgKHrjoJE+q8G5t2wHpJSELpMlxBsh/gXtdOz496i4QqrBHw1aAFjy6Bq2UoZLfoYQIPP0EwPDJm3A1nlkxyo5Aws/m9EJnnYwUPuz3WJ4lcYQb/jf1RXjWlXFdHTSPyZGRKtRUf1QOFkOUlu/PtSASUcw5AS0BAdoDeOAF3Fu1pexrJJ9XAY4TxPsiv3Ex6djgNC+so3BA1mXQPOEeeqjVEcm0pkw5CUueLbzoeN1pH9PCaVb1s4IHNThtaoMfq9CheiGfzswwRrSgOcICM9ZUyU99t5jlTOZsAPFd70ZqFxOkRQgU51Xwh0aNYY6O2YFPluwHZ7keM7C5m0juC9Kn5ajfh/3MlM5UzG4AeQPpdsdW1raVVs5cvpVnnJAQ3R/VEM7fr84RyDgqgPfa158W6yis6fqtLIBT45sJOj9e9oZa+hqXVhIWZHVgPMV4KLsX+kp1e2ZCAPkzmCq+QfD4Efi/w+oqpc/uaPUzqcTGVsxrAa+H5bncEi7HSGmq4eiez+Sc8kd7QfVr2sqcZK97ZKGHwE67Fmyg0gmohj1SET0fa/f1tVtAFYm5UY1Fw/jCKAqxizGxhkgALabCDREpEkiSvGY2OWqyInPgPdzcwBtuCmgYAAAAASUVORK5CYII=" },
        { title: "退出", icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAADd0lEQVRYR+2XS4hcRRSGv7o9pnHR4/TtnoVBhJDUBE2UiLrxEaISV+LCx+DaxBiqJxGi4iNrxQhGzKTLCYLiwoWOsxIRA5r4wo34IFEmXRnduFFmqmOycYaZKqmem9jT3u7b3bZkY8GFpuucU9/969SpcwWXeYjLvD59A8TarAR4W168kvGtS/2+yL8B8AlA/j8DKGmjF5RUaW8Xa9MRoKhrR+pqbH+WMqkKFI/NXcuKe1vADqtkqk1Jmz895G15MVWBBPBjrmC3fUz+2g4kNXiszSfA3UDNKrk5zbkLgNPAFuBTq+Q9XQMUtXlGwEvABbfC/ef2yZN9AUyZ63G8FyA8PFtX8lBanDUKjFR/2RaJ5c+BAvhHrRp7qx15lgLBb+R1c1PkCfG880Pbz1U2fN8abw1ArM0rwAFg2io53imBugEI/iVtnvPwInDYKvlkW4Dhw6fjofy6UwixPoqiW+f3bvxmEAAhRlyt/QzklxeXbjh/YKttjntJgWLVKCGoAu9aJR/JOj7dKtAA0OYNYLf3VOoVqVMBYl07BmKPJ7qvrjZ+OEiAkUmzI8pxAs+btiJ3pSugzYlw7kVu6LqFxzfMZgFkFaJm//LRuTEXuTPAV1bJO9ptwe9CMBrlR4bnd41eGCjAodmCK+TOA/NWydE2W2CCQYFlrrL7ZfjdccTaLCZ3QSHrLoiPmGGG+CPUFqvkcDuAINEYEVvsXvlTFkAv8/FqUfoxrbL+fQqSHADGrZLTvSyQZVuq1h7wQsx4OFlX8q5UBUraVDwc7aYIZS3YOl+smkkhmBBwcEHJUJQujSYFZm8U5H5ozDhusxPy614XSrNP9v8zYFtagWstxe8DDw5ShVjXXgbxNDBjlXyoFXINQFGfuVMQhcsDvHjKVjaFu6HvEU/VduLE8UY43Pa62vxFR4AwGToZgdjXOGJtmpFuiS4Wq3AZ1ZU8mOaX3hFpYwRsShx6PhWxNg9DoxcI4x/VLzUJW+libb4Ebk/+n8bxalZilvXZmx1uT7hTVmXnbF1J2Umxjl1xUZsXBDzfFOAjL3hHCL5jidU+bx3X4BqtV3jr8KymEH6y76a0mThJzCeS09HN9s943GtpCdd1DqQZlqfmbvHO3etgp4D1wNWAEILfvG88H+Q8x+cn5LfdUF606fvDpJdF+s6BQS3yP0AnBf4C4vh6MKas2UAAAAAASUVORK5CYII=" }
    ]);

    ui.menu.on("item_click", item => {
        switch (item.title) {
            case "更新日志":
                toast("待完善···");
                break;
            case "检查更新":
                toast("待完善···");
                break;
            case "教程":
                toast("待完善···");
                break;
            case "关于":
                dialogs.build({
                    title: "关于",
                    positive: "确定",
                    items: ["蚂蚁森林纯属个人爱好，如果涉及到侵权请通知作者，作者会尽快解决相应问题。作者邮箱：237106102@qq.com"]
                }).on("show", (dialog) => { }).show();
                break;
            case "退出":
                ui.finish();
                break;
        }
    });

    //让工具栏左上角可以打开侧拉菜单
    ui.toolbar.setupWithDrawer(ui.drawer);
}

/**
 * 初始化UI和数据
 */
function initData() {
    //设置滑动页面的标题
    ui.viewpager.setTitles(["首页", "配置", "说明"]);
    //让滑动页面和标签栏联动
    ui.tabs.setupWithViewPager(ui.viewpager);
    activity.setSupportActionBar(ui.toolbar);

    //创建选项菜单(右上角)
    ui.emitter.on("create_options_menu", menu => {
        menu.add("运行日志");
        menu.add("关于");
    });

    //#region 固时收集
    if (fixedTimeCollectEnergy.enabled == true) {
        ui.fixedTimeCollectEnergy.setChecked(fixedTimeCollectEnergy.enabled)
    }
    //#endregion

    //#region 定时收集
    if (timingCollectSetting.enabled == true) {
        ui.timingCollectEnergy.setChecked(timingCollectSetting.enabled)
    }
    //#endregion

    //#region 检测好友的剩余时间
    if (checkRemainingTimeSetting.enabled == true) {
        ui.checkRemainingTime.setChecked(true)
    }
    //#endregion

    //#region 检测我的能量剩余时间
    if (checkMyRemainingTimeSetting.enabled == true) {
        ui.checkMyRemainingTime.setChecked(true)
    }
    //#endregion

    //#region 每日签到
    if (dailySignInSetting.enabled) {
        ui.dailySignIn.setChecked(true)
    }
    //#endregion
}

/**
 * 初始化监听
 */
function initMonitor() {
    //监听选项菜单点击
    ui.emitter.on("options_item_selected", (e, item) => {
        switch (item.getTitle()) {
            case "运行日志":
                app.startActivity("console");
                break;
            case "关于":
                alert("关于", "仅供娱乐");
                break;
        }
        e.consumed = true;
    });

    // 当用户回到本界面时，resume事件会被触发
    ui.emitter.on("resume", function () {
        // 此时根据无障碍服务的开启情况，同步开关的状态
        ui.autoService.checked = auto.service != null;
        //同步悬浮窗权限按钮
        ui.floatyService.checked = floaty.checkPermission();
    });
}

/**
 * 初始化事件
 */
function initAction() {
    // 用户勾选无障碍服务的选项时，跳转到页面让用户去开启
    ui.autoService.on("check", function (checked) {
        if (checked && auto.service == null) {
            app.startActivity({
                action: "android.settings.ACCESSIBILITY_SETTINGS"
            });
        }
        if (!checked && auto.service != null) {
            auto.service.disableSelf();
        }
    });

    // 用户勾选悬浮窗的选项时，跳转到页面让用户去开启
    ui.floatyService.on("check", function (checked) {
        if ((checked && !floaty.checkPermission()) || (!checked && floaty.checkPermission())) {
            app.startActivity({
                packageName: "com.android.settings",
                className: "com.android.settings.Settings$AppDrawOverlaySettingsActivity",
                data: "package:" + context.getPackageName(),
            });
        }
    });

    //#region 开始脚本按钮
    ui.start.on("click", function () {
        //程序开始运行之前判断无障碍服务
        if (auto.service == null) {
            toast("请先开启无障碍服务！");
            return;
        }

        //防止重复启动脚本
        let count = 0;

        engines.all().forEach(i => {
            if (files.getName(i.getSource()) == "AntForest.js") {
                count++;
            }
        })

        if (count != 0) {
            toast("AntForest已有实例运行");
        } else {
            //开启脚本
            threads.start(function () {
                engines.execScriptFile("./AntForest.js");
            });
        }
    });
    //#endregion

    //#region 固时收集
    ui.fixedTimeCollectEnergy.on("check", (checked) => {

        if (checked) {
            cancelFixedTimeTask();

            let earlyMorningTask = $timers.addDailyTask({
                path: files.cwd() + "/AntForest.js",
                time: "0:00"
            });

            let morningTask = $timers.addDailyTask({
                path: files.cwd() + "/AntForest.js",
                time: "7:00"
            });

            fixedTimeCollectEnergy = {
                enabled: true,
                earlyMorningTaskId: earlyMorningTask.id,
                morningTaskId: morningTask.id
            }

            functionStorage.put(FunctionConstant.FIXED_TIME_COLLECT_ENERGY, fixedTimeCollectEnergy);
        } else {
            cancelFixedTimeTask();
        }

        function cancelFixedTimeTask() {
            if (fixedTimeCollectEnergy.earlyMorningTaskId) {
                $timers.removeTimedTask(fixedTimeCollectEnergy.earlyMorningTaskId);
            }

            if (fixedTimeCollectEnergy.morningTaskId) {
                $timers.removeTimedTask(fixedTimeCollectEnergy.morningTaskId);
            }

            fixedTimeCollectEnergy = {
                enabled: false,
                earlyMorningTaskId: null,
                morningTaskId: null
            }

            functionStorage.put(FunctionConstant.FIXED_TIME_COLLECT_ENERGY, fixedTimeCollectEnergy);
        }
    })
    //#endregion

    //#region 定时收集
    ui.timingCollectEnergy.on("check", (checked) => {
        if (checked) {
            cancelTask();

            let intervals = timingCollectSetting.intervals || 60;

            let nextTime = new Date().getTime() + intervals * 60 * 1000;
            nextTime = new Date(nextTime);

            let task = $timers.addDisposableTask({
                path: files.cwd() + "/modules/TimingCollectTask.js",
                date: format(nextTime, "yyyy-MM-ddThh:mm"),
            })

            timingCollectSetting.enabled = true;
            timingCollectSetting.taskId = task.id;

            settingsStorages.put(SettingConstant.TIMING_COLLECT_SETTING, timingCollectSetting);
        } else {
            cancelTask();
        }

        function cancelTask() {
            if (timingCollectSetting.taskId) {
                $timers.removeTimedTask(timingCollectSetting.taskId);
            }

            timingCollectSetting.enabled = false;
            timingCollectSetting.taskId = null;

            settingsStorages.put(SettingConstant.TIMING_COLLECT_SETTING, timingCollectSetting);
        }
    })
    //#endregion

    //#region 检测好友的剩余时间
    ui.checkRemainingTime.on("check", (checked) => {
        checkRemainingTimeSetting.enabled = checked;

        settingsStorages.put(SettingConstant.CHECK_REMAINING_TIME_SETTING, checkRemainingTimeSetting)
    })
    //#endregion

    //#region 检测我的能量剩余时间
    ui.checkMyRemainingTime.on("check", (checked) => {
        if (checked) {
            try {
                $plugins.load("com.hraps.ocr");
                settingsStorages.put(SettingConstant.CHECK_MY_REMAINING_TIME_SETTING, { enabled: true })
            } catch (error) {
                alert("OCR插件未安装~", "此功能需要自行安装插件才可使用，下载地址：https://wws.lanzoux.com/iduulmofune，提取码：habv");
                ui.checkMyRemainingTime.setChecked(false);
            }
        } else {
            settingsStorages.put(SettingConstant.CHECK_MY_REMAINING_TIME_SETTING, { enabled: false })
        }
    })
    //#endregion

    //#region 每日签到
    ui.dailySignIn.on("check", (checked) => {
        if (checked) {
            deleteTask();

            let task = $timers.addDailyTask({
                path: files.cwd() + "/modules/DailySignIn.js",
                time: "12:00"
            });

            settingsStorages.put(SettingConstant.DAILY_SIGN_IN_SETTING, { enabled: true, taskId: task.id })
        } else {
            deleteTask();
        }

        function deleteTask() {
            if (dailySignInSetting.enabled) {
                $timers.removeTimedTask(dailySignInSetting.taskId);
            }

            settingsStorages.put(SettingConstant.DAILY_SIGN_IN_SETTING, {});
        }
    })
    //#endregion

    //#region 设置ui界面跳转
    ui.unlockSetting.click(() => {
        engines.execScriptFile("./ui/ui-unlock.js", { path: files.path("./ui") });
    })

    ui.timingCollectSetting.click(() => {
        engines.execScriptFile("./ui/ui-timingCollect.js", { path: files.path("./ui") });
    })
    //#endregion
}

//两次才能返回
threads.start(function () {
    var isCanFinish = false;
    var isCanFinishTimeout;
    ui.emitter.on("back_pressed", e => {
        if (!isCanFinish) {
            isCanFinish = true;
            isCanFinishTimeout = setTimeout(() => {
                toast("再按一次退出应用");
                isCanFinish = false;
            }, 800);
            e.consumed = true;
        } else {
            clearTimeout(isCanFinishTimeout);
            e.consumed = false;
        };
    });

    setInterval(() => { }, 5000)
});

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