function showType(fileInput) {
    const files = fileInput.files;
    const target = document.querySelector('.attached-file-name')
    target.textContent = files[0].name
    }
function sendFile(){
    const target = document.querySelector('#myFile').files
    if(!target.length) {
        alert('Please, attach file')
    }
    else{
        alert(`File ${target[0].name} was successfully sent`)
    }
}