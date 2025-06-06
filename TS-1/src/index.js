import Cropper from 'cropperjs';
import 'cropperjs/dist/cropper.css';

let cropper;

function initializeCropper(imageSrc) {
  const image = document.getElementById('image');
  image.src = imageSrc;

  if (cropper) {
    cropper.destroy();
  }

  cropper = new Cropper(image, {
    crop(event) {
      console.log(event.detail.x);
      console.log(event.detail.y);
      console.log(event.detail.width);
      console.log(event.detail.height);
      console.log(event.detail.rotate);
      console.log(event.detail.scaleX);
      console.log(event.detail.scaleY);
    },
  });
}

function getCroppedImage() {
  const canvas = cropper.getCroppedCanvas();
  const croppedImage = canvas.toDataURL();
  console.log(croppedImage);

  const croppedImageElement = document.getElementById('croppedImage');
  croppedImageElement.src = croppedImage;
  croppedImageElement.style.display = 'block';
}

function saveCroppedImage() {
  const canvas = cropper.getCroppedCanvas();
  const croppedImage = canvas.toDataURL('image/png');

  const link = document.createElement('a');
  link.href = croppedImage;
  link.download = 'cropped-image.png';
  link.click();
}

const cropButton = document.getElementById('cropButton');
cropButton.addEventListener('click', () => {
  getCroppedImage();
});

const uploadButton = document.getElementById('uploadButton');
const image = document.getElementById('image');
uploadButton.addEventListener('click', () => {
  const input = document.createElement('input');
  input.type = 'file';
  input.accept = 'image/*';
  image.style.display = 'inline';
  input.onchange = (event) => {
    const file = event.target.files[0];

    if (file.size > 300 * 1024) {
      return;
    }

    const reader = new FileReader();
    reader.onload = function (e) {
      initializeCropper(e.target.result);
    };

    reader.readAsDataURL(file);
  };

  input.click();
});

const saveButton = document.getElementById('saveButton');
saveButton.addEventListener('click', () => {
  saveCroppedImage();
});

