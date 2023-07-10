
# Bouncing Logo

This project is a basic recreation of the classic DVD Screen Saver, commonly referred to as "DVD Bouncing Logo".

## Expanding on the idea

You could easily increase functionalities, for example:  

- Change **img** tag to a **svg**, and have it change **fill** on every direction change. Which is, essentially, a wall hit.

    if(posX >= maxX) {
        directionX = 'toLeft';

        //color changes to black
        img.style.fill = 'black';       
    } else if(posX <= 0) {
        directionX = 'toRight';
        
        //color changes to white
        img.style.fill = 'white';
    }

## DISCLAIMER

The DVD Logo is a trademark owned by DVD FLLC.