
const API_URL = "https://travel-advisor.p.rapidapi.com/locations/v2/auto-complete";
const rapidapiKey = "ad439a2c9amshf2a0c5fa6c52cddp126b6fjsnd0013d234f79";
const rapidapiHost = "travel-advisor.p.rapidapi.com";

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
