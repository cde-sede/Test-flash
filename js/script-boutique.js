const cardList = document.querySelector('.card')

for (let index = 0; index < 10; index++) {
    const card = document.createElement('div')
    card.classList.add('projects-card')
    card.classList.add('appear')
    card.style.animationDelay = `${index * 0.05}s`
    card.style.opacity = 0
    card.innerHTML = `
        <div data-tilt data-tilt-max="5">
        <div data-scroll data-scroll-speed="1" class="project" id="p1">
            <img src="../image/test.jpg" alt="projet 1" />
            <div class="project-infos">
                <a href="...">Produit 1</a>
            </div>
        </div>
    </div>
    `
    cardList.appendChild(card)
}