// !================ Implementing the main variables we will use ================
const imgList = document.querySelectorAll(".item img");
const modalContainer = document.getElementById("boxContainer");
const imgModal = document.getElementById("innerBox");

// !================================ Functions ================================

// ? Open Modal
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
