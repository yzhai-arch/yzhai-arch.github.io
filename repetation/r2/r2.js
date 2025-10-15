document.addEventListener("DOMContentLoaded", function () {
        const human = document.querySelector(".human");
        const left = document.querySelector(".left");
        const right = document.querySelector(".right");
        const background = document.querySelector(".background");
        let clickCount = 0;

        human.addEventListener("click", function () {
          clickCount++;
          console.log("clicked!");

          const rect = human.getBoundingClientRect();
          const humanX = rect.left + rect.width / 2;
          const humanY = rect.top + rect.height / 8;

          const count = Math.floor(Math.random() * 100) + 5;



          for (let i = 0; i < count; i++) {

            const symbol = document.createElement("div");
            const spread = 10 + clickCount * 80; 

            const X = ((Math.random() - 0.5)/2.5) * (spread/1.02);
            const Y = (Math.random() - 0.1) * spread ;
            const minY = 0;   
            const maxY = 1800;
            const minX = 0;
            const maxX = 2000;

            let posX = humanX + X;
            let posY = humanY + Y;
            //conculation of the range

            
            posX = Math.max(minX, Math.min(maxX, posX));
            posY = Math.max(minY, Math.min(maxY, posY));

            symbol.classList.add("symbol");
            symbol.textContent = Math.random() > 0.5 ? "*" : "+";
            symbol.style.left = posX + "px";
            symbol.style.top = posY + "px";
            symbol.style.fontSize = (Math.random() * 60 + 10) + "px";


            document.body.appendChild(symbol);
          }
        });

        // change background
        left.addEventListener("click", function () {
          background.classList.add('big');
          document.querySelectorAll(".symbol").forEach(s => s.classList.add('big'));
        });

        
        right.addEventListener("click", function () {
          background.classList.remove('big');
          document.querySelectorAll(".symbol").forEach(s => s.classList.remove('big'));
        });
      });


