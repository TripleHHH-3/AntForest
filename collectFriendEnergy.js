const path = "./AntForest/"

require(path + 'Crack.js').unfreeze();

let friendList = className("android.webkit.WebView").findOne().child(2)

friendList.children().forEach(friend => {
    
    log(friend.child(3).bounds())
})