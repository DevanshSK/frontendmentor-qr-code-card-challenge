const card = document.querySelector('.card');
  window.addEventListener("load", () => {

    // Card animation
    gsap.fromTo(card, {scale: 0}, {scale: 1, duration: 1, ease: "elastic.out(1.5, 1)"});

    // Footer animation
    gsap.set('.letter', {display: "inline-block"});
    
    gsap.fromTo('.letter',{y:"100%", opacity: 0} ,{y:0, duration: 0.75, opacity: 1, delay: 2, stagger: 0.05, ease: "back.out(3)"});

  });