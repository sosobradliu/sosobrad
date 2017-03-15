// element of bg
var eShadow, eStaBar;
// element of button
var eHome;

//         initial body image
document.body.style.backgroundImage = "url("+commonPath+"bg.png)";

getEleID();
setEleImage();
setEleTouchEvent();

function initialBody() {
//    setEleTouchEvent();
//    setLang(lan_index);
}

function getEleID(){
    eShadow = document.getElementById("shadow");
    eStaBar = document.getElementById("status");

    eHome = document.getElementById("home");
}

function setEleImage(){
    eShadow.src = commonPath + "shadow.png";
    eStaBar.src = commonPath + "topbar_bg.png";
    eHome.src = commonPath + "nav_btn_menu_normal.png";
}
function setEleTouchEvent(){
    eHome.addEventListener("touchstart", btnHome_p, false);
    eHome.addEventListener("touchend", btnHome_u, false);
    eHome.addEventListener("touchcancel", btnHome_n, false);
    
    window.addEventListener('touchmove', noMove, false);
}

function noMove(event){
    var event = event || window.event;
    event.preventDefault();
}
function btnHome_p() {
    if (eHome.src.match("normal")) {
        eHome.src = commonPath + "nav_btn_menu_pressed.png";
    }
}
function btnHome_n() {
    if (eHome.src.match("pressed")) {
        eHome.src = commonPath + "nav_btn_menu_normal.png";
    }
}
function btnHome_u() {
    btnHome_n();
    urlToNew("index.html");
}

// URL function
function urlToNew(newURL){
    window.location.href = newURL;
}