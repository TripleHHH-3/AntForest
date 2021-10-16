// log($timers.addDailyTask({
//     path: files.cwd() + "/Test.js",
//     time: new Date(0, 0, 0, 19, 59, 0),
// }));

log($timers.addDisposableTask({
    path: files.cwd() + "/Test.js",
    date: "2021-10-16T17:13"
}));

let tasks =$timers.queryTimedTasks({})


tasks.forEach(t => {
    console.log("删除: ", t);
    // log($timers.removeTimedTask(t.id));
});

// let a = $timers.getTimedTask(15);
// console.log(a);
// a.scheduled = true
// a.start();