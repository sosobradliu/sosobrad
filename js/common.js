
//global variable
var myLangArray; //language array
var commonPath = "web/img/";
var lan_index = 0;
// element of bg
var eShadow, eStaBar;
// element of icon
var eAudiotype;

var nDevice;

function getDevice(){
//     nDevice = location.search.indexOf("?");
    if(navigator.userAgent.match(/Android|iPhone|iPad/i))
        nDevice = 1;
    else
        nDevice = 0;
}

// URL function
function gotoNew(newURL){
    window.location.href = newURL;
}

// URL function
function urlToNew(newURL){
    window.location.href = newURL;
}

// reloadPage function
function reloadPage(newURL){
    window.AndroidJS.reloadPage(newURL);
}

// reloadPage function
function gotoNewPage(newURL){
    window.AndroidJS.loadUrl(newURL);
}

// get file number function
function getAllFiles(){
    window.AndroidJS.getAllFiles();
}
      
// Android control
function showMessage(MSG){
    window.AndroidJS.toast(MSG);
}

function printLog(MSG){
    window.AndroidJS.printLog(MSG);
}

function loadData(KeyName){
    var reData = Number( localStorage.getItem(KeyName) );
    if( reData )
        return reData;
    else
        return 0;
}

function saveData(KeyName, Data){
    localStorage.setItem( KeyName, Data );
}