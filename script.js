function addClassToHeader() {
    const header = document.querySelector("header")
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;

    if (scrollPosition >= windowHeight) {
      document.querySelectorAll(".links a").forEach(a => a.classList.add("change-a"));
      document.querySelector(".change-3").classList.add('hidden');
      document.querySelector("header").classList.add('change-h');
      document.querySelector("img").classList.add('change-img');
    } else {
        document.querySelectorAll(".links a").forEach(a => a.classList.remove("change-a"));
        document.querySelector(".change-3").classList.remove('hidden');
        document.querySelector("img").classList.remove('change-img');
        document.querySelector("header").classList.remove('change-h');
    }

    if (scrollPosition >= windowHeight * 0.7) {
        document.querySelector(".change-1").classList.add('hidden');
    } else {
        document.querySelector(".change-1").classList.remove('hidden');
      }
    if (scrollPosition >= windowHeight * 0.8) {
        document.querySelector(".change-2").classList.add('hidden');
    } else {
        document.querySelector(".change-2").classList.remove('hidden');
      }
  }

  window.addEventListener('scroll', addClassToHeader);