
# Bouncing Logo

This project is a basic recreation of the classic DVD Screen Saver, commonly referred to as "DVD Bouncing Logo".  
<a href="https://codepen.io/wendellduos/pen/KKrymge" target="_blank">See it live on Codepen </a>.

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
- Make it happen in full screen by simply setting **width** and **height** to **100%**. Also, experiment with different speeds and update frequencies, as in larger screen sizes it might take too long for the icon to hit the walls).
  
        let speed = 7;
        let updtFrequency = 25;


## DISCLAIMER

The DVD Logo is a trademark owned by DVD FLLC.
