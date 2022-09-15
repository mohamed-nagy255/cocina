document.querySelectorAll(".imgs-container img").forEach(img => {
    img.onclick = () => {
        document.querySelector(".popup").style.display = "block";
        document.querySelector(".popup img").src = img.getAttribute('src');
    }  
});

document.querySelector(".popup span").onclick = () => {
    document.querySelector(".popup").style.display = "none";
}