const modalOverlay = document.querySelector('.modal-overlay');
const cards = document.querySelectorAll('.card');
const links = document.querySelectorAll('.links');
const link = document.querySelector('.link');

for (let card of cards) {
    card.addEventListener("click", function() {
        const imgId = card.getAttribute("id")
        const cardTitle = card.querySelector('.card-description h1').innerHTML;
        const cardAuthor = card.querySelector('.card-description p').innerHTML;

        modalOverlay.classList.add('active')
        modalOverlay.querySelector(".img-modal").src = `../src/assests/${imgId}.png`;
        modalOverlay.querySelector(".modal-title").innerHTML = `${cardTitle}`
        modalOverlay.querySelector(".modal-author").innerHTML = `${cardAuthor}`
    })
}

for (let link of links) {
    link.addEventListener("click", function() {
        links.classList.add('active')
    })
}


document.querySelector(".close-modal").addEventListener("click", function(){
    modalOverlay.classList.remove("active")
})
