var checkDOMReady = setInterval(function() {

/*VAR IMAGENS PASSANDO*/ 
var image1 = document.getElementById("image-1");
/*VAR RADIOS*/
var radio1 = document.getElementById("radio-1");
var radio2 = document.getElementById("radio-2");
var radio3 = document.getElementById("radio-3");
var radio4 = document.getElementById("radio-4");

if (radio1.checked) {
    image1.style.marginLeft = "0%";
}else if (radio2.checked){
    image1.style.marginLeft = "-100%";
}else if (radio3.checked){
    image1.style.marginLeft = "-200%";
}else if (radio4.checked){
    image1.style.marginLeft = "-300%";
}
setTimeout(function() {
    
    }, 4000);
}, 100);