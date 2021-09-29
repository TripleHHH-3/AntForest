let SysConstant = require('./SysConstant.js');

function EnergyBall() {
}
EnergyBall.MAX_RADIUS = SysConstant.DEVICE_WIDETH / 8 / 2
EnergyBall.MIN_RADIUS = SysConstant.DEVICE_WIDETH / 10 / 2
EnergyBall.REGION_Y = SysConstant.DEVICE_HEIGHT * 0.2
EnergyBall.REGION_H = SysConstant.DEVICE_HEIGHT * 0.3


module.exports = EnergyBall;