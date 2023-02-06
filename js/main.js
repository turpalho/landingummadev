Telegram.WebApp.ready();
let menuBtns = document.getElementById("main-sections");
let faqPage = document.getElementById("faq-menu")
let aboutPage = document.getElementById("abouts")

let weare = document.getElementById("abouts")

let BackButton = window.Telegram.WebApp.BackButton;
BackButton.hide();

let selectedSection = 'main';

function loadMenu() {
    menuBtns.style.display = "none";
    aboutPage.style.display = "block";
    if (!BackButton.isVisible) {
        BackButton.show();
    }
}

function loadMain() {

    menuBtns.style.display = "grid";
    aboutPage.style.display = "none";
    faqPage.style.display = "none";

    /* Telegram WebApp */
    if (BackButton.isVisible) {
        BackButton.hide();
    }
}

function loadFaq() {
    menuBtns.style.display = "none";
    faqPage.style.display = "block";
    if (!BackButton.isVisible) {
        BackButton.show();
    }
}

BackButton.onClick(function() {
    loadMain();
})


function setViewportData() {
    // Telegram.WebApp.isExpanded ? weare.style.display = "block" : weare.style.display = "none";
    $('.whoweare').attr('style', '' + (window.Telegram.WebApp.isExpanded ? 'display: block;' : 'display: none;'));

    // $('.body').attr('style', '' + (Telegram.WebApp.isExpanded ? "background-image: url(img/lightFull.png); background-size: 100% 120vh;" : "background-image: url(img/light.png);"));
    // $('.animation').attr('style', '' + (Telegram.WebApp.isExpanded ? 'margin-top: 100px; margin-bottom: 50px;' : 'margin-top: 0px;'));

    // if (screenHeight > 800){
    //     $('.support_btn').attr('style', '' + (Telegram.WebApp.isExpanded ? 'margin-top: 180px;' : 'margin-top: 0px;'));
    // }
    // else if (screenHeight > 760){
    //     $('.support_btn').attr('style', '' + (Telegram.WebApp.isExpanded ? 'margin-top: 120px;' : 'margin-top: 0px;'));
    // }
    // else {
    //     $('.support_btn').attr('style', '' + (Telegram.WebApp.isExpanded ? 'margin-top: 80px;' : 'margin-top: 0px;'));
    // }
}

window.Telegram.WebApp.onEvent('viewportChanged', setViewportData);
setViewportData();


