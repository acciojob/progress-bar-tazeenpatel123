//your JS code here. If required.
const circles=document.querySelectorAll(".circle");
const prevBtn=document.getElementById("prev");
const nextBtn=document.getElementById("next");

let currentIndex = 0;

function updateProgress() {
  circles.forEach((circle, index) => {
    if (index === currentIndex) {
      circle.classList.add('active');
    } else {
      circle.classList.remove('active');
    }
  });

  prevBtn.disabled = currentIndex === 0;
  nextBtn.disabled = currentIndex === circles.length - 1;
}
prevBtn.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateProgress();
  }
});
updateProgress();
