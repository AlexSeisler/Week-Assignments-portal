function revealProjects() {
    const reveal = document.querySelector(".reveal");
  
    const windowHeight = window.innerHeight;
    const revealTop = reveal.getBoundingClientRect().top;
    const revealPoint = 150;
  
    if (revealTop < windowHeight - revealPoint) {
      reveal.classList.add("active");
    }
  }
  revealProjects();