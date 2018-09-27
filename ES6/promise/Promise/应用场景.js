function fn1(resolve, reject) {
    setTimeout(function() {
        // console.log('步骤一：执行');
        resolve('1');
    },500);
}

function fn2(resolve, reject) {
    setTimeout(function() {
        // console.log('步骤二：执行');
        resolve('2');
    },100);
}

new Promise(fn1).then(function(val){
    
    console.log(val);
    return new Promise(fn2);
}).then(function(val){
    console.log(val);
    return 33;
}).then(function(val){
    console.log(val);
});