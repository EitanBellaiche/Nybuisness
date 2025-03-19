// פונקציה לפתיחת תפריט ההמבורגר
function toggleMenu() {
    document.querySelector('.main-nav').classList.toggle('open');
}

// טופס יצירת קשר - שליחת טופס עם הודעת הצלחה
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); 
    document.querySelector(".success-message").style.display = "block";
    setTimeout(() => {
        document.querySelector(".success-message").style.display = "none";
    }, 5000);
});

// הופעת אלמנטים בעת גלילה
document.addEventListener("scroll", function() {
    let elements = document.querySelectorAll(".fade-in");
    elements.forEach(el => {
        let position = el.getBoundingClientRect().top;
        let windowHeight = window.innerHeight;
        if (position < windowHeight - 50) {
            el.classList.add("visible");
        }
    });
});
