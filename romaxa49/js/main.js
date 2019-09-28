document.getElementById('romaxa').onclick=function() {
    $('.bckground').animate({
        opacity: 1,
    }, 1500);
    $('font').animate({
        color: "#ffffff",
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        padding: 15
    }, 1500);
}