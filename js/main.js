Telegram.WebApp.ready();
let menuBtns = document.getElementById("main-sections");
let faqPage = document.getElementById("faq-menu")
let aboutPage = document.getElementById("abouts")

let weare = document.getElementById("abouts")

let BackButton = window.Telegram.WebApp.BackButton;
BackButton.hide();

let selectedSection = 'main';

function loadMenu() {
    menuBtns.style.opacity = 0;
    setTimeout(function() {
        menuBtns.style.display = "none";
      }, 500);
    aboutPage.style.display = "block";
    setTimeout(function() {
        aboutPage.style.opacity = 1;
      }, 10);
    if (!BackButton.isVisible) {
        BackButton.show();
    }
}

function loadMain() {

    menuBtns.style.display = "grid";
    setTimeout(function() {
        menuBtns.style.opacity = 1;
      }, 10);
    aboutPage.style.opacity = 0;
    setTimeout(function() {
        aboutPage.style.display = "none";
      }, 500);
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
    $('.whoweare').attr('style', '' + (Telegram.WebApp.isExpanded ? 'opacity: 1;' : 'opacity: 0;'));
    $('.hr-opacity').attr('style', '' + (Telegram.WebApp.isExpanded ? 'opacity: 1;' : 'opacity: 0;'));
    $('.about-text-opacity').attr('style', '' + (Telegram.WebApp.isExpanded ? '-webkit-text-fill-color: #fff; margin-bottom: 20px; margin-top: 20px;' : '-webkit-text-fill-color: transparent; margin-bottom: 15px; margin-top: 15px;'));
    $('.about-text').attr('style', '' + (Telegram.WebApp.isExpanded ? 'margin-bottom: 20px; margin-top: 20px;' : 'margin-bottom: 15px; margin-top: 15px;'));
    // $('.whoweare').attr('style', '' + (Telegram.WebApp.isExpanded ? 'transition: visibility 1s, opacity 0.5s ease-out;' : 'transition: visibility 1s, opacity 0.5s ease-out;'));
    
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