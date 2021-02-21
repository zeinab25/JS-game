let character = document.querySelector('.character');
let playzone = document.querySelector('.playzone');

playzone.addEventListener('mousemove', function(event) {
    character.style.top = event.pageY+'px';
    character.style.left = event.pageX+'px';

    
});


function isColliding(element1, element2) {
    let pos1 = element1.getBoundingClientRect();
    let pos2 = element2.getBoundingClientRect();
    if (pos1.x < pos2.x + pos2.width &&
        pos1.x + pos1.width > pos2.x &&
        pos1.y < pos2.y + pos2.height &&
        pos1.height + pos1.y > pos2.y) {
         return true;
     }
     return false;
}

