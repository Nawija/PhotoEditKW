const borderDropImg = document.querySelector(".border-drop-img");
const dropText = document.getElementById('dropText')
const browseFileBtn = document.getElementById("browseFileBtn");
const inputImg = document.getElementById('inputImg')
let file; // watch out!!! :)
const mirror = document.getElementById('mirror')

mirror.onclick = ()=>{
    borderDropImg.classList.add('mirror')
}

browseFileBtn.onclick = ()=>{
    inputImg.click()
}

inputImg.addEventListener('change', function(){
    file = this.files[0]
    showFile()
})


borderDropImg.addEventListener("dragover", (event) => {
    event.preventDefault();
    borderDropImg.classList.add("active");
    dropText.textContent = 'Relese Image to Upload'
});
borderDropImg.addEventListener("dragleave", () => {
    borderDropImg.classList.remove("active");
    dropText.textContent = 'Drop & Drag Image Here'
});
borderDropImg.addEventListener("drop", (event) => {
    event.preventDefault();
    borderDropImg.classList.remove("active");
    file = event.dataTransfer.files[0];
    showFile()
});

function showFile() {
    let fileType = file.type;

    let validExtensions = ["image/jpeg", "image/jpg", "image/png",];
    if (validExtensions.includes(fileType)) {
        let fileReader = new FileReader();
        fileReader.onload = () => {
            let fileURL = fileReader.result;
            let imgTag = `<img src="${fileURL}">`
            borderDropImg.innerHTML = imgTag
        };
    fileReader.readAsDataURL(file)
    } else {
        alert("This is not an image file!");
        borderDropImg.classList.remove("active");
    }
}