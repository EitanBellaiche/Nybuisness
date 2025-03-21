document.addEventListener("DOMContentLoaded", () => {
    // === מצב כהה ===
    const darkModeBtn = document.getElementById("toggleDarkMode");
    if (darkModeBtn) {
      darkModeBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
        localStorage.setItem("darkMode", document.body.classList.contains("dark-mode"));
      });
    }
  
    // === כפתור חזרה למעלה ===
    const scrollToTopBtn = document.getElementById("scrollToTop");
    if (scrollToTopBtn) {
      window.addEventListener("scroll", () => {
        scrollToTopBtn.style.display = window.scrollY > 300 ? "block" : "none";
      });
      scrollToTopBtn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    }
  
    // === המבורגר ===
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".main-nav");
    if (hamburger && navMenu) {
      hamburger.addEventListener("click", () => {
        navMenu.classList.toggle("open");
      });
    }
  
    // === שינוי רקע Header בגלילה ===
    window.addEventListener("scroll", () => {
      const header = document.querySelector(".main-header");
      if (window.scrollY > 50) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    });
  
    // === בלוג דינמי (אם יש) ===
    const blogContainer = document.getElementById("blog-container");
    if (blogContainer) {
      const posts = [
        { title: "איך לבחור דף נחיתה מנצח?", content: "הנה כמה טיפים על בניית דפי נחיתה..." },
        { title: "האם האתר שלך מוכן ל-SEO?", content: "כך תוודא שהאתר שלך מקודם נכון בגוגל..." }
      ];
      posts.forEach(post => {
        let div = document.createElement("div");
        div.classList.add("blog-post");
        div.innerHTML = `<h3>${post.title}</h3><p>${post.content}</p>`;
        blogContainer.appendChild(div);
      });
    }
  
    // === שליחת טופס ===
    const form = document.getElementById("contactForm");
    const successMessage = document.querySelector(".success-message");
    if (form && successMessage) {
      form.addEventListener("submit", (event) => {
        event.preventDefault();
        form.style.opacity = "0.5";
        setTimeout(() => {
          form.style.opacity = "1";
          successMessage.style.display = "block";
          form.reset();
        }, 1000);
      });
    }
  });
  
  const galleryImages = {
    maor: ["img1.jpeg", "img2.jpeg", "img3.jpeg", "img4.jpeg"],
    yarin: ["yarin1.png", "yarin2.png", "yarin3.png"],
  };
  
  let currentGallery = "";
  let currentIndex = 0;
  
  function openModal(imageElement, name) {
    currentGallery = name;
    const src = imageElement.getAttribute("src");
    currentIndex = galleryImages[name].indexOf(src);
    if (currentIndex === -1) currentIndex = 0;
  
    document.getElementById("modalImage").src = galleryImages[name][currentIndex];
    document.getElementById("imageModal").style.display = "flex";
    document.querySelector(".prev").classList.remove("hidden");
    document.querySelector(".next").classList.remove("hidden");
  }
  
  function closeModal() {
    document.getElementById("imageModal").style.display = "none";
    document.querySelector(".prev").classList.add("hidden");
    document.querySelector(".next").classList.add("hidden");
  }
  
  function nextImage() {
    currentIndex = (currentIndex + 1) % galleryImages[currentGallery].length;
    document.getElementById("modalImage").src = galleryImages[currentGallery][currentIndex];
  }
  
  function prevImage() {
    currentIndex = (currentIndex - 1 + galleryImages[currentGallery].length) % galleryImages[currentGallery].length;
    document.getElementById("modalImage").src = galleryImages[currentGallery][currentIndex];
  }
  
  function toggleFAQ(element) {
    const item = element.parentElement;
    item.classList.toggle("open");
  }
  