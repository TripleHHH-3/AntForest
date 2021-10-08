// "ui";

// ui.layout(
//     <vertical>
//         <appbar>
//             <toolbar title="蚂蚁森林" />
//         </appbar>
//         <Switch id="autoService" text="无障碍服务" checked="{{auto.service != null}}" padding="8 8 8 8" textSize="15sp" />
//         <frame height="200" gravity="center">
//             <text text="相关配置..." gravity="center" />
//         </frame>
//         <frame height="200" gravity="center">
//             <text text="相关配置2..." gravity="center" />
//         </frame>
//         <button id="start" text="开始运行" />
//     </vertical>
// );

"ui";

ui.layout(
    <vertical>
        <appbar>
            <toolbar title="蚂蚁森林" />
        </appbar>
        <card w="*" h="70" margin="10 5" cardCornerRadius="2dp"
            cardElevation="1dp" gravity="center_vertical">
            <vertical padding="18 8" h="auto">
                <Switch id="autoService" text="无障碍服务" checked="{{auto.service != null}}" padding="8 8 8 8" textSize="15sp" />
            </vertical>
            <View bg="#f44336" h="*" w="10" />
        </card>
        <card w="*" h="70" margin="10 5" cardCornerRadius="2dp"
            cardElevation="1dp" gravity="center_vertical">
            <vertical padding="18 8" h="auto">
                <text text="修复ui模式的Bug" textColor="#222222" textSize="16sp" />
                <text text="无限期" textColor="#999999" textSize="14sp" />
            </vertical>
            <View bg="#ff5722" h="*" w="10" />
        </card>
        <card w="*" h="70" margin="10 5" cardCornerRadius="2dp"
            cardElevation="1dp" gravity="center_vertical">
            <vertical padding="18 8" h="auto">
                <text text="发布Auto.js 5.0.0正式版" textColor="#222222" textSize="16sp" />
                <text text="2019年1月" textColor="#999999" textSize="14sp" />
            </vertical>
            <View bg="#4caf50" h="*" w="10" />
        </card>
        <card w="*" h="70" margin="10 5" cardCornerRadius="2dp"
            cardElevation="1dp" gravity="center_vertical">
            <vertical padding="18 8" h="auto">
                <text text="完成毕业设计和论文" textColor="#222222" textSize="16sp" />
                <text text="2019年4月" textColor="#999999" textSize="14sp" />
            </vertical>
            <View bg="#2196f3" h="*" w="10" />
        </card>
        <button id="start" text="开始运行" />
    </vertical>
);