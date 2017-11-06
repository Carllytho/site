function myFunction(x) {
    x.classList.toggle("change");
}
var veri = 1;
var trigger = document.getElementById('menu-trigger').addEventListener("click",function(){
    var menu = document.getElementById('menu-hidde');
    if (veri == 1) {
        document.getElementById('corpo').style.overflow = 'hidden';
        menu.style.left = "0px";
        veri = 0;
    }
    else{
        document.getElementById('corpo').style.overflow = 'visible';  menu.style.left = "-100%";
        veri = 1;
    }
})
function openMenu(){
  document.getElementById('menu-trigger').style = ('background-color: rgba(0,0,0,0.24)')
}
