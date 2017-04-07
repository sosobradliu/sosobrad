// element of button
var eNavi, eRadio, eBt, eLink, eMedia, eSet;
// element of text
var eTxtNavi, eTxtRadio, eTxtBt, eTxtLink, eTxtMedia, eTxtSet;

getDevice();
getEleID();
setEleImage();

function initialBody() {
    // initial body image
    //document.body.style.backgroundImage = "url(../web/img/topbar_bg.png), url(../web/img/shadow.png), url(../web/img/bg.png)";
    document.body.style.backgroundImage = "url("+commonPath+"bg.png)";
    setEleTouchEvent();
    lan_index = loadData("Language");
    setLang(lan_index);
}

function getEleID(){
    eShadow = document.getElementById("shadow");
    eStaBar = document.getElementById("status");
    eAudiotype = document.getElementById("audioType");

    eNavi = document.getElementById("navi");
    eRadio = document.getElementById("radio");
    eBt = document.getElementById("bt");
    eLink = document.getElementById("link");
    eMedia = document.getElementById("media");
    eSet = document.getElementById("setting");

    eTxtNavi = document.getElementById("txt_navi");
    eTxtRadio = document.getElementById("txt_radio");
    eTxtBt = document.getElementById("txt_bt");
    eTxtLink = document.getElementById("txt_link");
    eTxtMedia = document.getElementById("txt_media");
    eTxtSet = document.getElementById("txt_set");
}

function setEleImage(){
    eShadow.src = commonPath + "shadow.png";
    eStaBar.src = commonPath + "topbar_bg.png";
    eAudiotype.src = commonPath+"nav_icon_playing_music.png";
    
    eNavi.src = commonPath + "home_btn_navi_normal.png";
    eRadio.src = commonPath + "home_btn_radio_normal.png";
    eBt.src = commonPath + "home_btn_bt_normal.png";
    eLink.src = commonPath + "home_btn_mirrorlink_normal.png";
    eMedia.src = commonPath + "home_btn_media_normal.png";
    eSet.src = commonPath + "home_btn_setting_normal.png";
}

function setEleTouchEvent(){
    eNavi.addEventListener("touchstart", btnNavi_p, false);
    eNavi.addEventListener("touchend", btnNavi_n, false);
    eTxtNavi.addEventListener("touchstart", btnNavi_p, false);
    eTxtNavi.addEventListener("touchend", btnNavi_n, false);

    eRadio.addEventListener("touchstart", btnRadio_p, false);
    eRadio.addEventListener("touchend", btnRadio_n, false);
    eTxtRadio.addEventListener("touchstart", btnRadio_p, false);
    eTxtRadio.addEventListener("touchend", btnRadio_n, false);

//    eBt.addEventListener("mousedown", btnBt_p, false);
//    eBt.addEventListener("mouseup", btnBt_n, false);
//    eBt.addEventListener("onmousemove", noMove, false);
    eBt.addEventListener("touchstart", btnBt_p, false);
    eBt.addEventListener("touchend", btnBt_n, false);
    eTxtBt.addEventListener("touchstart", btnBt_p, false);
    eTxtBt.addEventListener("touchend", btnBt_n, false);

    eMedia.addEventListener("touchstart", btnMedia_p, false);
    eMedia.addEventListener("touchend", btnMedia_n, false);
//    eMedia.addEventListener("touchend", MEDIA, false);
//    eMedia.addEventListener("touchcancel", MEDIA, false);
    eTxtMedia.addEventListener("touchstart", btnMedia_p, false);
    eTxtMedia.addEventListener("touchend", btnMedia_n, false);

    eSet.addEventListener("touchstart", btnSet_p, false);
    eSet.addEventListener("touchend", btnSet_n, false);
    eTxtSet.addEventListener("touchstart", btnSet_p, false);
    eTxtSet.addEventListener("touchend", btnSet_n, false);

}

