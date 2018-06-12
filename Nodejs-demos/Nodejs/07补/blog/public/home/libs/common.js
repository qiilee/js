
// 写前台业务逻辑

// 注册
$('#registerForm').on('submit', function () {

    // name sex pass email phone company homepage
    // alt avatar
    // 获取表单数据
    var _this = $(this),
        formData = _this.serialize();

    // 发送请求
    $.ajax({
        url: '/register',
        type: 'post',
        data: formData,
        beforeSend: function () {
            // 
        },
        success: function (info) {
            
            alert(info.msg);
            // 跳转到登录页
            if(info.code == 10000) {
                location.href = '/login';
            }
        }
    });

    // 禁止表单的默认提交
    // 使用ajax提交有助于用户体验
    return false;
});

// 登录
$('#loginForm').on('submit', function () {
    // email pass
    // 获取表单数据
    var _this = $(this),
        formData = _this.serialize();

    // 提交数据
    $.ajax({
        url: '/login',
        type: 'post',
        data: formData,
        success: function (info) {

            alert(info.msg);
            // 登录成功后跳转到后台首页
            if(info.code == 10000) {
                location.href = '/admin';
            }
        }
    });

    return false;
})