$( "#1" ).click(function() {
    if ($("#21").is(':visible')) {
        $( "#21" ).slideToggle();
    }
    if ($("#31").is(':visible')) {
        $( "#31" ).slideToggle();
    }
    
    if(!$("#11").is(':visible')){
        document.getElementById("h62").style.transition = "font 0.5s";
        document.getElementById("h62").style.fontSize = "10px";
        document.getElementById("d2").style.transition = "font 0.5s";
        document.getElementById("d2").style.height = "15px";
        document.getElementById("img2").style.transition = "font 0.5s";
        document.getElementById("img2").style.width = "13px";

        document.getElementById("h63").style.transition = "font 0.5s";
        document.getElementById("h63").style.fontSize = "10px";
        document.getElementById("d3").style.transition = "font 0.5s";
        document.getElementById("d3").style.height = "15px";
        document.getElementById("img3").style.transition = "font 0.5s";
        document.getElementById("img3").style.width = "13px";
    }
    else{
        document.getElementById("h62").style.transition = "font 0.5s";
        document.getElementById("h62").style.fontSize = "12pt";
        document.getElementById("d2").style.transition = "font 0.5s";
        document.getElementById("d2").style.height = "35px";
        document.getElementById("img2").style.transition = "font 0.5s";
        document.getElementById("img2").style.width = "25px";

        document.getElementById("h63").style.transition = "font 0.5s";
        document.getElementById("h63").style.fontSize = "12pt";
        document.getElementById("d3").style.transition = "font 0.5s";
        document.getElementById("d3").style.height = "35px";
        document.getElementById("img3").style.transition = "font 0.5s";
        document.getElementById("img3").style.width = "25px";
    }

    
    document.getElementById("h61").style.transition = "font 0.5s";
    document.getElementById("h61").style.fontSize = "12pt";
    document.getElementById("d1").style.transition = "font 0.5s";
    document.getElementById("d1").style.height = "35px";
    document.getElementById("img1").style.transition = "font 0.5s";
    document.getElementById("img1").style.width = "25px";

    $( "#11" ).slideToggle();
});
$( "#2" ).click(function() {
    if ($("#11").is(':visible')) {
        $( "#11" ).slideToggle();
    }
    if ($("#31").is(':visible')) {
        $( "#31" ).slideToggle();
    }

    if(!$("#21").is(':visible')){
        document.getElementById("h61").style.transition = "font 0.5s";
        document.getElementById("h61").style.fontSize = "10px";
        document.getElementById("d1").style.transition = "font 0.5s";
        document.getElementById("d1").style.height = "15px";
        document.getElementById("img1").style.transition = "font 0.5s";
        document.getElementById("img1").style.width = "13px";

        document.getElementById("h63").style.transition = "font 0.5s";
        document.getElementById("h63").style.fontSize = "10px";
        document.getElementById("d3").style.transition = "font 0.5s";
        document.getElementById("d3").style.height = "15px";
        document.getElementById("img3").style.transition = "font 0.5s";
        document.getElementById("img3").style.width = "13px";
    }
    else{
        document.getElementById("h61").style.transition = "font 0.5s";
        document.getElementById("h61").style.fontSize = "12pt";
        document.getElementById("d1").style.transition = "font 0.5s";
        document.getElementById("d1").style.height = "35px";
        document.getElementById("img1").style.transition = "font 0.5s";
        document.getElementById("img1").style.width = "25px";

        document.getElementById("h63").style.transition = "font 0.5s";
        document.getElementById("h63").style.fontSize = "12pt";
        document.getElementById("d3").style.transition = "font 0.5s";
        document.getElementById("d3").style.height = "35px";
        document.getElementById("img3").style.transition = "font 0.5s";
        document.getElementById("img3").style.width = "25px";
    }

    document.getElementById("h62").style.transition = "font 1s";
    document.getElementById("h62").style.fontSize = "12pt";
    document.getElementById("d2").style.transition = "font 0.5s";
    document.getElementById("d2").style.height = "35px";
    document.getElementById("img2").style.transition = "font 0.5s";
    document.getElementById("img2").style.width = "25px";
    $( "#21" ).slideToggle();
});
$( "#3" ).click(function() {
    if ($("#21").is(':visible')) {
        $( "#21" ).slideToggle();
    }
    if ($("#11").is(':visible')) {
        $( "#11" ).slideToggle();
    }

    if(!$("#31").is(':visible')){
        document.getElementById("h61").style.transition = "font 0.5s";
        document.getElementById("h61").style.fontSize = "10px";
        document.getElementById("d1").style.transition = "font 0.5s";
        document.getElementById("d1").style.height = "15px";
        document.getElementById("img1").style.transition = "font 0.5s";
        document.getElementById("img1").style.width = "13px";

        document.getElementById("h62").style.transition = "font 0.5s";
        document.getElementById("h62").style.fontSize = "10px";
        document.getElementById("d2").style.transition = "font 0.5s";
        document.getElementById("d2").style.height = "15px";
        document.getElementById("img2").style.transition = "font 0.5s";
        document.getElementById("img2").style.width = "13px";
    }
    else{
        document.getElementById("h61").style.transition = "font 0.5s";
        document.getElementById("h61").style.fontSize = "12pt";
        document.getElementById("d1").style.transition = "font 0.5s";
        document.getElementById("d1").style.height = "35px";
        document.getElementById("img1").style.transition = "font 0.5s";
        document.getElementById("img1").style.width = "25px";

        document.getElementById("h62").style.transition = "font 0.5s";
        document.getElementById("h62").style.fontSize = "12pt";
        document.getElementById("d2").style.transition = "font 0.5s";
        document.getElementById("d2").style.height = "35px";
        document.getElementById("img2").style.transition = "font 0.5s";
        document.getElementById("img2").style.width = "25px";
    }

    document.getElementById("h63").style.transition = "font 0.5s";
    document.getElementById("h63").style.fontSize = "12pt";
    document.getElementById("d3").style.transition = "font 0.5s";
    document.getElementById("d3").style.height = "35px";
    document.getElementById("img3").style.transition = "font 0.5s";
    document.getElementById("img3").style.width = "25px";
    $( "#31" ).slideToggle();
});