// language
function setLang(index) {
    switch (index) {
        case 1:
            myLangArray = L_TW;
            break;
        case 2:
            myLangArray = L_CN;
            break;
        case 3:
            myLangArray = L_JP;
            break;
        case 0:
        default:
            myLangArray = L_EN;
            break;
    }
    saveData("Language", ""+index);

    eTxtNavi.innerHTML = myLangArray[1];
    eTxtRadio.innerHTML = myLangArray[2];
    eTxtBt.innerHTML = myLangArray[3];
    eTxtLink.innerHTML = myLangArray[4];
    eTxtMedia.innerHTML = myLangArray[5];
    eTxtSet.innerHTML = myLangArray[6];
}

function noMove(event){
    var event = event || window.event;
    event.preventDefault();
}

function MEDIA(event){
    var event = event || window.event;
    window.AndroidJS.logPrint(""+event.type);
//    switch(event.type){
//        case "touchstart":
//            break;
//        case "touchend":
//            break;
//        case "touchmove":
//            break;
//    }
}

//Navigation function
function btnNavi_p() {
    if (eNavi.src.match("normal")){
        eNavi.src = commonPath+"home_btn_navi_pressed.png";
        eTxtNavi.style.color = "#494949";
    }
}
function btnNavi_n() {
    if (eNavi.src.match("pressed")){
        eNavi.src = commonPath+"home_btn_navi_normal.png";
        eTxtNavi.style.color = "#FFFFFF";
    }
}
function btnNavi_u(){
    btnNavi_n();
//    gotoNew("https://www.google.com.tw/maps/@23.4762725,120.8210213,7z?hl=zh-TW");
    urlToNew("Map.html");
}

//Radio function
function btnRadio_p() {
    if (eRadio.src.match("normal")){
        eRadio.src = commonPath+"home_btn_radio_pressed.png";
        eTxtRadio.style.color = "#494949";
    }
}
function btnRadio_n() {
    if (eRadio.src.match("pressed")){
        eRadio.src = commonPath+"home_btn_radio_normal.png";
        eTxtRadio.style.color = "#FFFFFF";
    }
}
function btnRadio_u(){
    btnRadio_n();
    urlToNew("Radio_Main.html");
}

//Bt function
function btnBt_p() {
    if (eBt.src.match("normal")){
        eBt.src = commonPath+"home_btn_bt_pressed.png";
        eTxtBt.style.color = "#494949";
    }
}
function btnBt_n() {
    if (eBt.src.match("pressed")){
        eBt.src = commonPath+"home_btn_bt_normal.png";
        eTxtBt.style.color = "#FFFFFF";
    }
}
function btnBt_u(){
    btnBt_n();
//    urlToNew("Bt_Main.html");
}

//Media function
function btnMedia_p() {
    if (eMedia.src.match("normal")){
        eMedia.src = commonPath+"home_btn_media_pressed.png";
        eTxtMedia.style.color = "#494949";
    }
}
function btnMedia_n() {
    if (eMedia.src.match("pressed")){
        eMedia.src = commonPath+"home_btn_media_normal.png";
        eTxtMedia.style.color = "#FFFFFF";
    }
}
function btnMedia_u(){
    btnMedia_n();
    urlToNew("Media_Main.html");
}

//Link function
function btnLink() {
    if (eLink.src.match("pressed")) {
        eLink.src = commonPath+"home_btn_mirrorlink_normal.png";
        eTxtLink.style.color = "#FFFFFF";
    } else {
        eLink.src = commonPath+"home_btn_mirrorlink_pressed.png";
        eTxtLink.style.color = "#494949";
        showMessage("link");
    }
}

//setting function
function btnSet_p() {
    if (eSet.src.match("normal")){
        eSet.src = commonPath+"home_btn_setting_pressed.png";
        eTxtSet.style.color = "#494949";
    }
}
function btnSet_n() {
    if (eSet.src.match("pressed")){
        eSet.src = commonPath+"home_btn_setting_normal.png";
        eTxtSet.style.color = "#FFFFFF";
    }
}
function btnSet_u() {
    btnSet_n();
    lan_index++;
    if (lan_index > 3)
        lan_index = 0;
    setLang(lan_index);
}