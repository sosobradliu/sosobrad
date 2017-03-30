// element of button
var eHome, eMainAudio, eMainPic, eMainVideo;
// element of text
var eTxtAudio, eTxtAudioNum, eTxtPic, eTxtPicNum, eTxtVideo, eTxtVideoNum, eTxtLoad;
// element of loading animation
var eLoading, eLoadimg;

getDevice();
getEleID();
setEleImage();
//setTimeout(getAllFiles(), 2000);
getAllFiles();

function initialBody() {
//         initial body image
    document.body.style.backgroundImage = "url("+commonPath+"bg.png)";
    lan_index = loadData("Language");
    setLang(lan_index);
    setEleTouchEvent();
}

function getEleID(){
    eShadow = document.getElementById("shadow");
    eStaBar = document.getElementById("status");
    eAudiotype = document.getElementById("audioType");
    eLoading = document.getElementById("loading");
    eLoadimg = document.getElementById("img_loading");
    showHideLoading(false);

    eMainAudio = document.getElementById("main_Audio");
    eMainPic = document.getElementById("main_Pic");
    eMainVideo = document.getElementById("main_Video");
    eHome = document.getElementById("home");
    
    eTxtAudio = document.getElementById("txt_Audio");
    eTxtPic = document.getElementById("txt_Pic");
    eTxtVideo = document.getElementById("txt_Video");
//    eTxtLoad = document.getElementById("txt_Load");
    eTxtAudioNum = document.getElementById("txt_Audio_number");
    eTxtPicNum = document.getElementById("txt_Pic_number");
    eTxtVideoNum = document.getElementById("txt_Video_number");
}

function setEleImage(){
    eShadow.src = commonPath + "shadow.png";
    eStaBar.src = commonPath + "topbar_bg.png";
    eAudiotype.src = commonPath+"nav_icon_playing_music.png";
    eLoadimg.src = commonPath + "img_bg_load.png";
    
    eMainAudio.src = commonPath + "media_menu_music_normal.png";
    eMainPic.src = commonPath + "media_menu_picture_normal.png";
    eMainVideo.src = commonPath + "media_menu_movie_normal.png";
    eHome.src = commonPath + "nav_btn_menu_normal.png";
}
function setEleTouchEvent(){
    eMainAudio.addEventListener("touchstart", btnAudio_p, false);
    eMainAudio.addEventListener("touchend", btnAudio_n, false);
    eTxtAudio.addEventListener("touchstart", btnAudio_p, false);
    eTxtAudio.addEventListener("touchend", btnAudio_n, false);
    eTxtAudioNum.addEventListener("touchstart", btnAudio_p, false);
    eTxtAudioNum.addEventListener("touchend", btnAudio_n, false);
    
    eMainPic.addEventListener("touchstart", btnPic_p, false);
    eMainPic.addEventListener("touchend", btnPic_n, false);
    eTxtPic.addEventListener("touchstart", btnPic_p, false);
    eTxtPic.addEventListener("touchend", btnPic_n, false);
    eTxtPicNum.addEventListener("touchstart", btnPic_p, false);
    eTxtPicNum.addEventListener("touchend", btnPic_n, false);
    
    eMainVideo.addEventListener("touchstart", btnVideo_p, false);
    eMainVideo.addEventListener("touchend", btnVideo_n, false);
    eTxtVideo.addEventListener("touchstart", btnVideo_p, false);
    eTxtVideo.addEventListener("touchend", btnVideo_n, false);
    eTxtVideoNum.addEventListener("touchstart", btnVideo_p, false);
    eTxtVideoNum.addEventListener("touchend", btnVideo_n, false);
	
    eHome.addEventListener("touchstart", btnHome_p, false);
    eHome.addEventListener("touchend", btnHome_n, false);
    
    window.addEventListener('touchmove', noMove, false);
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

    eTxtAudio.innerHTML = myLangArray[0];
    eTxtPic.innerHTML = myLangArray[1];
    eTxtVideo.innerHTML = myLangArray[2];
//    eTxtLoad.innerHTML = myLangArray[3];
    
    setFileNum();
}

function setFileNum(){
    if(nDevice === 1){
        eTxtAudioNum.innerHTML = "[ "+window.AndroidJS.getAudio()+" ]";
        eTxtPicNum.innerHTML = "[ "+window.AndroidJS.getPic()+" ]";
        eTxtVideoNum.innerHTML = "[ "+window.AndroidJS.getVideo()+" ]";
    }
    else{
        eTxtAudioNum.innerHTML = "[ 0 ]";
        eTxtPicNum.innerHTML = "[ 0 ]";
        eTxtVideoNum.innerHTML = "[ 0 ]";
    }
}

function setFileNumAndClean(){
    setFileNum();
    showHideLoading(false);
}

function showHideLoading(SHOW){
    if(SHOW){
//        eLoading.style.display = "block";
        eLoading.style.visibility = "visible";
    }
    else{
//        eLoading.style.display = "none";
        eLoading.style.visibility = "hidden";
    }
}

function noMove(event){
    var event = event || window.event;
    event.preventDefault();
}

// audio function
function btnAudio_p() {
    if (eMainAudio.src.match("normal")) {
        eMainAudio.src = commonPath + "media_menu_music_pressed.png";
        eTxtAudio.style.color = "#494949";
        eTxtAudioNum.style.color = "#494949";
    }
}
function btnAudio_n() {
    if (eMainAudio.src.match("pressed")) {
        eMainAudio.src = commonPath + "media_menu_music_normal.png";
        eTxtAudio.style.color = "#FFFFFF";
        eTxtAudioNum.style.color = "#FFFFFF";
    }
}
function btnAudio_u() {
    btnAudio_n();
//    showMessage("Audio");
    urlToNew("Media_Audio.html");
}

// Pic function
function btnPic_p() {
    if (eMainPic.src.match("normal")) {
        eMainPic.src = commonPath + "media_menu_picture_pressed.png";
        eTxtPic.style.color = "#494949";
        eTxtPicNum.style.color = "#494949";
    }
}
function btnPic_n() {
    if (eMainPic.src.match("pressed")) {
        eMainPic.src = commonPath + "media_menu_picture_normal.png";
        eTxtPic.style.color = "#FFFFFF";
        eTxtPicNum.style.color = "#FFFFFF";
    }
}
function btnPic_u() {
    btnAudio_n();
    showMessage("Pic");
}

// Video function
function btnVideo_p() {
    if (eMainVideo.src.match("normal")) {
        eMainVideo.src = commonPath + "media_menu_movie_pressed.png";
        eTxtVideo.style.color = "#494949";
        eTxtVideoNum.style.color = "#494949";
    }
}
function btnVideo_n() {
    if (eMainVideo.src.match("pressed")) {
        eMainVideo.src = commonPath + "media_menu_movie_normal.png";
        eTxtVideo.style.color = "#FFFFFF";
        eTxtVideoNum.style.color = "#FFFFFF";
    }
}
function btnVideo_u() {
    btnAudio_n();
//    showMessage("Video");
    urlToNew("Media_Video.html");
}

// Home function
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