const images = [
  'image1.jpg',
  'image2.jpg',
  'image3.jpg',
];

let currentIndex = 0;
const sliderImage = document.getElementById('slider-image');
const prevButton = document.getElementById('prev-btn');
const nextButton = document.getElementById('next-btn');

function showImage(index) {
  if (index < 0) {
      index = images.length - 1;
  } else if (index >= images.length) {
      index = 0;
  }
  sliderImage.src = images[index];
  currentIndex = index;
}

showImage(currentIndex);

prevButton.addEventListener('click', () => {
  showImage(currentIndex - 1);
});

nextButton.addEventListener('click', () => {
  showImage(currentIndex + 1);
});

