document.addEventListener("DOMContentLoaded", () => {
    // מצב כהה
    const darkModeBtn = document.getElementById("toggleDarkMode");
    darkModeBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
        localStorage.setItem("darkMode", document.body.classList.contains("dark-mode"));
    });

    // כפתור חזרה למעלה
    const scrollToTopBtn = document.getElementById("scrollToTop");
    window.addEventListener("scroll", () => {
        scrollToTopBtn.style.display = window.scrollY > 300 ? "block" : "none";
    });

    scrollToTopBtn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    // פתיחת שאלות נפוצות
    window.toggleFAQ = (element) => {
        element.nextElementSibling.classList.toggle("open");
    };

    // בלוג דינמי
    const blogContainer = document.getElementById("blog-container");
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
});

document.addEventListener("DOMContentLoaded", function () {
    // הוספת אפקט רקע בעת גלילה
    window.addEventListener("scroll", function () {
        const header = document.querySelector(".main-header");
        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });

    // תפריט המבורגר דינמי
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".main-nav");

    hamburger.addEventListener("click", function () {
        navMenu.classList.toggle("open");
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector(".testimonial-slider");
    const prevButton = document.querySelector(".prev-slide");
    const nextButton = document.querySelector(".next-slide");

    prevButton.addEventListener("click", function () {
        slider.scrollBy({
            left: -320,
            behavior: "smooth"
        });
    });

    nextButton.addEventListener("click", function () {
        slider.scrollBy({
            left: 320,
            behavior: "smooth"
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");
    const successMessage = document.querySelector(".success-message");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // ביטול השליחה הרגילה של הטופס

        // הוספת אנימציה לטופס
        form.style.opacity = "0.5";
        setTimeout(() => {
            form.style.opacity = "1";
            successMessage.style.display = "block"; // הצגת הודעת הצלחה
            form.reset(); // ניקוי הטופס לאחר השליחה
        }, 1000);
    });
});

// גלריות לכל הממליצים
const galleryImages = {
    yael: ["img1.jpeg", "img2.jpeg", "img3.jpeg", "img4.jpeg"]
};

// משתנה לזיהוי התמונה הנוכחית
const currentIndexes = { yael: 0 };

// פתיחת המודל עם התמונה הנבחרת
function openModal(imageElement, name) {
    currentIndexes[name] = galleryImages[name].indexOf(imageElement.src);
    
    if (currentIndexes[name] === -1) currentIndexes[name] = 0;

    document.getElementById("modalImage").src = galleryImages[name][currentIndexes[name]];
    document.getElementById("imageModal").style.display = "flex";

    // הצגת חצי ניווט רק כשהמודל פתוח
    document.querySelector(".prev").classList.remove("hidden");
    document.querySelector(".next").classList.remove("hidden");
}

// סגירת המודל
function closeModal() {
    document.getElementById("imageModal").style.display = "none";

    // הסתרת חצי הניווט כאשר המודל נסגר
    document.querySelector(".prev").classList.add("hidden");
    document.querySelector(".next").classList.add("hidden");
}

// הצגת התמונה הקודמת במודל
function prevImage() {
    let name = "yael"; // שם הגלריה
    currentIndexes[name] = (currentIndexes[name] - 1 + galleryImages[name].length) % galleryImages[name].length;
    document.getElementById("modalImage").src = galleryImages[name][currentIndexes[name]];
}

// הצגת התמונה הבאה במודל
function nextImage() {
    let name = "yael";
    currentIndexes[name] = (currentIndexes[name] + 1) % galleryImages[name].length;
    document.getElementById("modalImage").src = galleryImages[name][currentIndexes[name]];
}
