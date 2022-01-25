$(function(){
    $('.important').click(function(){
        $(this).css({color:'#fffacd'});
    });
    $('.menu-btn a').mouseover(function(){
        $(this).css({color:'#fffacd', textDecoration:'underline', textDecorationPosition:'under'});
    }).mouseout(function(){
        $(this).css({color:'#fff', textDecoration:'none'});
    });
    //------------------------
});