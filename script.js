$(".login").click(function(){
    let message = $(".usernameform-control").val();
    alert(message);
    $("h2").text(message);
    
});

