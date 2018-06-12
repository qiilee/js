
NProgress.start();

NProgress.done();

// 导航交互
$('.navs ul').prev('a').on('click', function () {
	$(this).next().slideToggle();
});

// 更新个人资料
$('#userForm').on('submit', function () {
    // 获取表单数据
    var _this = $(this),
        formData = _this.serialize();

    // 提交数据
    $.ajax({
        url: '/admin/update',
        type: 'post',
        data: formData,
        success: function (info) {
            
            alert(info.msg);
        }
    })

    return false;
});

// 使用ckeditor创建富文本编辑器
CKEDITOR.replace('ckeditor');

// 添加文章
$('#addPost').on('submit', function () {
    // 富文本编辑器内容，没有及时更新到
    // 表单textarea中，手动进行更新设置
    for(instance in CKEDITOR.instances) {
        CKEDITOR.instances[instance].updateElement();
    }

    // 获取表单数据
    var _this = $(this),
        formData = _this.serialize();

    // 提交表单
    $.ajax({
        url: '/admin/addpost',
        type: 'post',
        data: formData,
        success: function (info) {
            alert(info.msg);
            // 成功后跳转到文章列表
            if(info.code == 10000) {
                location.href = '/admin/list';
            }
        }
    });

    return false;
});