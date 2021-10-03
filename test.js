function test() {
}

test.c = "c";

test.a = function () {
    console.log("a");
}

test.b = function () {
    test.a();
    console.log(test.c);
}

test.b();