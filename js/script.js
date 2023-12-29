// !================ Implementing the main variables we will use ================
const imgList = document.querySelectorAll(".item img");
const modalContainer = document.getElementById("boxContainer");
const imgModal = document.getElementById("innerBox");
const closeBtn = document.getElementById("close");

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
  });
}

// ? Close the modal using various methods
function closeModal() {
  modalContainer.style.display = "none";
}
closeBtn.addEventListener("click", function () {
  closeModal();
});
document.addEventListener('click', function (e) {
  // Displaying the particular element that was clicked
  console.log(e.target);
  let elementTarget = e.target;
  if (elementTarget == modalContainer){
    closeModal();
  }
})

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
  }
});
