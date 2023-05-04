const images = document.querySelectorAll('.slider__img');
const button = document.querySelector('.slider__button');

let currentImageIndex = 0;

button.addEventListener('click', () => {
  // Увеличиваем индекс текущего изображения на 1
  currentImageIndex++;

  // Если индекс текущего изображения превышает количество изображений,
  // вернуться к первому изображению
  if (currentImageIndex >= images.length) {
    currentImageIndex = 0;
  }

  // Изменяем значение атрибута src у текущего изображения на следующее изображение
  images.forEach((image, index) => {
    if (index === currentImageIndex) {
      image.classList.add('current');
    } else {
      image.classList.remove('current');
    }
  });
});