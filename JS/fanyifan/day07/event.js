function on(ele,type,fn){
    if(!ele['selfEvent'+type]){
        ele['selfEvent'+type]=[];
    }
    var selfEvent = ele['selfEvent'+type];
    for(var i =0;i<selfEvent.length;i++){
        console.log(1)
        if(selfEvent[i]===fn){
            return;
        }else{
            selfEvent.push(fn)
        }
    }
    ele.onclick=trigger;
}


function trigger(e){
    var ele = e.srcElement;
    var type = e.type;
    var selfEvent=ele['selfEvent'+type];
    for(var i=0;i<selfEvent.length;i++){
        if(selfEvent[i]){
            console.log(1)
            selfEvent[i].call(ele,e)
        }
    }
}