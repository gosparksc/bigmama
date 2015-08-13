var img = new Image();
src = '/video/spark.gif';
img.src=src;
setInterval(function(){
    t=new Date().getTime();
    $("#gif").attr("src", src + "?" + t);
}, 7500);

if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    console.log("HEY");
    $('#gif').css('display', 'block');
    $('video').css('display', 'none');
}