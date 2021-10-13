let a = engines.execScript("hello world", "toast('hello world')", { loopTimes: 2, interval: 2000 });
sleep(500)
let b = a.getEngine();
console.log("1"+b);
sleep(3000)
console.log(b.isDestroyed());