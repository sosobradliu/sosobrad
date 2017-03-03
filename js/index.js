
//global variable
var myLangArray; //language array
var lan_index = 0;

// initial body image
document.body.style.backgroundImage = "url(../web/img/topbar_bg.png), url(../web/img/shadow.png), url(../web/img/bg.png)";

// element of button
var eNavi, eRadio, eBt, eLink, eMedia, eSet;
// element of text
var eTxtNavi, eTxtRadio, eTxtBt, eTxtLink, eTxtMedia, eTxtSet;

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

function initialBody() {
    // initial img-button path
    eNavi.src = "../web/img/home_btn_navi_normal.png";
    eRadio.src = "../web/img/home_btn_radio_normal.png";
    eBt.src = "../web/img/home_btn_bt_normal.png";
    eLink.src = "../web/img/home_btn_mirrorlink_normal.png";
    eMedia.src = "../web/img/home_btn_media_normal.png";
    eSet.src = "../web/img/home_btn_setting_normal.png";

    eNavi.addEventListener("touchstart", btnNavi_p, true);
    eNavi.addEventListener("touchend", btnNavi_n, true);
    eNavi.addEventListener("touchcancel", btnNavi_n, true);

    eLink.addEventListener("touchstart", btnLink_p, true);
    eLink.addEventListener("touchend", btnLink_n, true);
    eLink.addEventListener("touchcancel", btnLink_n, true);

    eMedia.addEventListener("touchstart", btnMedia_p, true);
    eMedia.addEventListener("touchend", btnMedia_n, true);
    eMedia.addEventListener("touchcancel", btnMedia_n, true);

    eSet.addEventListener("touchstart", btnSetting_p, true);
    eSet.addEventListener("touchend", btnSetting_n, true);
    eSet.addEventListener("touchcancel", btnSetting_n, true);

    setLang(lan_index);
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

    eTxtNavi.innerHTML = myLangArray[1];
    eTxtRadio.innerHTML = myLangArray[2];
    eTxtBt.innerHTML = myLangArray[3];
    eTxtLink.innerHTML = myLangArray[4];
    eTxtMedia.innerHTML = myLangArray[5];
    eTxtSet.innerHTML = myLangArray[6];
}

//Navigation function
function btnNavi_p() {
    if (eNavi.src.match("normal"))
        eNavi.src = "../web/img/home_btn_navi_pressed.png";
    eTxtNavi.style.color = "#494949";
}
function btnNavi_n() {
    if (eNavi.src.match("pressed"))
        eNavi.src = "../web/img/home_btn_navi_normal.png";
    eTxtNavi.style.color = "#FFFFFF";
    window.AndroidJS.toast();
}

//link function
function btnLink_p() {
    if (eLink.src.match("normal"))
        eLink.src = "../web/img/home_btn_mirrorlink_pressed.png";
    eTxtLink.style.color = "#494949";
}
function btnLink_n() {
    if (eLink.src.match("pressed"))
        eLink.src = "../web/img/home_btn_mirrorlink_normal.png";
    eTxtLink.style.color = "#FFFFFF";
}

//Media function
function btnMedia_p() {
    if (eMedia.src.match("normal"))
        eMedia.src = "../web/img/home_btn_media_pressed.png";
    eTxtMedia.style.color = "#494949";
}
function btnMedia_n() {
    if (eMedia.src.match("pressed"))
        eMedia.src = "../web/img/home_btn_media_normal.png";
    eTxtMedia.style.color = "#FFFFFF";
}

//Radio function
function btnRadio() {
    if (eRadio.src.match("pressed")) {
        eRadio.src = "../web/img/home_btn_radio_normal.png";
        eTxtRadio.style.color = "#FFFFFF";
    } else {
        eRadio.src = "../web/img/home_btn_radio_pressed.png";
        eTxtRadio.style.color = "#494949";
    }
}

//setting function
function btnSetting_p() {
    if (eSet.src.match("normal"))
        eSet.src = "../web/img/home_btn_setting_pressed.png";
    eTxtSet.style.color = "#494949";
}
function btnSetting_n() {
    if (eSet.src.match("pressed"))
        eSet.src = "../web/img/home_btn_setting_normal.png";
    eTxtSet.style.color = "#FFFFFF";
}
function btnSet() {
    lan_index++;
    if (lan_index > 3)
        lan_index = 0;
    setLang(lan_index);
}

// URL function
function urlMedia() {
    window.location.href = "Media_Main.html";
}
function urlLink() {
    window.AndroidJS.reURL("Link_Main.html");
}