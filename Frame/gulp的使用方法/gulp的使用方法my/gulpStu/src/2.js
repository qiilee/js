I( '<table width="400" border="1"><tbody>' + I.map( datas, function ( item ) {  // 项
        return '<tr>' + I.map( item, function ( v, k ) {
            return '<td>' + v + '</td>';
        }).join( '' ) + '</tr>';
    }).join( '' ) + '</tbody></table>' ).appendTo( '#container' );


    // 鼠标事件
    I( '#container tr' ).on( 'mouseover', function () {
        this.style.backgroundColor = 'yellow';
    }).mouseout(function () {
        this.style.backgroundColor = '';
    });


    // 鼠标以上以下两种颜色
    I( '#container > table > tbody > tr' ).mouseover(function () {
        I( this ).prevAll().each(function () {
            this.style.backgroundColor = 'red';
        }).end().nextAll().each( function () {
            this.style.backgroundColor = 'green';
        });
    }).mouseout(function () {
        I( this ).each(function () {
            this.style.backgroundColor = '';
        }).siblings().each(function () {
            this.style.backgroundColor = '';
        });

        // I( this ).parent().children()
    });