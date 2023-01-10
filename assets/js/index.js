const date = document.querySelector("#date")

date.innerHTML = new Date().getFullYear();

// Collapse 

const collapseCollection = document.querySelectorAll("*[data-hf-function='collapse']")

for (item of collapseCollection) {
    item.addEventListener("click", (t) => {
        for (child of item.children) {
            if (child.classList.contains("collapse")) {
                child.classList.toggle("hide")
                child.classList.toggle("show")
                child.style.height =
                    child.classList.contains("hide") 
                    ? "0" 
                    : "auto"
            }
        }
    })
}