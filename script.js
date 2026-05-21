options = ["1","2","3","4","5","6"]

var result = document.querySelector("#result")
var image = document.getElementById("dice_img")

function randomNo() {
    var randomindex = Math.floor(Math.random()* options.length)
    var randomelement = options[randomindex]
    return randomelement
}
function Roll() {
    var dicenumber = randomNo()
    result.textContent = "The No is " + dicenumber
    switch (dicenumber) {
        case "1":
            image.src = "dice-six-faces-one.png"
            break;
        case "2":
            image.src = "dice-six-faces-two.png"
            break;
        case "3":
            image.src = "dice-six-faces-three.png"
            break;
        case "4":
            image.src = "dice-six-faces-four.png"
            break;
        case "5":
            image.src = "dice-six-faces-five.png"
            break;
        case "6":
            image.src = "dice-six-faces-six.png"
            break;
    
        default:
            break;
    }
    
}