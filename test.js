
let keyguard_manager = context.getSystemService(context.KEYGUARD_SERVICE);
console.log(keyguard_manager.isKeyguardLocked());

setInterval(() => {
    console.log(keyguard_manager.isKeyguardLocked());
}, 1000)