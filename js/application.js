// Wait till the browser is ready to render the game (avoids glitches)
window.requestAnimationFrame(function () {
  new GameManager(4, KeyboardInputManager, HTMLActuator, LocalScoreManager);
});


    var imageList = [
        "img/212/pina.png",
        "img/212/ica.png",
        "img/212/farago.png",
        "img/212/dota.png",
        "img/212/tothlaca.png",
        "img/212/szabz.png",
        "img/212/marton.png",
        "img/212/vlasits.png",
        "img/212/bartal.png",
        "img/212/pilath.png",
        "img/212/feri.png",
        "img/212/gyafi.png",

        "img/114/pina.png",
        "img/114/ica.png",
        "img/114/farago.png",
        "img/114/dota.png",
        "img/114/tothlaca.png",
        "img/114/szabz.png",
        "img/114/marton.png",
        "img/114/vlasits.png",
        "img/114/bartal.png",
        "img/114/pilath.png",
        "img/114/feri.png",
        "img/114/gyafi.png",
    ];
    for(var i = 0; i < imageList.length; i++ )
    {
        var imageObject = new Image();
        imageObject.src = imageList[i];
    }
