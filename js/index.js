let nav = document.querySelector("nav");
window.onscroll = function() {
  if(document.documentElement.scrollTop > 20){
    nav.classList.add("sticky");
  }else {
    nav.classList.remove("sticky");
  }
}


document.addEventListener('DOMContentLoaded', function() {
  function animateValue(id, start, end, duration) {
      const obj = document.getElementById(id);
      let startTimestamp = null;
      const step = (timestamp) => {
          if (!startTimestamp) startTimestamp = timestamp;
          const progress = Math.min((timestamp - startTimestamp) / duration, 1);
          obj.innerHTML = Math.floor(progress * (end - start) + start) + '+';
          if (progress < 1) {
              window.requestAnimationFrame(step);
          }
      };
      window.requestAnimationFrame(step);
  }

  animateValue('years', 0, 20, 2000);
  animateValue('work', 0, 25, 2000);
  animateValue('clients', 0, 80, 2000);
});