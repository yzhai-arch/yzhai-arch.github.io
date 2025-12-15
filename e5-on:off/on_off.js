document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll('.light');
  const changs = document.querySelectorAll('.circle1'); 
  const neis = document.querySelectorAll('.circle2');
  const humans = document.querySelectorAll('.circle3');
  const dots = document.querySelectorAll('.dot');
  const fronts = document.querySelectorAll('.front');
  const butt1 = document.querySelectorAll('.butt1');
  const butt2 = document.querySelectorAll('.butt2');
  const shit = document.querySelectorAll('.shit');
  const word = document.querySelectorAll('.word');
  const shitwords = document.querySelectorAll('.shitwords');
  let clickCount = 0;
  let finaleTriggered = false;
  let poopReady = false;

console.log("JS loaded");

  shit.forEach(function(div) {
    div.addEventListener('click', function(event) {
      if (!poopReady) {
        event.preventDefault();
        event.stopPropagation();
        return;
      }
      window.location.reload();
    });
  });

  buttons.forEach(function(button) {
    button.addEventListener('click', function () {
      clickCount++;

      if (clickCount === 1) {
        button.classList.add('big');
        
      }
      console.log("Button clicked", clickCount);
      

      if (clickCount === 3) {  
        humans.forEach(function(div) {
          if (!div.classList.contains('show')) {
            div.style.display = 'block'; 
            setTimeout(() => {
              div.classList.add('show'); 
            }, 10); 
          }
        });
      
      }


      if (clickCount === 6) {
        button.classList.add('big');

        neis.forEach(function(div) {
          div.classList.add('show');
        });
         dots.forEach(function(div) {
          div.classList.add('big');
        });
      }



      if (clickCount === 9) {
        button.classList.add('bigger');

        neis.forEach(function(div) {
          div.classList.add('bigger');
        });

        humans.forEach(function(div) {
          div.classList.add('bigger');
        });
        word.forEach(function(div) {
          div.classList.add('disapear');
        });
      }


      if (clickCount === 13) {
        changs.forEach(function(div) {
          if (!div.classList.contains('show')) {
            div.style.display = 'block'; 
            setTimeout(() => {
              div.classList.add('show'); 
            }, 10); 
          }
        });  
      }



      if (clickCount === 17) {  
        
        neis.forEach(function(div) {
          div.classList.add('biggerer');
        });
         dots.forEach(function(div) {
          div.classList.add('bigger');
        });
         
      }


       if (clickCount === 20) {  
        
        
        humans.forEach(function(div) {
          div.classList.add('biggerer');
        });  
        changs.forEach(function(div){
          div.classList.add('big')
        })
      }


      if (clickCount === 25) {  
        button.classList.add('biggerer')
       
         
      }

       if (clickCount === 30) {  
        
        
        neis.forEach(function(div) {
          div.classList.add('biggerer');
        });  
        
      }

       if (clickCount === 34) {  
        
        
        
        changs.forEach(function(div){
          div.classList.add('bigger')
        })
      }



       if (clickCount === 39) {  
        button.classList.add('biggererer')
       
      }







       if (clickCount === 46) {  
        button.classList.add('biggerererer')
        
        humans.forEach(function(div) {
          div.classList.add('biggererer');
        });  
        changs.forEach(function(div){
          div.classList.add('bigger')
        })
      }




      if (clickCount === 53) {  
        button.classList.add('biggererererer')
        neis.forEach(function(div) {
          div.classList.add('biggest');
        });
         
        changs.forEach(function(div) {
          div.classList.add('biggest');
        }); 
      }



       if (clickCount === 60) {  
        humans.forEach(function(div) {
          div.classList.add('biggest');
        });  
      }


      if (clickCount === 68) {  
        neis.forEach(function(div) {
          div.classList.add('biggerer');
        });
        
        humans.forEach(function(div) {
          div.classList.add('biggererer');
        });  
        
      }


      if (clickCount === 70) {  
        button.classList.add('biggest')
      }



      if (!finaleTriggered && clickCount >= 75) {  
        finaleTriggered = true;
        poopReady = true;
        fronts.forEach(function(div) {
          div.classList.add('show');
          div.style.display = 'block';
          div.style.opacity = '1';
        });
        butt1.forEach(function(div) {
          div.classList.add('show');
          div.style.opacity = '1';
        });
        butt2.forEach(function(div) {
          div.classList.add('show');
          div.style.opacity = '1';
        });
         shitwords.forEach(function(div) {
          div.classList.add('show');
          div.style.opacity = '1';
        });
        shit.forEach(function(div) {
          div.classList.remove('animate');
          div.classList.add('show');
          div.style.opacity = '1';
          div.style.display = 'block';
          void div.offsetWidth; // force reflow so the animation can restart
          div.classList.add('animate');
        });
      }
    });
  });
});
