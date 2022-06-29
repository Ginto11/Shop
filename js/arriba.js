$(document).ready(function(){

    $(".ir__arriba").click(function(){
        $("body, html").animate({
            scrollTop: "0px"
        },300);
    });

    $(window).scroll(function(){
        if( $(this).scrollTop() > 100){
            $(".ir__arriba").slideDown(300);
        } else{
            $(".ir__arriba").slideUp(300);
        }
    });
});
