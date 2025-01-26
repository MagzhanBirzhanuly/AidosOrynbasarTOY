// Функция для генерации массива с именами фотографий от PRO_7286 до PRO_8265
function generateImageNames() {
  const images = [];
  for (let i = 7286; i <= 8265; i++) {
    if (i !== 7290) { // Пропускаем PRO_7290
      images.push(`PRO_${i}.jpg`);
    }
  }
  return images;
}

// Функция для добавления изображений и кнопок на страницу
function loadGallery() {
  const galleryContainer = document.querySelector('.gallery');
  const images = generateImageNames(); // Получаем массив с именами изображений

  images.forEach(image => {
    const imgContainer = document.createElement('div');
    imgContainer.classList.add('image-container');
    
    const imgElement = document.createElement('img');
    imgElement.src = `images/${image}`; // Путь к изображению
    imgElement.alt = image; // Альтернативный текст

    const downloadButton = document.createElement('a');
    downloadButton.href = `images/${image}`;
    downloadButton.classList.add('download-btn');
    downloadButton.textContent = 'Скачать';

    // Добавляем изображение и кнопку в контейнер
    imgContainer.appendChild(imgElement);
    imgContainer.appendChild(downloadButton);

    // Добавляем контейнер с изображением и кнопкой на страницу
    galleryContainer.appendChild(imgContainer);
  });
}

// Загружаем галерею при старте страницы
window.onload = loadGallery;
