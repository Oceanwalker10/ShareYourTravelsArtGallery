/* add code here */
document.addEventListener("DOMContentLoaded", function() {
    var thumbnails = document.getElementById("thumbnails");

    thumbnails.addEventListener("click", function(e) {
       // display origian image
        var imglink = e.target.getAttribute("src");
        var title = e.target.getAttribute("title");
        var newimglink = imglink.replace("small", "medium");
        document.querySelector("#featured img").src = newimglink;
        document.querySelector("#featured img").title = title;
        document.querySelector("#featured figcaption").innerHTML = title;
    });
    
    var image = document.getElementById("featured");
    image.addEventListener("mouseover", function() {
        document.querySelector("#featured figcaption").style.opacity = "0.8";
        document.querySelector("#featured figcaption").style.transition = "opacity 1s";
    });
    
    image.addEventListener("mouseout", function() {
        document.querySelector("#featured figcaption").style.opacity = "0";
    });
});
