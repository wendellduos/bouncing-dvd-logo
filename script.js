//elements
const frame = document.getElementById('frame');
const img = document.getElementById('icon');

//sets boundries
let maxX = frame.clientWidth - img.clientWidth ;
let maxY = frame.clientHeight - img.clientHeight;

//generates random initial position
let posX = generateX();
let posY = generateY();

//sets initial direction based on posX and posY values
let directionX = posX >= maxX ? 'toRight' : 'toLeft'; 
let directionY = posY >= maxY ? 'toBottom' : 'toTop';

let speed = 4;

//defines interval to verify and update icon position
setInterval(() => {
    if(directionX == 'toRight') {
        img.style.left = `${posX}px`; 
        posX += speed;
    } else {         
        img.style.left = `${posX}px`; 
        posX -= speed;
    }    
    if(directionY == 'toBottom') {
        img.style.top = `${posY}px`; 
        posY += speed;
    } else {         
        img.style.top = `${posY}px`; 
        posY -= speed;
    }
    
    if(posX >= maxX) {
        directionX = 'toLeft';        
    } else if(posX <= 0) {
        directionX = 'toRight';
    }      
    if(posY >= maxY) {
        directionY = 'toTop';        
    } else if(posY <= 0) {
        directionY = 'toBottom';
    }
} , 50);

//coordinate generators
function generateY() {
    let num = (Math.random() * maxY).toFixed();
    return num;
}
function generateX() {
    let num = (Math.random() * maxX).toFixed();
    return num;
}