document.addEventListener("DOMContentLoaded", () => {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightboxImg");
  const lightboxCaption = document.getElementById("lightboxCaption");
  const closeBtn = document.getElementById("lightboxClose");

  function openLightbox(imgEl) {
    lightboxImg.src = imgEl.src;
    lightboxImg.alt = imgEl.alt;
    lightboxCaption.textContent = imgEl.alt;
    lightbox.classList.add("open");
    lightbox.setAttribute("aria-hidden", "false");
  }

  function closeLightbox() {
    lightbox.classList.remove("open");
    lightbox.setAttribute("aria-hidden", "true");
    lightboxImg.src = "";
  }

  document.querySelectorAll(".gallery-img").forEach(img => {
    img.style.cursor = "pointer";
    img.addEventListener("click", () => openLightbox(img));
  });

  closeBtn.addEventListener("click", closeLightbox);

  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) closeLightbox();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeLightbox();
  });
});
