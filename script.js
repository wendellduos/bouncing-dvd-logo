//elements
const frame = document.getElementById("frame");
const logo = document.getElementById("dvd-logo");

//params
let speed = frame.clientWidth / 165;
let updtFrequency = 33.3;

const axis = {
  x: {
    leftWall: 0,
    rightWall: frame.clientWidth - logo.clientWidth,
    directions: ["right", "left"],
  },
  y: {
    topWall: 0,
    bottomWall: frame.clientHeight - logo.clientHeight,
    directions: ["bottom", "top"],
  },
};

//initiate current positions at random
let posX = (Math.random() * axis.x.rightWall).toFixed();
let posY = (Math.random() * axis.y.bottomWall).toFixed();

//set initial direction at random
let directionX = axis.x.directions[(Math.random() * 1).toFixed()];
let directionY = axis.y.directions[(Math.random() * 1).toFixed()];

//defines interval to verify and update logo position
setInterval(() => {
  if (directionX === "right") {
    logo.style.left = `${posX}px`;
    posX += speed;
  } else {
    logo.style.left = `${posX}px`;
    posX -= speed;
  }

  if (directionY === "bottom") {
    logo.style.top = `${posY}px`;
    posY += speed;
  } else {
    logo.style.top = `${posY}px`;
    posY -= speed;
  }

  if (posX >= axis.x.rightWall) {
    posX = axis.x.rightWall;
    directionX = "left";
  } else if (posX <= axis.x.leftWall) {
    posX = axis.x.leftWall;
    directionX = "right";
  }

  if (posY >= axis.y.bottomWall) {
    posY = axis.y.bottomWall;
    directionY = "top";
  } else if (posY <= axis.y.topWall) {
    posY = axis.y.topWall;
    directionY = "bottom";
  }
}, updtFrequency);
