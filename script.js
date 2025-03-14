const button = document.querySelector(".button-main")


function clicou(){
    const img1 = document.querySelector(".card1")
    const img2 = document.querySelector(".card2")
    const img3 = document.querySelector(".card3")
    const msg = document.querySelector(".heart")

    img1.src = "./assets/evelin1.jpg"
    img2.src = "./assets/evelin2.jpg"
    img3.src = "./assets/evelin3.jpg"
    msg.style.display = "block"

}











button.addEventListener("click", clicou)


