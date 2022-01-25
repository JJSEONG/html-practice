$(function(){
    $('.important').click(function(){
        $(this).css({color:'#fffacd'});
    });
    $('.menu-btn a').mouseover(function(){
        $(this).css({color:'#fffacd', textDecoration:'underline', textDecorationPosition:'under'});
    }).mouseout(function(){
        $(this).css({color:'#fff', textDecoration:'none'});
    });
    $('#yesbtn').mouseover(function(){
        $('#yesbtn span').text("Good Choice!");
    }).mouseout(function(){
        $('#yesbtn span').text("Y E S");
    });
    $('#nobtn').mouseover(function(){
        $('#nobtn span').text("Really?");
    }).mouseout(function(){
        $('#nobtn span').text("N O");
    });
    //------------------------
});