
//DETECTING BUTTON PRESS
var numberOfDrumButtons = document.querySelectorAll(".drum");
for (var i = 0; i < numberOfDrumButtons.length; i++) {
    document.querySelectorAll('.drum')[i].addEventListener("click", handleClick);
    function handleClick() {
        var buttonInnerHtml = this.innerHTML;
        makeSound(buttonInnerHtml);
        buttonAnimation(buttonInnerHtml)
    }
};

//DETECTING KEY PRESS
document.addEventListener("keypress",
    function (event) {
        makeSound(event.key)
        buttonAnimation(event.key)
    }
);


function makeSound(key) {
    switch (key) {
        case 'w':
            var sound1 = new Audio("audio/sound1.mp3");
            sound1.play();
            break;

        case 'a':
            var sound2 = new Audio("audio/sound2.mp3");
            sound2.play();
            break;

        case 's':
            var sound3 = new Audio("audio/sound3.mp3");
            sound3.play();
            break;

        case 'd':
            var sound4 = new Audio("audio/sound4.mp3");
            sound4.play();
            break;

        case 'j':
            var sound5 = new Audio("audio/sound5.mp3");
            sound5.play();
            break;

        case 'k':
            var sound6 = new Audio("audio/sound6.mp3");
            sound6.play();
            break;

        case 'l':
            var sound7 = new Audio("audio/sound7.mp3");
            sound7.play();
            break;

        default: console.log(buttonInnerHtml)
    }

};


function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function () { activeButton.classList.remove("pressed") }, 100)
}