let viewMore = () => {
    let viewMoreButtonElement = document.getElementById("view-more-button");
    if (viewMoreButtonElement.innerText == "View More") {
        document.getElementById("search-image-container-1").style.display = "block";
        viewMoreButtonElement.innerText = "View Less";
    }
    else {
        document.getElementById("search-image-container-1").style.display = "none";
        viewMoreButtonElement.innerText = "View More";
    }
}
