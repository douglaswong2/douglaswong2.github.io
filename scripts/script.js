$(document).ready(function(){
    $("#link_about").click(function(){
        $("#page__content").load("about.txt", function(responseTxt, statusTxt, xhr){
            if(statusTxt == "error")
                $("#page__content").text("Error: " + xhr.status + ": " + xhr.statusText);
        });
        $("#page__title").text("Who am I?");
    });    
    $("#link_photos").click(function(){
        $("#page__content").load("photos.txt", function(responseTxt, statusTxt, xhr){
            if(statusTxt == "error")
                $("#page__content").text("Error: " + xhr.status + ": " + xhr.statusText);
        });        
        $("#page__title").text("Photos");
    });  
    $("#link_img1").click(function(){
        $("#page__content").text('Hello World!');
        $("#page__title").text("Little Cat");
    });
});
