var carouselList = $("#carousel ul"),
    slidesInterval = setInterval(changeSlide, 5000),
    next = $("#next"),
    prev = $("#prev");

    //NEXT SLIDE

function changeSlide() {
    carouselList.animate({'marginLeft':-400}, 1000, moveFirstSlide);
};

function moveFirstSlide() {
    var firstSlide = carouselList.find("li:first");
    var lastSlide = carouselList.find("li:last");

    lastSlide.after(firstSlide);
    carouselList.css({marginLeft:0});
};

next.click(function(){
    clearInterval(slidesInterval);
    changeSlide();
    slidesInterval = setInterval(changeSlide, 5000);
});

    //PREVIOUS SLIDE 

function prevSlide() {
    carouselList.css({marginLeft:-400});
    moveLastSlide();
    carouselList.animate({'marginLeft': 0}, 1000);
};

function moveLastSlide() {
    var firstSlide = carouselList.find("li:first");
    var lastSlide = carouselList.find("li:last");

    firstSlide.before(lastSlide);
};

prev.click(function(){
    clearInterval(slidesInterval);
    prevSlide();
    slidesInterval = setInterval(changeSlide, 5000);
});

    //CONTROLS

var controlsInterval = setInterval(checkPosition, 100);

function checkPosition() {
    var activeSlide = carouselList.find("li:first");
    
    $("#control-1").css("background-color", "inherit");
    $("#control-2").css("background-color", "inherit");
    $("#control-3").css("background-color", "inherit");
    $("#control-4").css("background-color", "inherit");
    $("#control-5").css("background-color", "inherit");   

    switch (activeSlide.attr("id")) {
        case "item-1":
            $("#control-1").css("background-color", "white"); 
            break;
        case "item-2":
            $("#control-2").css("background-color", "white"); 
            break;
        case "item-3":
            $("#control-3").css("background-color", "white"); 
            break;
        case "item-4":
            $("#control-4").css("background-color", "white"); 
            break;
        case "item-5":
            $("#control-5").css("background-color", "white"); 
            break;
    }  
}

$(function() {
    var controls = $('#controls');

    controls.on('click', 'li', function() {
        switch ($(this).attr("id")) {
            case "control-1":
                controlSlide("item-1");
                break;
            case "control-2":
                controlSlide("item-2");
                break;
            case "control-3":
                controlSlide("item-3");
                break;
            case "control-4":
                controlSlide("item-4");
                break;
            case "control-5":
                controlSlide("item-5");
                break;
        }
    });
});

function controlSlide(i) {
    var activeSlide = carouselList.find("li:first");

    while (i !== activeSlide.attr("id")) {
        moveFirstSlide();
        activeSlide = carouselList.find("li:first");
    }
}

