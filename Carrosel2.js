var global = 1;

/*VAR IMAGENS PASSANDO*/ 
var image1 = document.getElementById("image-1");

/*VAR RADIOS*/
var radio1 = document.getElementById("radio-1");
var radio2 = document.getElementById("radio-2");
var radio3 = document.getElementById("radio-3");
var radio4 = document.getElementById("radio-4");

var checkDOMReady = setInterval(function() {
if (radio1.checked) {
    image1.style.marginLeft = "0%";
}else if (radio2.checked){
    image1.style.marginLeft = "-100%";
}else if (radio3.checked){
    image1.style.marginLeft = "-200%";
}else if (radio4.checked){
    image1.style.marginLeft = "-300%";
}
}, 100);

setTimeout(function() {
        if (global == 1) {
            image1.style.marginLeft = "-100%";
            global = 2;
        }else if (global == 2) {
            image2.style.marginLeft = "-100%";
            global = 3;
        }else if (global == 3) {
            image3.style.marginLeft = "-100%";
            global = 4;
        }else if (global == 4) {
            image4.style.marginLeft = "-100%";
            global = 1;
        }
    }, 1000);