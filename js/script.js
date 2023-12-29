// !================ Implementing the main variables we will use ================
// converting the imgList (nodeList) into array
const imgList = Array.from(document.querySelectorAll(".item img"));
const modalContainer = document.getElementById("boxContainer");
const imgModal = document.getElementById("innerBox");
const closeBtn = document.getElementById("close");
const nextBtn = document.getElementById("next");
const preveBtn = document.getElementById("prev");
let currentImgIndex = -1;

// !================================ Functions ================================

// ? Open the modal
for (let i = 0; i < imgList.length; i++) {
  imgList[i].addEventListener("click", function (e) {
    // to see all the attributes of the element i clicked on
    console.log(e.target);

    // Switching the styling from being hidden to visible using flex
    modalContainer.style.display = "flex";

    // Retrieve the source of the image
    let imgPath = e.target.getAttribute("src");
    console.log(imgPath);

    // Assigning the image source as the background image
    imgModal.style.backgroundImage = `url(../${imgPath})`;

    // Storing the current image index for navigation between images
    currentImgIndex = imgList.indexOf(e.target);
    console.log(currentImgIndex);
  });
}

// ? Close the modal using various methods
function closeModal() {
  modalContainer.style.display = "none";
}
closeBtn.addEventListener("click", function () {
  closeModal();
});
document.addEventListener("click", function (e) {
  // Displaying the particular element that was clicked
  console.log(e.target);
  let elementTarget = e.target;
  if (elementTarget == modalContainer) {
    closeModal();
  }
});

// ? Switching between images through various methods
function nextImg() {
  // Move to the next index
  currentImgIndex++;
  if (currentImgIndex == imgList.length) {
    currentImgIndex = 0;
  }
  console.log(currentImgIndex);

  // Retrieve the source of the next image
  let nextImgPath = imgList[currentImgIndex].getAttribute("src");
  console.log(nextImgPath);

  // Assigning the image source as the background image
  imgModal.style.backgroundImage = `url(../${nextImgPath})`;
}

function prevImg() {
  // Move to the previous index
  currentImgIndex--;
  if (currentImgIndex < 0) {
    currentImgIndex = imgList.length - 1;
  }
  console.log(currentImgIndex);

  // Retrieve the source of the previous image
  let prevImgPath = imgList[currentImgIndex].getAttribute("src");
  console.log(prevImgPath);

  // Assigning the image source as the background image
  imgModal.style.backgroundImage = `url(../${prevImgPath})`;
}

nextBtn.addEventListener("click", nextImg);
preveBtn.addEventListener("click", prevImg);

// ? Keyboard Events
document.addEventListener("keyup", function (e) {
  // Displaying the specific keyboard letter pressed
  console.log(e.key);
  let pressedKey = e.key;
  switch (pressedKey) {
    // closing the modal when click on the Escape btn
    case "Escape":
      closeModal();
      break;

    // Moving to the next img when click on the right arrow btn
    case "ArrowRight":
      nextImg();
      break;

    // Moving to the previous img when click on the left arrow btn
    case "ArrowLeft":
      prevImg();
      break;
  }
});
