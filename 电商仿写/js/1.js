window.onload = function() {
    var xx = document.getElementById("xx");
    var Advertisement = document.getElementById("Advertisement");
    var one = document.getElementById("one");
    var box = document.getElementById("box");
    var box2 = document.getElementById("box2");
    var box3_1 = document.getElementById("box3_1");
    var two = document.getElementById("two");
    var prev = document.getElementById("prev");
    var next = document.getElementById("next");
    var prev1 = document.getElementById("prev1");
    var next1 = document.getElementById("next1");
    var prev2 = document.getElementById("prev2");
    var next2 = document.getElementById("next2");

    var now = document.getElementById("now");
    var nan = document.getElementById("nan");
    var clo_2_2 = document.getElementById("clo_2_2");
    var menWear = document.getElementById("menWear");

    var on = document.getElementById("two").getElementsByTagName("li");
    var index = 1;
    var timer;
    //手动点播
    function a(off) {
        var newTop = parseInt(one.style.top) + off;
        one.style.top = newTop + "px";
        if(newTop<-1816){
            one.style.top = 0 + "px";
        }
        if(newTop>0){
            one.style.top = -1816 + "px";

        }
    }
    prev.onclick = function () {
        index -= 1;
        if(index < 1){
            index = 5;
        }
        onShow();
        a(454);
    }
    next.onclick = function () {
        index += 1;
        if(index > 5){
            index = 1;
        }
        onShow();
        a(-454);
    }

  //今日推荐
    function b(offf) {
        var newLeft = parseInt(box2.style.left) + offf;
        // var newLeft = parseInt(box2.style.left) + Math.ceil(( parseInt(box2.style.left) - offf)/10);
        box2.style.left = newLeft + "px";
        if(newLeft<-3024){
            box2.style.left = 0 + "px";
        }
        if(newLeft>0){
            box2.style.left = -3024 + "px";

        }
    }
    prev1.onclick = function () {
        b(252);
    }
    next1.onclick = function () {
        b(-252);
    }
    function play1() {
        timer = setInterval(function () {
            next1.onclick()
        }, 3000)
    }
    play1();
    //今日推荐

    //服装
    function c(offff) {
        var newLeft = parseInt(box3_1.style.left) + offff;
        box3_1.style.left = newLeft + "px";
        if(newLeft<-886){
            box3_1.style.left = 0 + "px";
        }
        if(newLeft>0){
            box3_1.style.left = -886 + "px";

        }
    }
    prev2.onclick = function () {
        c(443);
    }
    next2.onclick = function () {
        c(-443);
    }
    function play2() {
        timer = setInterval(function () {
            next2.onclick()
        }, 3000)
    }
    play2();
    //服装



    //重复执行的定时器
    function play() {
        timer = setInterval(function () {
            next.onclick()
        }, 5000)
    }
    play();

    //想仔细看某一张图片时候，要把图片停住
    function stop() {
        clearInterval(timer);
    }
    box.onmouseover = stop;
    box.onmouseout = play;

    function onShow() {
        for(var i = 0;i < on.length; i++){
            if(on[i].className = "on"){
                on[i].className = "";
            }
        }
        on[index - 1].className = "on";
    }

    xx.onmousedown = function () {
        Advertisement.style.display = 'none';
    };

    nan.onmouseover = function () {
        clo_2_2.style.display = 'none';
        menWear.style.display = 'block';
        nan.style.border = '2px solid red';
        now.style.border = 'none';
    };

    now.onmouseover = function () {
        clo_2_2.style.display = 'block';
        menWear.style.display = 'none';
        nan.style.border = 'none';
        now.style.border = '2px solid red';
    };


}
