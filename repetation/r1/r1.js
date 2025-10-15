document.addEventListener("DOMContentLoaded", function () {
      const ageInput = document.querySelector('.age');
      const button = document.querySelector('.start');
      const container = document.querySelector('.words');
      const background = document.querySelector('.background');
      const title = document.querySelector('.word');
      let clickCount = 0;


      button.addEventListener('click', function () {
        clickCount++;

        if (clickCount === 1){
          container.innerHTML = ""; 
          const age = parseInt(ageInput.value);

          if (isNaN(age) || age <= 0) {
            container.textContent = "Please enter a valid age";
            return;
          }
        

          // hide all the other component
          ageInput.style.display = "none";
          button.classList.add('big');
          background.style.display = "none";
          title.style.display = "none";



        for (let i = 0; i < age; i++) {
          const happyDiv = document.createElement('div');
          happyDiv.className = 'happy';
          happyDiv.textContent = "HAPPY";
          happyDiv.style.opacity = ((i + 1) / age).toString();
          happyDiv.style.letterSpacing = `${(i / age) * 10}px`;
          happyDiv.style.margin = "-9px 0 0 0";
          happyDiv.style.display = "flex";
          happyDiv.style.justifyContent = "center";
          happyDiv.style.fontSize = "15px";
          happyDiv.style.fontFamily = "Apple Chancery";
          happyDiv.style.fontStyle = "italic";
          container.appendChild(happyDiv);
        }

        // 再生成所有 HAPPY BIRTHDAY
        for (let i = 0; i < age; i++) {
          const happybDiv = document.createElement('div');
          happybDiv.className = 'happyb';
          happybDiv.textContent = "HAPPY BIRTHDAY";
          happybDiv.style.opacity = ((i + 1) / age).toString();
          happybDiv.style.letterSpacing = `${(i / age) * 10}px`;
          happybDiv.style.margin = "-10px 0 0 0";
          happybDiv.style.display = "flex";
          happybDiv.style.justifyContent = "center";
          happybDiv.style.fontSize = "20px";
          happybDiv.style.fontStyle = "italic";
          happybDiv.style.fontFamily = "Apple Chancery";
          container.appendChild(happybDiv);
        } 
        for (let i = 0; i < age; i++) {
          const happybtDiv = document.createElement('div');
          happybtDiv.className = 'happybt';
          happybtDiv.textContent = "HAPPY BIRTHDAY TO YOU";
          happybtDiv.style.opacity = ((i + 1) / age).toString();
          happybtDiv.style.letterSpacing = `${((i +5) / age) * 20}px`;
          happybtDiv.style.margin = "-20px 0 0 0";
          happybtDiv.style.display = "flex";
          happybtDiv.style.justifyContent = "center";
          happybtDiv.style.fontSize = "22px";
          happybtDiv.style.fontStyle = "italic";
          happybtDiv.style.fontFamily = "Apple Chancery";
          container.appendChild(happybtDiv);
        } 

        for (let i = 0; i < age; i++) {
          const star = document.createElement('div');
          star.className = 'star';
          star.textContent = "*";
          star.style.left = Math.random() * window.innerWidth + "px";
          star.style.top = Math.random() * window.innerHeight + "px";
          const minSize = 10;   
          const maxSize = 40;   
          const size = minSize + ((maxSize - minSize) / age) * i;
          star.style.fontSize = size + "px";
          star.style.color = `hsl(${Math.random() * 360}, 80%, 70%)`;
          container.appendChild(star)
        

         } }else {
          // reset
          ageInput.style.display = "inline";
          button.classList.remove('big');
          background.style.display = "block";
          title.style.display = "block";
          container.innerHTML = "";
          clickCount = 0;
        }
      });
    });
      