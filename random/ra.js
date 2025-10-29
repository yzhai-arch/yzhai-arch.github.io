      const body = document.body;
      const background1 = document.querySelector(".background1");
      const background0 = document.querySelector(".background0");
      const head = document.querySelector(".head");

      let thetruth = 1; // 初始状态：森林世界
      let numTrees = Math.floor(Math.random() * 30) * 30 + 200;

      // 🌳 世界生成函数
      function generateWorld() {
        // 清空旧内容
        document.querySelectorAll(".tree, .blackt").forEach(el => el.remove());

        if (thetruth === 1) {
          // 🌲 森林模式
          background0.classList.remove("big");
          background1.classList.remove("big");
          head.classList.remove("big");

          for (let i = 0; i < numTrees; i++) {
            const tree = document.createElement("div");
            tree.classList.add("tree");
            tree.textContent = "森";

            const x = Math.random() * window.innerWidth;
            const minY = window.innerHeight / 4;
            const y = minY + Math.random() * (window.innerHeight - minY);
            const size = -20 + (y / window.innerHeight) * 100;

            tree.style.left = `${x}px`;
            tree.style.top = `${y}px`;
            tree.style.fontSize = `${size}px`;
            tree.style.opacity = 0.3 + (y / window.innerHeight) * 0.7;
            body.appendChild(tree);
          }





        } else {
          
          background0.classList.add("big");
          background1.classList.add("big");
          head.classList.add("big");

          const centerX = window.innerWidth / 2;
          const centerY = window.innerHeight / 2;
          const chars =
            "1234567890-=qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM[];',./！@#¥%……&*（）～·";

          for (let i = 0; i < numTrees; i++) {
            const charDiv = document.createElement("div");
            charDiv.classList.add("blackt");
            charDiv.textContent =
              chars[Math.floor(Math.random() * chars.length)];

            const angle = Math.random() * 2 * Math.PI;
            const radius =
              Math.sqrt(Math.random()) *
              (Math.min(window.innerWidth, window.innerHeight) / 2);

            const x = centerX + Math.cos(angle) * radius;
            const y = centerY + Math.sin(angle) * radius;

            charDiv.style.left = `${x}px`;
            charDiv.style.top = `${y}px`;
            charDiv.style.fontSize = `${8 + Math.random() * 16}px`;
            charDiv.style.opacity = 0.5 + Math.random() * 0.5;
            body.appendChild(charDiv);
          }
        }
      }



      //this part helpped out with gpt because i couldn't fix it
      generateWorld();

      
      head.addEventListener("click", () => {
     
        thetruth = Math.floor(Math.random() * 2) + 1;
        numTrees = Math.floor(Math.random() * 30) * 30 + 200;

        console.log("new thetruth =", thetruth, "numTrees =", numTrees);
        generateWorld();
      });