// let a = null;
// let b = undefined;

// console.log(a != null);
// console.log(b != null);
// console.log(a != undefined);
// console.log(b != undefined);
// let functionStorage = storages.create("function");
// let fixedTimeCollectEnergy = functionStorage.get("fixedTimeCollectEnergy");

// console.log(fixedTimeCollectEnergy);


// let c = new Date()
// // let d=c.toLocaleTimeString()
// // console.log(d);

// let e = c.getTime() + 60 * 60 * 1000


// let f = new Date(e)
// console.log(f);

// let g = f.toLocaleTimeString()

// console.log(f.getHours() + ":" + f.getMinutes());




// Date.prototype.format = function(fmt) { 
//     var o = { 
//        "M+" : this.getMonth()+1,                 //月份 
//        "d+" : this.getDate(),                    //日 
//        "h+" : this.getHours(),                   //小时 
//        "m+" : this.getMinutes(),                 //分 
//        "s+" : this.getSeconds(),                 //秒 
//        "q+" : Math.floor((this.getMonth()+3)/3), //季度 
//        "S"  : this.getMilliseconds()             //毫秒 
//    }; 
//    if(/(y+)/.test(fmt)) {
//            fmt=fmt.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length)); 
//    }
//     for(var k in o) {
//        if(new RegExp("("+ k +")").test(fmt)){
//             fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));
//         }
//     }
//    return fmt; 
// }

// var time1 = f.format("yyyy-MM-ddThh:mm")

// console.log(time1);


// let a=new Date()
// console.log(a);

// a.setHours(23);
// console.log(a);

// let b=new Date()
// console.log(a==b);

let a=files.path("./")
console.log(a);