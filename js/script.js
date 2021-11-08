const dino = document.querySelector('.dino');

function handleKeyUp(event) {
    if (event.keyCode === 32) {
        console.log("Você precionou espaço");
    }
}

document.addEventListener('keyup', handleKeyUp);