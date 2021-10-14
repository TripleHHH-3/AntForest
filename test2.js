// log($timers.addDailyTask({
//     path: files.cwd() + "/Test.js",
//     time: new Date(0, 0, 0, 19, 59, 0),
// }));

// log($timers.addDisposableTask({
//     path: files.cwd() + "/Test.js",
//     date: new Date(2021, 10, 14, 19, 17, 0),
//     scheduled: true
// }));

let tasks =$timers.queryTimedTasks({})


tasks.forEach(t => {
    console.log("删除: ", t);
    // log($timers.removeTimedTask(t.id));
});

// let a = $timers.getTimedTask(15);
// console.log(a);
// a.scheduled = true
// a.start();