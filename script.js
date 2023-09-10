function zoomIn(card) {
    card.style.transform = "scale(1.05)";
}

function zoomOut(card) {
    card.style.transform = "scale(1)";
} 
function showDiploma(imageUrl) {
    var modal = document.getElementById("diplomaModal");
    var diplomaImage = document.getElementById("diplomaImage");

    diplomaImage.src = imageUrl;
    diplomaImage.style.maxHeight = "50%";
    diplomaImage.style.width = "auto";

    modal.style.display = "block";
}

function closeDiploma() {
    var modal = document.getElementById("diplomaModal");
    modal.style.display = "none";
}
