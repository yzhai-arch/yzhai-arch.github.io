document.addEventListener("DOMContentLoaded", function () {
  const btn = document.querySelector(".button"); 


  btn.addEventListener('click', function () {
    document.querySelectorAll('.circle').forEach(c => c.remove());
    const count = Math.floor(Math.random() * 100) + 1; 
    
    for (let i = 0; i < count; i++){
      const circle = document.createElement('div');
      const size = Math.random() * 1000 + 100; 


      circle.className = 'circle';
      circle.style.width = (size/2) + 'px';
      circle.style.height = (size/2) + 'px';
      circle.style.left = Math.random() * size + 'px';
      circle.style.top = Math.random() * size + 'px';
      circle.style.backgroundColor = `hsl(${Math.random()*360}, 70%, 60%)`;
      circle.style.position = 'absolute'
      circle.style.mixBlendMode = 'multiply'


      if (Math.random() > 0.5) {
        circle.style.borderRadius = '50%'; 
      } else {
        circle.style.borderRadius = '0';   
      };
      
      document.body.appendChild(circle);
    }
  });
});