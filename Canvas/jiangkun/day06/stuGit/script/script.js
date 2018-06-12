(function () {

    // .container
    var nodes = document.querySelectorAll( '.container' );

    if ( !nodes.length ) return;

    var container = nodes[ 0 ];

    var cas = document.createElement( 'canvas' );
    cas.width = 600;
    cas.height = 400;

    var ctx = cas.getContext( '2d' );

    ctx.arc( 300, 200, 10, 0, 2 * Math.PI );

    ctx.fillStyle = 'pink';  
    ctx.fill();

    container.appendChild( cas );


})();