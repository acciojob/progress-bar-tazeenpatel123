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

  if (currentIndex === 0) {
    prevBtn.disabled = true;
  } else {
    prevBtn.disabled = false;
  }

  if (currentIndex === circles.length - 1) {
    nextBtn.disabled = true;
  } else {
    nextBtn.disabled = false;
  }
}
nextBtn.addEventListener("click",()=>{
	if(currentIndex<circles.lenght-1){
		currentIndex++;
		updateProgress();
	}
});
prevBtn.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateProgress();
  }
});
updateProgress();
