// Przełączanie zakładek
// OPIS: Przełączanie widocznych sekcji na stronie w zależności od klikniętego przycisku.
document.querySelectorAll(".tab-button").forEach(button => {
    button.addEventListener("click", () => {
        // Ukryj wszystkie sekcje
        document.querySelectorAll(".tab-content").forEach(tab => tab.classList.remove("active"));

        // Pokaż wybraną sekcję
        const target = document.getElementById(button.dataset.tab);
        target.classList.add("active");
    });
});

// OPIS: Funkcja do zmiany zdjęcia z efektem przejścia.
function updateImageWithEffect(imageElement, newSrc) {
    imageElement.classList.add("fade-in"); // Dodaj efekt
    setTimeout(() => {
        imageElement.src = newSrc; // Zmień obraz po krótkim czasie
        imageElement.classList.remove("fade-in"); // Usuń efekt po zakończeniu
    }, 250); // Połowa czasu trwania animacji
}

// OPIS: Funkcja do inicjalizacji galerii (zmiana zdjęć, strzałki, automatyczne przewijanie).
function initGallery(galleryId, images) {
    const gallery = document.getElementById(galleryId);
    const imgElement = gallery.querySelector("img");
    const prevButton = gallery.querySelector(".prev");
    const nextButton = gallery.querySelector(".next");
    let currentIndex = 0;

    // Funkcja do zmiany obrazu w galerii
    const updateImage = () => {
        updateImageWithEffect(imgElement, images[currentIndex]);
    };

    // Obsługa strzałki wstecz
    prevButton.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateImage();
    });

    // Obsługa strzałki naprzód
    nextButton.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % images.length;
        updateImage();
    });

    // Automatyczna zmiana zdjęcia co 60 sekund
    setInterval(() => {
        currentIndex = (currentIndex + 1) % images.length;
        updateImage();
    }, 60000); // 60000 ms = 60 sekund
}

// Inicjalizacja galerii dla poszczególnych sekcji
initGallery("gallery-nida", [
    "images/img1.jpg",
    "images/img2.jpg",
    "images/img3.jpg",
    "images/img4.jpg",
    "images/img5.jpg"
]);

initGallery("gallery-klimkowka", [
    "images/klimkowka1.jpg",
    "images/klimkowka2.jpg",
    "images/klimkowka3.jpg"
]);