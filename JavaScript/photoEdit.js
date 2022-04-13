

const uploadBtn = document.getElementById("upload-btn");
const inputUploadBtn = document.getElementById("input-upload-btn");
let chosenImage = document.getElementById("chosen-image");
const downloadImg = document.getElementById("download-img")

let contrast = document.getElementById("contrast");
let hueRotate = document.getElementById("hue-rotate");
let sepia = document.getElementById("sepia");
let blur = document.getElementById("blur");
let brightness = document.getElementById("brightness")
let saturate = document.getElementById("saturate")

let mirrorBtn = document.getElementById("mirror-btn");

uploadBtn.onclick = () => {
    inputUploadBtn.click();
};

inputUploadBtn.onchange = () => {
    document.querySelector(".image-container").style.display = "block";
    let reader = new FileReader();
    reader.readAsDataURL(inputUploadBtn.files[0]);
    reader.onload = () => {
        chosenImage.setAttribute("src", reader.result);
        chosenImage.style.outline = "2px solid white";
        uploadBtn.style.display = "none";
    };
};
function addFilter() {
    chosenImage.style.filter = `contrast(${contrast.value}%) hue-rotate(${hueRotate.value}deg) sepia(${sepia.value}%) blur(${blur.value}px) brightness(${brightness.value}%) saturate(${saturate.value}%)`;
}

let sliders = document.querySelectorAll(".filter input[type='range']");
sliders.forEach( slider => {
    slider.addEventListener("input", addFilter);
});

mirrorBtn.onclick = () =>{
    chosenImage.classList.toggle('mirror')
}

downloadImg.addEventListener('click', ()=>{
    let imgPath = chosenImage.getAttribute('src')
    let fileName = getFileName(imgPath)
    saveAs(imgPath,fileName)
})
function getFileName(str) {
    return str.substring(str.lastIndexOf('/')+1)
}