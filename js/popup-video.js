document.querySelectorAll(".imgs-container video").forEach(vid => {
    vid.onclick = () => {
        document.querySelector(".popup-vid").style.display = "block";
        document.querySelector(".popup-vid video").src = vid.getAttribute('src');
    }  
});

document.querySelector(".popup-vid span").onclick = () => {
    document.querySelector(".popup-vid").style.display = "none";
}