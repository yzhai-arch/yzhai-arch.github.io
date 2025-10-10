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
  let clickCount = 0;

console.log("JS loaded");

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


      if (clickCount === 75) {  
        button.classList.add('biggest')
      }



      if (clickCount === 80) {  
        fronts.forEach(function(div) {
          div.classList.add('show');
        });
        butt1.forEach(function(div) {
          div.classList.add('show');
        });
        butt2.forEach(function(div) {
          div.classList.add('show');
        });
        shit.forEach(function(div) {
          div.classList.add('show');
        });
        shit.forEach(function(div) {
          div.classList.add('show');
        });
      }
    });
  });
});