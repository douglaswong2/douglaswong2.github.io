$(document).ready(function(){
    $("#link_about").click(function(){
        $("#page__content").load("about.txt", function(responseTxt, statusTxt, xhr){
            if(statusTxt == "error")
                $("#page__content").text("Error: " + xhr.status + ": " + xhr.statusText);
        });
    });    
    $("#link_blog").click(function(){
        $("#page__content").load("blog.txt", function(responseTxt, statusTxt, xhr){
            if(statusTxt == "error")
                $("#page__content").text("Error: " + xhr.status + ": " + xhr.statusText);
        });
    });
});
