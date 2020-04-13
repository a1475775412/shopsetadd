function auto_grow(element) {
    element.style.height = "5px";
    element.style.height = (element.scrollHeight)+"px";
}

function onload() {
    auto_grow(document.getElementById("result"));
}

function generate() {
    subject = document.getElementById("subject").value;
    event = document.getElementById("event").value;
    event2 = document.getElementById("event2").value;
    if (subject.length==0 || event.length==0 || event2.length==0)
        return;
    result = `　　${subject}${event}是怎么回事呢？${subject}相信大家都很熟悉，但是${subject}${event}是怎么回事呢，下面就让小编带大家一起了解吧。\r\n　　${subject}${event}，其实就是${event2}，大家可能会很惊讶${subject}怎么会${event}呢？但事实就是这样，小编也感到非常惊讶。\r\n　　这就是关于${subject}${event}的事情了，大家有什么想法呢，欢迎在评论区告诉小编一起讨论哦！`;
    document.getElementById("result").value = result;
    auto_grow(document.getElementById("result"));
}