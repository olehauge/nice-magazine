// Toggle "letters"
document.querySelectorAll('.toggle-letter').forEach(btn => {
  btn.addEventListener('click', () => {
    const content = btn.nextElementSibling;
    content.style.display = content.style.display === 'block' ? 'none' : 'block';
  });
});

// Scroll animations
gsap.utils.toArray('.story-block').forEach((block) => {
  gsap.from(block, {
    scrollTrigger: {
      trigger: block,
      start: "top 80%",
      toggleActions: "play none none reverse",
    },
    opacity: 0,
    y: 50,
    duration: 0.8,
    ease: "power2.out"
  });
});
