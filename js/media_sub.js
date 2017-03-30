// element of bg
var eShadow, eStaBar, eRightBar;
// element of button
var eHome, eBack;

var eListArea;


getEleID();
setEleImage();

function initialBody(type) {
    document.body.style.backgroundImage = "url("+commonPath+"bg.png)";
    setEleTouchEvent();
    createList(type);
}

function getEleID(){
    eShadow = document.getElementById("shadow");
    eStaBar = document.getElementById("status");

    eHome = document.getElementById("home");
    eBack = document.getElementById("back");
    eListArea = document.getElementById("list_area");
    eRightBar = document.getElementById("rightbar");
}

//0=Audio, 1=Video, 2=Pic
function createList(type){
    listArray = JSON.parse( getFileNameArray(type) );
//    listArray = ["xxxxxxxxxx", "ssssssssssssssss", "bbbbbbbbbbbbb",
//		"sddffggghhfffffffffffffffffGGGGGGGGGfffffGGGGGffffffh",
//        "fsfafas", "134343", "ffdfdf", "sddffggghhh", "ffdfdf", "sddffggghhh",
//        "fsfafas", "134343", "ffdfdf", "sddffggghhh", "ffdfdf", "sddffggghhh",
//        "fsfafas", "134343", "ffdfdf", "sddffggghhh", "ffdfdf"
//    ];
    
    var ul = document.getElementById("list_ul");
    for(i=0; i<listArray.length; i++)
    {
        var li = document.createElement("li");
        var info = document.createElement("a");
        info.text = listArray[i];
        if(nDevice === 0)
            info.className = "listTxt";
        else(nDevice === 1)
            info.className = "listTxtmoble";
        
        li.appendChild(info);
        li.id = "li"+i;

        li.addEventListener("mousedown", list_p);
        li.addEventListener("mouseup", list_n);
        li.addEventListener("touchstart", list_p);
        li.addEventListener("touchend", list_n);
        li.addEventListener("click", list_u);
        ul.appendChild(li);
    }
    // scroll the first element of list to top.
    eListArea.scrollTop = document.getElementById("li0").offsetTop;
//    eListArea.scrollHeight = -100;
}

function setEleImage(){
    eShadow.src = commonPath + "shadow.png";
    eStaBar.src = commonPath + "topbar_bg.png";
    eHome.src = commonPath + "nav_btn_menu_normal.png";
    eBack.src = commonPath + "nav_btn_back_normal.png";
    
    eRightBar.src = commonPath + "common_RightBar_normal.png";
}
function setEleTouchEvent(){
    eHome.addEventListener("touchstart", btnHome_p);
    eHome.addEventListener("touchend", btnHome_u);
    eHome.addEventListener("touchcancel", btnHome_n);
    eBack.addEventListener("touchstart", btnBack_p);
    eBack.addEventListener("touchend", btnBack_u);
    eBack.addEventListener("touchcancel", btnBack_n);
}

function btnBack_p() {
    if (eBack.src.match("normal")) {
        eBack.src = commonPath + "nav_btn_back_pressed.png";
    }
}
function btnBack_n() {
    if (eBack.src.match("pressed")) {
        eBack.src = commonPath + "nav_btn_back_normal.png";
    }
}
function btnBack_u() {
    btnBack_n();
    urlToNew("Media_Main.html");
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

function list_n(e){
    var el = this.getElementsByTagName("A")[0];
    el.style = "color: #FFFFFF;";
    if(nDevice === 0)
        el.className = "listTxt";
    else(nDevice === 1)
        el.className = "listTxtmoble";
}
function list_p(e){
    var el = this.getElementsByTagName("A")[0];
    el.style = "color: #494949;";
}
function list_u(e){
    var el = this.getElementsByTagName("A")[0];
    var x = el.textContent;
    showMessage( x );
}